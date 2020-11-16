const { body } = require("express-validator");

const contactUsValidationRules = () => {
  return [
    body("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("Enter correct email")
      .normalizeEmail(),
    body("companyName")
      .not()
      .isEmpty()
      .withMessage("companyName is required")
      .trim()
      .escape(),
    body("fullname")
      .not()
      .isEmpty()
      .withMessage("fullname is required")
      .trim()
      .escape(),
    body("cellphone")
      .not()
      .isEmpty()
      .withMessage("cellphone is required")
      .isNumeric()
      .isLength({ max: 9, min: 7 })
      .withMessage("Enter correct cellphone")
      .trim()
      .escape(),
    body("message")
      .not()
      .isEmpty()
      .withMessage("message is required")
      .trim()
      .escape(),
  ];
};

const sendQuoteValidationRules = () => {
  return [
    body("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("Enter correct email")
      .normalizeEmail(),
    body("fullname")
      .not()
      .isEmpty()
      .withMessage("fullname is required")
      .trim()
      .escape(),
    body("cellphone")
      .not()
      .isEmpty()
      .withMessage("cellphone is required")
      .isNumeric()
      .isLength({ max: 9, min: 7 })
      .withMessage("Enter correct cellphone")
      .trim()
      .escape(),
    body("message")
      .not()
      .isEmpty()
      .withMessage("message is required")
      .trim()
      .escape(),
  ];
};

module.exports = {
  contactUsValidationRules,
  sendQuoteValidationRules,
};
