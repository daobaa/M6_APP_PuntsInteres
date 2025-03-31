import { PuntInteres } from './PuntsInteres.js';

class Atraccio extends PuntInteres{
    horaris;
    preu;
    moneda;

    constructor(row){
        super(row);
        this.horaris = row[9];
        this.preu = row[10];
        this.moneda = row[11];
    }
    get preuIva() {
        return 
    }
}
document.addEventListener('dataReady', function(event){
    const { atraccio } = event.detail;

    console.log('Atraccio:', atraccio);
    if(atraccio){
        const punt = new Atraccio(atraccio);
        console.log(`Latitud:`, punt.latitud);
        console.log(`Longitud:`, punt.longitud);

    } else{
        console.error('No espai data available');
    }
});
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