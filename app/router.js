const express = require('express')
const router = express.Router()

const {noParam,
    startGame,
    timer,
    calculate,
    sendSetup
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)
router.get('/timer', timer);
router.post('/start', sendSetup)
router.post('/calculate', calculate);
module.exports = router