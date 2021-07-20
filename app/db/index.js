require('dotenv').config();
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ysfmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const Mongoose = require('mongoose');

// Connection to database
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DataBase Connected!..'))
  .catch((err) => console.log(err.message));
// CHecking for Database connection
Mongoose.connection.on('connected', () => {
  console.log('Mongoosed connected to Database');
});

// Catching errors
Mongoose.connection.on('error', (error) => {
  console.log(error.message);
});

// Checking database disconnection
Mongoose.connection.on('disconnected', (error) => {
  console.log('Mongoose connection is disconnected');
});

// Disconnecting te database in app exit
process.on('SIGINT', async () => {
  await Mongoose.connection.close();
});

// Create a shcema that defines the structure for storing the user data
const chatUser = new Mongoose.Schema({
  profileId: String,
  fullName: String,
  profilePic: String,
});

// Creating a modal for the user
let userModel = Mongoose.model('chatUser', chatUser);
module.exports = {
  Mongoose,
  userModel,
};
