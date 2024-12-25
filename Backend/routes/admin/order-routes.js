const express = require("express");

const {
  getAllOrdersOfAllUser,
} = require("../../controllers/admin/products-controller");

const router = express.Router();

router.get("/get", getAllOrdersOfAllUsers);

module.exports = router;
