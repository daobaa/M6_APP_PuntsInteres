document.addEventListener("DOMContentLoaded", function() {
    const dropArea = document.getElementById('attach-files');

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('hover');
    });
    
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('hover');
    });
    
    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('hover');

        const files = e.dataTransfer.files;

        if(files[0].name.endsWith(".csv")){
            const reader = new FileReader();
            reader.onload = function(event){
                const fileContent = event.target.result;
                
                const rows = fileContent.split('\n');
                const data = rows.map(row => row.split(','));

                let espai;
                let atraccio;
                let museu;

                for(let i = 0; i < data.length; i++){
                    let rowFull = data[i];
                    if(data[i][3] == "Espai"){
                        espai = rowFull;
                    } else if(data[i][3] == "Atraccio"){
                        atraccio = rowFull;
                    } else if(data[i][3] == "Museu"){
                        museu = rowFull;
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