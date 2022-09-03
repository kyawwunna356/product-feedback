const express = require("express");
const { getCategories,addCategory } = require("../controller/categoryController");
const tokenChecker = require('../middleware/tokenChecker')


const router = express.Router();

router.use(tokenChecker)

router.route("/").get(getCategories).post(addCategory);

module.exports = router