const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load Images
const girlImg = new Image();
girlImg.src = "girl.png"; // Ensure this image is in your project folder

const guyImg = new Image();
guyImg.src = "guy.png"; // Ensure this image is in your project folder

// Game Variables
let girlX = 50;
let girlY = 150;
const girlWidth = 60;
const girlHeight = 90;
const speed = 5;
const guyX = 300;
const guyY = 140;
const guyWidth = 70;
const guyHeight = 110;
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

    // Collision Detection with Guy
    if (
        girlX + girlWidth > guyX &&
        girlX < guyX + guyWidth &&
        girlY + girlHeight > guyY &&
        girlY < guyY + guyHeight
    ) {
        messageShown = true;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Background
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Girl
    ctx.drawImage(girlImg, girlX, girlY, girlWidth, girlHeight);
    
    // Draw Guy
    ctx.drawImage(guyImg, guyX, guyY, guyWidth, guyHeight);
    
    // Draw Message Bubble
    if (messageShown) {
        // Speech Bubble
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ellipse(guyX + guyWidth / 2 - 40, guyY - 50, 100, 50, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        
        // Tail of the Bubble
        ctx.beginPath();
        ctx.moveTo(guyX + guyWidth / 2 - 50, guyY - 15);
        ctx.lineTo(guyX + guyWidth / 2 - 30, guyY - 15);
        ctx.lineTo(guyX + guyWidth / 2 - 40, guyY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Text inside the Bubble
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText("Will you be my", guyX + guyWidth / 2 - 80, guyY - 55);
        ctx.fillText("Valentine Peeeku?", guyX + guyWidth / 2 - 70, guyY - 35);
    }
    
    requestAnimationFrame(draw);
}

girlImg.onload = guyImg.onload = function () {
    draw();
};
