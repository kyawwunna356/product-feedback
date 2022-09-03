const express = require("express");
const {
  getAllfeedbacks,
  addFeedback,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controller/feedbackController");
const tokenChecker = require('../middleware/tokenChecker')

const router = express.Router();

//middleware
router.use(tokenChecker)

router.route("/").get(getAllfeedbacks).post(addFeedback);

router
  .route("/:id")
  .get(getSingleFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);

module.exports = router;
