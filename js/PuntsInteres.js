class PuntInteres {
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