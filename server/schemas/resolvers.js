
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user){

                const userData = await User.findOne({_id: context.user._id})
                return userData;
            }
            console.log('Cannot find a user with this id')
        },
        users: async () => {
            return User.find()
        }
    },
    Mutation: {
        login: async(parent, {email, password}) => {
            const user = await User.findOne({ email })
            if(!user) {
                throw new AuthencationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthencationError('Incorrect credentials');
            }
        },
        addUser: async(parent, args) => {
            const user = await User.create(args);
            return user;
        }
    }
};
module.exports = resolvers;