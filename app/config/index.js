const mongoose = require('mongoose');
require('dotenv').config();
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ysfmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = connectDB = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DataBase Connected');

  mongoose.connection.on('error', (error) => {
    console.log('Database Error: ', error);
  });
};
