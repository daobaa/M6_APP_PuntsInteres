export const TypeSet = new Set();

document.addEventListener("DOMContentLoaded", function() {
    const dropArea = document.getElementById('attach-files');
    dropArea.addEventListener('drop', async (e) => {
        e.preventDefault();
        dropArea.classList.remove('hover');
    
        const files = e.dataTransfer.files;
    
        if(files[0].name.endsWith(".csv")){
            const reader = new FileReader();
            reader.onload = async function(event){
                const fileContent = event.target.result;
                
                const rows = fileContent.split('\n');
                const data = rows.map(row => row.split(','));
    
                let espai;
                let atraccio;
                let museu;
    
                for(let i = 1; i < data.length; i++){
                    let rowFull = data[i];
                    if(data[i][3] == "Espai"){
                        espai = rowFull;
                        TypeSet.add(data[i][3]);
                    } else if(data[i][3] == "Atraccio"){
                        atraccio = rowFull;
                        TypeSet.add(data[i][3]);
                    } else if(data[i][3] == "Museu"){
                        museu = rowFull;
                        TypeSet.add(data[i][3]);
                    }

                    /* MALA PRAXIS | SEPARAR FUNCION ASINCRONA DE LECTURA DE ARCHIVO */

                    let COUNTRY_CODE = data[i][1];
                    if(!COUNTRY_CODE) continue;
                    let COUNTRIES_API = `https://restcountries.com/v3.1/alpha/${COUNTRY_CODE}`;
                    
                    try{
                        let response = await fetch(COUNTRIES_API);
                        if(!response.ok) throw new Error(`Error en API: ${response.status}`);

                        let dataPais = await response.json();
                        console.log(`País:`, dataPais[0].name.common);
                        console.log(`Bandera:`, dataPais[0].flags.png);
                    } catch(error){
                        console.error(`Error con ${COUNTRY_CODE}`, error);
                    }
                }
    
                const dataReadyEvent = new CustomEvent('dataReady', {
                    detail: { espai, atraccio, museu }
                });
                document.dispatchEvent(dataReadyEvent);
            };
            reader.readAsText(files[0]);
        } else{
            alert("El fitxer no és csv");
        }
    });
});
// /* Testing */
// document.addEventListener("DOMContentLoaded", function(){
//     function ReadCSV(){
//         return new Promise((resolve, reject) => {
//             const dropArea = document.getElementById("attach-files");
//             dropArea.addEventListener('drop', async (e) =>{
//                 e.preventDefault();
//                 dropArea.classList.remove('hover');

//                 const files = e.dataTransfer.files;
//                 if(files.length > 0 && files[0].name.endsWith(".csv")){
//                     const reader = new FileReader();
//                     reader.onload = function(event){
//                         const fileContent = event.target.result;
//                         const rows = fileContent.split('\n');
//                         const data = rows.map(row => row.split(','));
//                         resolve(data);
//                     };
//                     reader.onerror = function(){
//                         reject("Error reading the file");
//                     };
//                     reader.readAsText(files[0]);
//                 } else{
//                     reject("CSV invalid or not CSV at all!");
//                 }
//             });
//         });
//     }
//     window.ReadCSV = ReadCSV;
// });