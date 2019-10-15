const mongoose = require("mongoose");
const keys = require("./src/core/keys.js");

//mongoose.connect('mongodb+srv://userName:Passwrod@cluster.mongodb.net/', {dbName: 'yourDbName'});
//mongodb://testeadireto:<password>@cluster0-shard-00-00-gswb9.mongodb.net:27017,cluster0-shard-00-01-gswb9.mongodb.net:27017,cluster0-shard-00-02-gswb9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb://xxx:yyy@cluster0-shard-00-00-gswb9.mongodb.net:27017,cluster0-shard-00-01-gswb9.mongodb.net:27017,cluster0-shard-00-02-gswb9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
