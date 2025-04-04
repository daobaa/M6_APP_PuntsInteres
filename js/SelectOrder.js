import { allCards } from "./cardsManage.js";

document.addEventListener("DOMContentLoaded", function(){
    const orderSelect = document.getElementById("orderChoose");
    const cardContainer = document.querySelector(".body-info");

    orderSelect.addEventListener("change", function(){
        const selectedOrder = orderSelect.value;
        let sortedCards;
        
        if(selectedOrder == "Ascendent"){
            sortedCards = sortCards(allCards, true);
        } else if(selectedOrder == "Descendent"){
            sortedCards = sortCards(allCards, false);
        }

        cardContainer.innerHTML = '';
        sortedCards.forEach(card => {
            cardContainer.appendChild(card);
        });
    });
    function sortCards(cards, ascending = true){
        return cards.sort((a, b) => {
            const nameA = a.getAttribute("data-name").toLowerCase();
            const nameB = b.getAttribute("data-name").toLowerCase();

            if(ascending){
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });
    }
});