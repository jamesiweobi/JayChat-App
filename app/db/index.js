const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ysfmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const Mongoose = require('mongoose').connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('DataBase Connected...');
  }
);

module.exports = {
  Mongoose,
};
// connectDB = async () => {
//   await Mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log('DataBase Connected');

//   mongoose.connection.on('error', (error) => {
//     console.log('Database Error: ', error);
//   });
// };
