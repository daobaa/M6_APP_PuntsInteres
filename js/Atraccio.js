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

    if(atraccio){
        const punt = new Atraccio(atraccio);
        console.log(`Latitud:`, punt.latitud);
        console.log(`Longitud:`, punt.longitud);

        const bodyInfo = document.querySelector('.body-info');
        const card = document.createElement('div');
        card.classList.add('info-card', 'atraccio');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function() {
            card.remove();
        });

        card.innerHTML = `
            <h3><strong>${punt.nom}</strong></h3>
            <p>${punt.ciutat}</p>
            <p>Tipus: ${punt.tipus}</p>
            <p>Horaris: ${punt.horaris}</p>
            <p>Preu: ${punt.preu}${punt.moneda}</p>
        `;

        card.appendChild(deleteButton);
        bodyInfo.appendChild(card);
    } else{
        console.error('No atraccio data available');
    }
});