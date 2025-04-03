import { PuntInteres } from './PuntsInteres.js';

class Museu extends PuntInteres{
    horaris;
    preu;
    moneda;
    descripcio;

    constructor(row){
        super(row);
        this.horaris = row[8];
        this.preu = row[9];
        this.moneda = row[12];
        this.descripcio = row[10];
    }
}

document.addEventListener('dataReady', function(event){
    const { museu } = event.detail;

    if(museu){
        const punt = new Museu(museu);
        console.log(`Latitud:`, punt.latitud);
        console.log(`Longitud:`, punt.longitud);

        const bodyInfo = document.querySelector('.body-info');
        const card = document.createElement('div');
        card.classList.add('info-card');

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
        console.error('No museu data available');
    }
});