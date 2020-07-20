const router = require('express').Router();
const doctorsController = require('../../controllers/doctorsController');

// Matches with "/api/books"
router.route('/')
  .get(doctorsController.findAll)
  .post(doctorsController.create);

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(doctorsController.findById)
  .put(doctorsController.update)
  .delete(doctorsController.remove);

module.exports = router;
