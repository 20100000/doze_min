import express from 'express';
import Controller from './controller';
import model from './model';
import molter from './tool/multerConfig';
import fs from 'file-system';
const PATH = '/music';
const router = express.Router();

const controller = Controller.getController(model, fs);
router.get('/', controller.musicAll);
router.get('/:id', controller.getMusic);
router.get('/play/:audio', controller.playMusic);
router.get('/search/:find', controller.searchMusic);
router.post('/file', molter.upload.single('audio'), async (req, res, next) => {
   return res.send(JSON.stringify({success: true, data: req.file.filename}));
});
router.post('/', controller.saveMusic);
router.put('/:id', controller.updateMusic);
router.delete('/:id', controller.deleteMusic);

module.exports = { path: PATH, router };
