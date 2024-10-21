function drawCard() {
    // API endpoint to draw one card
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(url)
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Failed to fetch card');
        })
        .then(data => {
            console.log(data); // Debugging log
            const cardContainer = document.getElementById('cardContainer');
            cardContainer.innerHTML = ''; // Clear previous card image

            // Get the card image URL from the response data
            const cardImageUrl = data.cards[0].image;

            // Create an image element and set its src attribute to the card image URL
            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', cardImageUrl);
            cardImage.setAttribute('alt', `${data.cards[0].value} of ${data.cards[0].suit}`);

            // Append the image element to the cardContainer div
            cardContainer.appendChild(cardImage);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('cardContainer').innerHTML = "An error occurred. Please try again.";
        });
}

// Add event listener to the button
document.getElementById('drawCardButton').addEventListener('click', drawCard);
