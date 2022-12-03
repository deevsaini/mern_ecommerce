const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"],
  },
});
