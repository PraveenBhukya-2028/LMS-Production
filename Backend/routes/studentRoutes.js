const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
  "/profile",
  authMiddleware,
  roleMiddleware("student"),
  (req, res) => {
    return res.json({
      success: true,
      message: "Student Profile",
      user: req.user,
    });
  }
);

module.exports = router;