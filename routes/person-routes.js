const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');
const {body} = require('express-validator');
const validateRes = require('../middleware/validate-name');


router.get('/', personController.getPersons);
router.get('/:user_id', personController.getPerson);
router.post('/', [
    body('name').isString().withMessage('Name should be a string')
  ], validateRes.validate,
  personController.createPerson);
router.put('/:user_id', [
    body('name').isString().withMessage('Name should be a string')
  ], validateRes.validate, personController.updatePerson);
router.delete('/:user_id', personController.deletePerson);

module.exports = router;