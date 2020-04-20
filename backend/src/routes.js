const routes = require('express').Router();
const CarController = require('./controllers/CarController');
const AuthController = require('./controllers/AuthController');

routes.post('/login', AuthController.login);
routes.get('/cars', CarController.index);
routes.post('/cars', CarController.create);

module.exports = routes;