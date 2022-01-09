const express = require('express');
const router = express.Router();
const Client = require('../models').Client; //importando meu model

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      // Forward error to the global error handler
      next(error);
    }
  }
}

/* GET clients listing. */
router.get('/', asyncHandler(async (req, res) => {
  const clients = await Client.findAll({
    order: [['createdAt', 'DESC']]
  });
  res.send(clients);
}));

/* POST create cliente novo. */
router.post('/', asyncHandler(async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).send(res.json(client.id));
}));

/* Delete client form. */
router.delete("/:id", asyncHandler(async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  client.destroy();
  res.sendStatus(204);
}));

module.exports = router;