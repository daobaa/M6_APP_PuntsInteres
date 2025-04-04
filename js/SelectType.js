import { TypeSet } from "./Read&Do.js";

document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("dataReady", function() {
        const SelOptions = document.getElementById("typeMenu");
    
        if(TypeSet.size > 0){
            for(let type of TypeSet){
                let option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                SelOptions.appendChild(option);
            }
        } else{
            console.log("TypeSet aún está vacio.");
        }
    
        const TypeChoose = document.getElementById("typeMenu");
        const allCards = document.querySelectorAll('.espai, .atraccio, .museu');
    
        allCards.forEach(el =>{
            el.style.display = '';
        });
        
        TypeChoose.addEventListener("change", function(){
            const selectedValue = TypeChoose.value;
    
            allCards.forEach(el =>{
                el.style.display = '';
            });
    
            if(selectedValue === "Tots"){
                return;
            } else{
                const HideClasses = {
                    "Espai": ['.museu', '.atraccio'],
                    "Museu": ['.espai', '.atraccio'],
                    "Atraccio": ['.espai', '.museu']
                };
                
                if(HideClasses[selectedValue]){
                    const cardsToHide = document.querySelectorAll(HideClasses[selectedValue].join(', '));
                    cardsToHide.forEach(el => {
                        el.style.display = 'none';
                    });
                }
            }
        });
    });
});