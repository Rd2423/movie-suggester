const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/movie-suggester',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

module.exports = mongoose.connection;