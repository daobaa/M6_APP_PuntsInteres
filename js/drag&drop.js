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
                console.log(fileContent);
            };
            reader.readAsText(files[0]);
        } else{
            alert("El fitxer no és csv");
        }
    });
});