document.addEventListener("DOMContentLoaded", function(event) {
    class Mapa {
        #map;

        constructor(){
            this.#map = L.map('map').setView([0, 0], 2);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.#map);

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        this.#map.setView([latitude, longitude], 13);
                        L.marker([latitude, longitude])
                            .addTo(this.#map)
                            .bindPopup("Estás aquí")
                            .openPopup();
                    },
                    (error) => {
                        console.error("Error obteniendo la ubicación: ", error);
                    }
                );
            } else{
                alert("La geolocalización no está soportada en tu navegador");
            }
        }
    }

    const mapa = new Mapa();
});