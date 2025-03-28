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

    constructor(id, esManual) {
        this.#id = id;
        this.#esManual = esManual;
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
function createPuntInteres(row) {
    const punt = new PuntInteres(row[0], row[3]);

    punt.pais = row[0];
    punt.ciutat = row[2];
    punt.nom = row[4];
    punt.direccio = row[5].trim();
    punt.tipus = row[3];
    punt.latitud = parseFloat(row[7]);
    punt.longitud = parseFloat(row[8]);
    punt.puntuacio = parseFloat(row[11]);

    return punt;
}

document.addEventListener('dataReady', function(event){
    const { espai } = event.detail;

    console.log('Espai:', espai);
    if(espai){
        const punt = createPuntInteres(espai);
        // console.log(punt.id);
        // console.log(punt.nom);
        // console.log(punt.latitud);
    } else{
        console.error('No espai data available');
    }
});