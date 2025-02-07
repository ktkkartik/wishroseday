document.getElementById("bloomBtn").addEventListener("click", function() {
    for (let i = 0; i < 100; i++) {
        createFloatingElement();
    }

    // Remove all emojis after 15 seconds
    setTimeout(() => {
        document.querySelectorAll(".emoji").forEach(element => {
            element.remove();
        });
    }, 15000);
});

// Function to create animated hearts, roses & "LOVE YOU ❤️" in red
function createFloatingElement() {
    let element = document.createElement("div");
    element.classList.add("emoji");

    // Choose a random emoji or text
    let emojis = ["🌹", "❤️", '<span class="red-text">Love You ❤️</span>'];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Set the innerHTML so that "Love You ❤️" retains the span styling
    element.innerHTML = randomEmoji;

    // Random positioning
    element.style.left = Math.random() * 100 + "vw";
    element.style.top = Math.random() * 100 + "vh";

    // Random animation duration
    element.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(element);
}
