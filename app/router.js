const express = require('express')
const router = express.Router()

const {noParam,
    startGame,
    timer,
    sendSetup
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)
router.get('/timer', timer);
router.post("/start", sendSetup)


module.exports = router