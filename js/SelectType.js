import { TypeSet } from "./Read&Do.js";

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
});