async function noParam(req, res) {
    res.render('setup')
}
const sendSetup = (req, res)=>{
    const {numberOfNumbers,maxValue} = req.body
   
    let max = maxValue
    let nbOfNb = numberOfNumbers
    res.redirect(`/jeu/?max=${max}&nbOfNb=${nbOfNb}`)
}
const startGame = (req, res)=>{
    const { max, nbOfNb}= req.query 
    let tab = [];
    for(let k = 0; k<nbOfNb; k++){
        tab.push(Math.floor(Math.random() * (parseInt(max) + 1)));
    }
    console.log(max)
    res.render('startGame', {tab, timer})
}
const timer = (req, res) => {
    
let timer = 30
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const interval = setInterval(() => {
        if (timer >= 0) {
            res.write(`data: Timer: ${timer}\n\n`);
            timer--;

            if (timer < 0) {
                clearInterval(interval);
                res.write(`data: PERDU\n\n`);
            }
        }
    }, 1000);
}


module.exports = { noParam, startGame, timer, sendSetup }