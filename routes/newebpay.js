const express = require("express");
const router = express.Router();
const newebpayController = require("../controllers/newebpay");
const handleErrorAsync = require("../utils/handleErrorAsync");

router.post("/return", handleErrorAsync(newebpayController.postReturn));
router.post("/notify", handleErrorAsync(newebpayController.postNotify));

module.exports = router;
