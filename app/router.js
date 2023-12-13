const express = require('express')
const router = express.Router()

const {noParam,
    startGame,
    timer
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)
router.get('/timer', timer);
module.exports = router