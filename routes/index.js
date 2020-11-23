const express = require("express");
const { helloWorld, contactUs, sendQuote } = require("./../controllers");
const { validate } = require("../validations");
const {
  contactUsValidationRules,
  sendQuoteValidationRules,
} = require("../validations/rules");

const router = express.Router();

// TODO: Move validators to controllers
router.get("/", helloWorld);
router.post("/contact-us", contactUsValidationRules(), validate, contactUs);
router.post("/send-quote", sendQuoteValidationRules(), validate, sendQuote);

module.exports = router;
