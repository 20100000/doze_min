import express from 'express';
import Controller from './controller';
import model from './model';
import jwt from 'jsonwebtoken';
import config from '../../../config/config';
const PATH = '/login';


const router = express.Router();

const controller = Controller.getController(model, jwt, config);
router.post('/', controller.autenticar);


module.exports = { path: PATH, router };
