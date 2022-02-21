const mongoose = require('mongoose');
 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movie-suggester',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

module.exports = mongoose.connection;