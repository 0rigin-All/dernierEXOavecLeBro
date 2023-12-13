async function noParam(req, res) {
    res.send("Site de calcul")
}

const startGame = (req, res)=>{
    const tab = [12,34,56,87,12,54]
    res.render('startGame', {tab, timer})
}

module.exports = { noParam, startGame }