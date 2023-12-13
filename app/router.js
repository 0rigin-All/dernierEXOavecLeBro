const express = require('express')
const router = express.Router()

const {noParam,
    startGame
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)

module.exports = router