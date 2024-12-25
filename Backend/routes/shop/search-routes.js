const express = require("express");

const { searchProducts } = require("../../controllers/shop/search-controller");

const route = express.Router();

router.get("/:keyword", searchProducts);

module.exports = routes;
