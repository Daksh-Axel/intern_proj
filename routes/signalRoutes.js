const express = require('express');
const router = express.Router();
const signalService = require('../services/signalService');

// Signal configuration routes
router.get('/', signalService.getAllSignals);
router.post('/', signalService.createSignal);
router.put('/:id', signalService.updateSignal);
router.delete('/:id', signalService.deleteSignal);

module.exports = router;
