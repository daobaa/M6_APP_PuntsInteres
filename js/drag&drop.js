document.addEventListener("DOMContentLoaded", function() {
    const dropArea = document.getElementById('attach-files');

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    document.addEventListener('drop', (e) => {
        e.preventDefault();
    }); 

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('hover');
    });
    
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('hover');
    });
});