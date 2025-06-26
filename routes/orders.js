const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const handleErrorAsync = require("../utils/handleErrorAsync");

router.post("/", handleErrorAsync(ordersController.postOrder));

module.exports = router;
