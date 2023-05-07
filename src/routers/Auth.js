const express = require("express");
const { login, signUp } = require("../controllers/Auth");

const router = express.Router({ mergeParams: true });

router.route("/login").post(login);
router.route("/signup").post(signUp);

module.exports = router;
