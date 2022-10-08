const cards = [];
const pervButton = document.querySelector("#per_button")
const nextButton = document.querySelector("#next_button")
for (let i = 0; i < 5; i++) {
    const card = document.querySelector(`#c${i}`);
    cards.push(card);
    if (i > 3) {
        cards[i].hidden = true;
    }

}
if (cards[0].hidden === false) {
    pervButton.style.visibility = "hidden";
}
nextButton.addEventListener('click', function () {
    if (cards[0].hidden === false) {
        for (let i = 0; i < 5; i++) {
            cards[i].hidden = i <= 3;
        }
        pervButton.style.visibility = "visible";
        nextButton.style.visibility = "hidden";
    }

})
pervButton.addEventListener('click', function () {
    if (cards[4].hidden === false) {
        for (let i = 4; i >= 0; i--) {
            cards[i].hidden = i > 3;
        }
        pervButton.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    }

})
