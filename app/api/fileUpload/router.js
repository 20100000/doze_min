import express from 'express';
import molter from './tool/multerConfig';
const PATH = '/song';
const router = express.Router();

router.post('/file', molter.upload.single('audio'), async (req, res, next) => {
     return res.send(JSON.stringify({success: true, data: req.file.filename}));
});


module.exports = { path: PATH, router };
