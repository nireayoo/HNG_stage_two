const {validationResult} = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };

//   const validationRules =  [
//     check('name')
//       .isString()
//       .withMessage('Name must be a string')
//       .notEmpty()
//       .withMessage('Name cannot be empty'),
//   ];

  module.exports = {
    validate,
  }