const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Give Price"],
    maxLength: [8, "Price cannot Exceed 8 figures "],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Give Category"],
  },
  stock: {
    type: Number,
    required: [true, "please Enter Stock"],
    maxLength: [4, "Cannot exceed 4 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: { type: String, required: true },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("product", productSchema);
