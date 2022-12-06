const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`mongoDb connected with server ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
