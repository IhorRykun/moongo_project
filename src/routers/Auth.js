const express = require("express");
const { login, signUp } = require("../controllers/auth");

const router = express.Router({ mergeParams: true });

router.route("/login").post(login);
router.route("/signup").post(signUp);

module.exports = router;
