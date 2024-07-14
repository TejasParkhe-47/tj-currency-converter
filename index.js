import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_6CPkJZh03Qqbxh92RSgPylvipiXFlsPIIwptHYnn');


convertCurrency("INR","USD",3);

export async function convertCurrency(fromCurrency,toCurrrency,units){
    const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrrency
    });
    const multiplier = res.data[toCurrrency];
    return multiplier*units;
}


freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'INR'
}).then(response => {
    console.log(response);
});