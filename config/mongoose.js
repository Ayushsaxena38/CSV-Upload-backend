const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ayushsaxena38:Ayush@12345@cluster0.dwrztdb.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
