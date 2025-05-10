// app.js

// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// Función ya existente
const fromEuroToDollar = (euro) => euro * oneEuroIs["USD"];

// NUEVAS FUNCIONES:
const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
};

const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs["JPY"];
    return euro * oneEuroIs["GBP"];
};

// Exportar funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
