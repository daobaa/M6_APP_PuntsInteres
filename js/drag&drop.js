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
            console.log(files[0].name);
        } else{
            alert("El fitxer no és csv");
        }
    });
});