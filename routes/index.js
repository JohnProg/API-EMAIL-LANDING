const express = require("express");
const { contactUs, sendQuote } = require("./../controllers");
const { validate } = require("../helpers/validator");
const {
  contactUsValidationRules,
  sendQuoteValidationRules,
} = require("../helpers/validator/rules");

const router = express.Router();

router.get("/", function (_req, res) {
  res.json({ name: "hi" });
});

router.post("/contact-us", contactUsValidationRules(), validate, contactUs);
router.post("/send-quote", sendQuoteValidationRules(), validate, sendQuote);

module.exports = router;
