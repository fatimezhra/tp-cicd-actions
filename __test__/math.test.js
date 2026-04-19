const { add, multiply, factorial, subtract } = require('../src/math'); // Ajout de subtract ici

describe('add', () => {
    test('additionne deux nombres positifs', () => {
        expect(add(2, 3)).toBe(5);
    });
    test('additionne avec un nombre négatif', () => {
        expect(add(-1, 5)).toBe(4);
    });
});

// --- NOUVEAU BLOC POUR SUBTRACT ---
describe('subtract', () => {
    test('soustrait deux nombres positifs', () => {
        expect(subtract(5, 2)).toBe(3);
    });
    test('donne un résultat négatif si b > a', () => {
        expect(subtract(2, 5)).toBe(-3);
    });
});

describe('multiply', () => {
    test('multiplie deux nombres', () => {
        expect(multiply(3, 4)).toBe(12);
    });
    test('multiplie par zéro', () => {
        expect(multiply(5, 0)).toBe(0);
    });
});

describe('factorial', () => {
    test('factorielle de 5', () => {
        expect(factorial(5)).toBe(120);
    });
    test('factorielle de 0', () => {
        expect(factorial(0)).toBe(1);
    });
    test('lance une erreur pour un nombre négatif', () => {
        expect(() => factorial(-1)).toThrow('Nombre négatif');
    });
});