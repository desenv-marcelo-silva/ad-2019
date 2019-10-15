const mongoose = require('mongoose')

const keys = require('../../core/keys.js')

module.exports = {
    conectar: function() {
        let mongoOptions = {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        }

        mongoose
            .connect(keys.mongoURI, mongoOptions)
            .then(() => {
                console.log("Conectado.");    
            })
            .catch(err => {
                console.log('Problemas com a conexão.', err);
                process.exit();
             });
    }
};