import { PuntInteres } from './PuntsInteres.js';

class Museu extends PuntInteres{
    horaris;
    preu;
    moneda;
    descripcio;

    constructor(row){
        super(row);
        this.horaris = row[9];
        this.preu = row[10];
        this.moneda = row[11];
        this.descripcio = row[13];
    }

    get preuIva() {
        return 
    }
}
document.addEventListener('dataReady', function(event){
    const { museu } = event.detail;

    console.log('Museu:', museu);
    if(museu){
        const punt = new Museu(museu);
        console.log(`Latitud:`, punt.latitud);
        console.log(`Longitud:`, punt.longitud);

    } else{
        console.error('No espai data available');
    }
});