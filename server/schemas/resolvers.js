const { signToken } = require("../utils/auth");
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-passsword");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    saveMovie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedMovie: args.input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error("You need to be logged in!");
    },
    removeMovie: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { saveMovie: { movieId: args.movieId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Can't remove the movie");
    },
  },
};
module.exports = resolvers;
