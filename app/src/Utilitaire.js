
 const verifier = (somme, tableau) => {
        const total = tableau.reduce((acc, val) => acc + val, 0);
        return somme === total;
    }
module.exports = {verifier};