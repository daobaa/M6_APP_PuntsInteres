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


                this.agregarMarcadores(espai);
                this.agregarMarcadores(atraccio);
                this.agregarMarcadores(museu);
            });
        }
    
        agregarMarcadores(data){
            if(!data) return;

            data.forEach((punto) => {
                let lat = parseFloat(punto.latitud);
                let lng = parseFloat(punto.longitud);

                if(lat && lng){
                    L.marker([lat, lng])
                        .addTo(this.#map)
                        .bindPopup(`Punto: ${punto.nom}`)
                        .openPopup();
                }
            });
        }
    }
    const mapa = new Mapa();
});
