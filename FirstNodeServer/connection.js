const mongoose=require('mongoose');
require('dotenv').config()

const a=() =>{
    const db= mongoose

    db.connect(process.env.DATABASE_URL,{ useNewUrlParser: true },{ useUnifiedTopology: true })

    db.connection.once('open',() => {
        console.log('\nConnection to DB successful\n\nPress ctrl+c to stop');
    }).on('error',(error) =>{
        console.error('Connection error', error);
    });
};

module.exports.a=a;