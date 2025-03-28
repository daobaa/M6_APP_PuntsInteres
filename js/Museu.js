import { PuntInteres } from './PuntsInteres.js';

class Museu extends PuntInteres{
    horaris;
    preu;
    moneda;
    descripcio;

    get preuIva() {
        return 
    }
}
function createMuseu(row) {
    const punt = new Museu(row[0], row[3]);

    punt.horaris = row[7];
    punt.preu = row[9];
    punt.moneda = row[12];
    punt.descripcio = row[10];

    return punt;
}
document.addEventListener('dataReady', function(event){
    const { museu } = event.detail;

    console.log('Museu:', museu);
    if(museu){
        const punt = createMuseu(museu);
        // console.log(punt.horaris);
        // console.log(punt.preu);
        // console.log(punt.moneda);
    } else{
        console.error('No espai data available');
    }
})