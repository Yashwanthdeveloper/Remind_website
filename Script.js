document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the "Contact Me" button click
    function contactMe() {
        alert("You have initiated contact. Feel free to send a message via Discord!");
        // You can replace the alert with actual contact functionality, like opening a messaging app.
    }

    // Get the "Contact Me" button by its ID
    const contactButton = document.getElementById('contactButton');

    // Add a click event listener to the button
    if (contactButton) {
        contactButton.addEventListener('click', contactMe);
    }
});
