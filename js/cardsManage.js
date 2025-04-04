export const allCards = [];
export function addCard(card){
    allCards.push(card);
}
export function removeCard(card){
    const index = allCards.indexOf(cards);
    if(index > -1){
        allCards.splice(index, 1);
    }
}