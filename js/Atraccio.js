import { PuntInteres } from './PuntsInteres.js';

class Atraccio extends PuntInteres{
    horaris;
    preu;
    moneda;

    constructor(row){
        super(row);
        this.horaris = row[8];
        this.preu = row[9];
        this.moneda = row[12];
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

        const bodyInfo = document.querySelector('.body-info');
        const card = document.createElement('div');
        card.classList.add('info-card');

        card.innerHTML = `
            <h3><strong>${punt.nom}</strong></h3>
            <p>${punt.ciutat}</p>
            <p>Tipus: ${punt.tipus}</p>
            <p>Horaris: ${punt.horaris}</p>
            <p>Preu: ${punt.preu}${punt.moneda}</p>
        `;
        
        bodyInfo.appendChild(card);

    } else{
        console.error('No espai data available');
    }
});