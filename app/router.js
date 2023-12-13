const express = require('express')
const router = express.Router()

const {noParam,
    startGame,
    timer,
    calculate
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)
router.get('/timer', timer);
router.post('/calculate', calculate);
module.exports = router