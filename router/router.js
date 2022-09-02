const playlistController = require('../controller/playlist.controller');

const Router = require('express').Router;
const router = Router();

router.post('/playlist', playlistController.create);
router.delete('/playlist/:id', playlistController.delete);
router.get('/playlist', playlistController.getAll);

module.exports = router;