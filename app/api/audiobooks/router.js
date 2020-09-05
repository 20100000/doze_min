import express from 'express';
import Controller from './controller';
import model from './model';
import fs from 'file-system';
const PATH = '/music';
const router = express.Router();

const controller = Controller.getController(model, fs);
router.get('/', controller.musicAll);
router.get('/:id', controller.getMusic);
router.get('/play/:audio', controller.playMusic);
router.get('/search/:find', controller.searchMusic);
router.post('/', controller.saveMusic);
router.put('/:id', controller.updateMusic);
router.delete('/:id', controller.deleteMusic);
router.delete('/tag/:id', controller.deleteTag);

module.exports = { path: PATH, router };
