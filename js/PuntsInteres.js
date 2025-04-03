export class PuntInteres {
    #id;
    #esManual;
    pais;
    ciutat;
    nom;
    direccio;
    tipus;
    latitud;
    longitud;
    puntuacio;
    static totalTasques;

    constructor(row) {
        this.pais = row[0];
        this.ciutat = row[2];
        this.nom = row[4];
        this.direccio = row[5];
        this.tipus = row[3];
        this.latitud = parseFloat(row[6]);
        this.longitud = parseFloat(row[7]);
        this.puntuacio = parseFloat(row[11]);
    }

    get id() {
        return this.#id;
    }
    set id(newID) {
        this.#id = newID; 
    }
    get esManual() {
        return this.#esManual;
    }
    set esManual(newManual) {
        this.#esManual = newManual;
    }

    static obtenirTotalElements() {
        
    }
}

document.addEventListener('dataReady', function(event){
    const { espai } = event.detail;

    if(espai){
        const punt = new PuntInteres(espai);
        console.log(`Latitud:`, punt.latitud);
        console.log(`Longitud:`, punt.longitud);

        const bodyInfo = document.querySelector('.body-info');
        const card = document.createElement('div');
        card.classList.add('info-card');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function() {
            card.remove(); // Elimina la tarjeta del DOM
        });

        card.innerHTML = `
            <h3><strong>${punt.nom}</strong></h3>
            <p>${punt.ciutat}</p>
            <p>Tipus: ${punt.tipus}</p>
        `;

        card.appendChild(deleteButton);
        bodyInfo.appendChild(card);
    } else{
        console.error('No espai data available');
    }
});
