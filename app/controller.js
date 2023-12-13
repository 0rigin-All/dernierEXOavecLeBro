const { verifier } = require("./src/Utilitaire")

async function noParam(req, res) {
    res.send("Site de calcul")
}

const startGame = (req, res)=>{
    let timer = 10; 
    const tab = [12,34,56,87,12,54]
    res.render('startGame', {tab, timer})
}
const timer = (req, res) => {
    let timer = 10;

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

const calculate = (req, res) => {
    const userInput = req.body.result;
    const tabJSON = req.body.tab;

    const tab = JSON.parse(tabJSON);

    // console.log(userInput);
    // console.log(tab);
    const result = verifier(userInput, tab)

   

    res.render('result', {result});
};



module.exports = { noParam, startGame, timer, calculate }