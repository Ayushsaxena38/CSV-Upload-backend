const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/csv_upload_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
