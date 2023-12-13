const assert = require('assert');
const {verifier} = require('../app/src/Utilitaire');

describe('Tests pour la méthode verifier de Utilitaire', () => {
    it('devrait retourner true si la somme est égale à la somme des valeurs du tableau', () => {
        const somme = 10;
        const tableau = [2, 3, 5];

        const resultat = verifier(somme, tableau);
        assert.strictEqual(resultat, true);
    });

    it('devrait retourner false si la somme n\'est pas égale à la somme des valeurs du tableau', () => {
        const somme = 8;
        const tableau = [2, 3, 5];

        const resultat = verifier(somme, tableau);
        assert.strictEqual(resultat, false);
    });
});