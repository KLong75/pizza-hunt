const router = require('express').Router();

const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

// Set up GET all and Post at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// set up Get one, PUT, and DELETE at /api/pizzas:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;