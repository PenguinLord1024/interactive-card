// script.js

let currentView = "front";
const card = document.getElementById('card');
const audioElement = document.getElementById('cardMusic');

card.addEventListener('click', function() {
    switch (currentView) {
        case "front":
            card.style.transform = "rotateY(180deg)";
            currentView = "middle";
            break;
        case "middle":
            card.style.transform = "rotateY(360deg)";
            currentView = "back";
            break;
        case "back":
            card.style.transform = "rotateY(0deg)";
            currentView = "front";
            break;
    }

    // Play music when card is clicked, if a source is provided
    if (audioElement && audioElement.getAttribute('src')) {
        audioElement.play();
    }
});
