const express = require('express')
const router = express.Router()

const {noParam,
    startGame,
    timer,
<<<<<<< HEAD
    calculate
=======
    sendSetup
>>>>>>> ae7e2fea31e8fdb89da43d8f889c463f41601226
} = require('./controller')

router.get("/", noParam);
router.get("/jeu", startGame)
router.get('/timer', timer);
<<<<<<< HEAD
router.post('/calculate', calculate);
=======
router.post("/start", sendSetup)


>>>>>>> ae7e2fea31e8fdb89da43d8f889c463f41601226
module.exports = router