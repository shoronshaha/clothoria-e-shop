const mongoose = require("mongoose");

const productReviewSchema = new mongoose.Schema(
  {
    productId: String,
    userId: String,
    userName: String,
    reviewMessage: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductReview", productReviewSchema);
