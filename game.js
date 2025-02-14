const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game Variables
let girlX = 50;
let girlY = 150;
const girlWidth = 40;
const girlHeight = 60;
const speed = 5;
const postX = 300;
const postY = 140;
const postWidth = 50;
const postHeight = 80;
let messageShown = false;

// Event Listener for Movement
window.addEventListener("keydown", (event) => {
    if (!messageShown) {
        if (event.key === "ArrowRight" || event.key === "d") {
            girlX += speed;
        } else if (event.key === "ArrowLeft" || event.key === "a") {
            girlX -= speed;
        }
    }

    // Collision Detection with Post
    if (
        girlX + girlWidth > postX &&
        girlX < postX + postWidth &&
        girlY + girlHeight > postY &&
        girlY < postY + postHeight
    ) {
        messageShown = true;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Girl
    ctx.fillStyle = "pink";
    ctx.fillRect(girlX, girlY, girlWidth, girlHeight);
    
    // Draw Post
    ctx.fillStyle = "brown";
    ctx.fillRect(postX, postY, postWidth, postHeight);
    
    // Draw Message
    if (messageShown) {
        ctx.fillStyle = "red";
        ctx.font = "20px Arial";
        ctx.fillText("Would you like to be my Valentine?", 50, 50);
    }
    
    requestAnimationFrame(draw);
}

draw();
