const express = require('express');

const studentRouter = express.Router();
const studentController = require('../controllers/studentController.js');

// visi GET /api/students studentai
studentRouter.get('/students', studentController.all);

//GET viena pagal ID /api/students:id
studentRouter.get('/students/:id', studentController.single);

//POST irasyti studenta /api/students
studentRouter.post('/students', studentController.create);

//PUT  /api/students/:id duomenu atnaujinimas
studentRouter.put('/students/:id', studentController.update);

//DELETE /api/students/:id istrinimas pagal id
studentRouter.delete('/students/:id', studentController.delete);




module.exports = studentRouter;