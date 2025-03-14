document.addEventListener("DOMContentLoaded", function(event) {
    class Mapa {
        #map;


    }

    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                map.setView([latitude, longitude], 13);
                L.marker([latitude, longitude])
                    .addTo(map)
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

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
        },
        (error) => {
            console.error("Error obteniendo la ubicación: ", error);
        }
    );
});