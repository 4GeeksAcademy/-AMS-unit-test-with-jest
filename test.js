// Importar la función sum del archivo app.js
const { sum } = require('./app.js');


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("1 dollar should be about 146.26 yenes", () => {
    const result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26, 2); // ≈ (1 / 1.07) * 156.5
});

test("156.5 yenes should be about 0.87 pounds", () => {
    const result = fromYenToPound(156.5);
    expect(result).toBeCloseTo(0.87, 2); // ≈ (156.5 / 156.5) * 0.87
});