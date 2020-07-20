const router = require('express').Router();
const medicationsController = require('../../controllers/medicationsController');

// Matches with "/api/books"
router.route('/')
  .get(medicationsController.findAll)
  .post(medicationsController.create);

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(medicationsController.findById)
  .put(medicationsController.update)
  .delete(medicationsController.remove);

module.exports = router;
