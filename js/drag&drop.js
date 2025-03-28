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

                for(i = 0; i < data.length; i++){
                    rowFull = data[i];
                    if(data[i][3] == "Espai"){
                        espai = rowFull;
                        console.log(espai);
                    } else if(data[i][3] == "Atraccio"){
                        atraccio = rowFull;
                        console.log(atraccio);
                    } else if(data[i][3] == "Museu"){
                        museu = rowFull;
                        console.log(museu);
                    }
                }
            };
            reader.readAsText(files[0]);
        } else{
            alert("El fitxer no és csv");
        }
    });
});