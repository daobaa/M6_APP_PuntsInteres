import { atraccio } from './drag&drop.js';
import { PuntInteres } from './PuntsInteres.js';

class Atraccio extends PuntInteres{
    horaris;
    preu;
    moneda;

    get preuIva() {
        return 
    }
}
function createAtraccio(row) {
    const punt = new Atraccio(row[0], row[3]);

    punt.horaris = row[7];
    punt.preu = row[9];
    punt.moneda = row[12];

    return punt;
}
document.addEventListener('dataReady', function(event){
    const { atraccio } = event.detail;

    console.log('Atraccio:', atraccio);
    if(atraccio){
        const punt = createAtraccio(atraccio);
        // console.log(punt.horaris);
        // console.log(punt.preu);
        // console.log(punt.moneda);
    } else{
        console.error('No espai data available');
    }
})
const IVARates = [
    { pais: "Spain", iva: 21 },
    { pais: "Germany", iva: 19 },
    { pais: "France", iva: 20 },
    { pais: "Italy", iva: 22 },
    { pais: "United Kingdom", iva: 20 },
    { pais: "Netherlands", iva: 21 },
    { pais: "Sweden", iva: 25 },
    { pais: "Belgium", iva: 21 },
    { pais: "Portugal", iva: 23 },
    { pais: "Poland", iva: 23 }
];