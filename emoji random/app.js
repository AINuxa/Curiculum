const emojis = ["😀", "😂", "😍", "🤔", "👍", "👎", "🤯", "🥳", "🥺", "👀", "🐶", "🐱", "🐻", "🦊", "🐸", "🐣", "🐝", "🍕", "🍔", "🍟", "🍩", "🍦", "🥤"];

function generateEmoji() {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
}

document.getElementById("emoji").textContent = generateEmoji();

document.addEventListener("click", function() {
    document.getElementById("emoji").textContent = generateEmoji();
});