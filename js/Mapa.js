document.addEventListener("DOMContentLoaded", function(event) {
    class Mapa {
        #map;

        constructor(){
            this.#map = L.map('map').setView([0, 0], 2);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.#map);

            const storedCoordinates = localStorage.getItem('userCoordinates');
            if(storedCoordinates){
                const { latitude, longitude } = JSON.parse(storedCoordinates);
                this.#map.setView([latitude, longitude], 13);
                L.marker([latitude, longitude])
                    .addTo(this.#map)
                    .bindPopup("Estás aquí")
                    .openPopup();
            } else{
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            this.#map.setView([latitude, longitude], 13);
                            L.marker([latitude, longitude])
                                .addTo(this.#map)
                                .bindPopup("Estás aquí")
                                .openPopup();
                        
                            localStorage.setItem('userCoordinates', JSON.stringify({ latitude, longitude }));
                        },
                        (error) => {
                            console.error("Error obteniendo la ubicación: ", error);
                        }
                    );
                } else{
                    alert("La geolocalización no está soportada en tu navegador");
                }
            }
            document.addEventListener('dataReady', (event) =>{
                const { espai, atraccio, museu } = event.detail;
                
                console.log('Espai:', espai);
                console.log('Atraccio:', atraccio);
                console.log('Museu:', museu);

                const bloquesEspai = this.dividirEnBloques(espai,14);
                const bloquesAtraccio = this.dividirEnBloques(atraccio,14);
                const bloquesMuseu = this.dividirEnBloques(museu,14);

                this.agregarMarcadores(bloquesEspai.map(p =>({
                    latitud: p[6],
                    longitud: p[7],
                    nom: p[4],
                    direccio: p[5],
                    puntuacio: p[11]
                })));
                this.agregarMarcadores(bloquesAtraccio.map(p =>({
                    latitud: p[6],
                    longitud: p[7],
                    nom: p[4],
                    direccio: p[5],
                    puntuacio: p[11]
                })));
                this.agregarMarcadores(bloquesMuseu.map(p =>({
                    latitud: p[6],
                    longitud: p[7],
                    nom: p[4],
                    direccio: p[5],
                    puntuacio: p[11]
                })));
            });
        }
    
        agregarMarcadores(data){
            if(!data) return;
            let markers = [];

            data.forEach((punto) => {
                let lat = parseFloat(punto.latitud);
                let lng = parseFloat(punto.longitud);

                if(lat && lng){
                    let marker = L.marker([lat, lng])
                                    .addTo(this.#map)
                                    .bindPopup(`
                                        <strong><h3>${punto.nom}</h3></strong><br>
                                        <strong>${punto.direccio}</strong><br>
                                        <strong>Puntuació: ${punto.puntuacio}</strong>
                                    `)
                                    .openPopup();
                    markers.push(marker);
                }
            });
        }

        dividirEnBloques(array, tamaño){
            const bloques = [];
            for(let i = 0; i < array.length; i += tamaño){
                bloques.push(array.slice(i, i + tamaño));
            }
            return bloques;
        }
    }
    const mapa = new Mapa();
});