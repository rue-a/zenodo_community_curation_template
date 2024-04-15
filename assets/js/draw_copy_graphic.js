function draw_initial_canvas(lightness) {
    // Get the canvas element and its context
    const canvas = document.getElementById("copy-graphic");
    const ctx = canvas.getContext("2d");

    // Set the background color
    ctx.fillStyle = `hsl(220, 90%, ${lightness}%)`; // You can replace this with any color code or name

    // Draw the rectangle
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text properties
    ctx.fillStyle = "#fff"; // Text color
    ctx.font = "24px 'Inter', sans-serif"; // Font size and type
    ctx.letterSpacing = "3px";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    // Text to be displayed
    const lines = [
        "click",
        "to copy",
        "template as",
        "markdown",
    ];

    // Get the center coordinates of the canvas
    const lineheight = 30;
    const centerX = canvas.width - 10
    const centerY = canvas.height / 2 - (lines.length - 1) * lineheight / 2;



    // Draw each line separately
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], centerX, centerY + i * lineheight); // Adjust the vertical spacing as needed
    }

}

function draw_fade(target_lightness) {
    // Get the canvas element and its context
    const canvas = document.getElementById("copy-graphic");
    const ctx = canvas.getContext("2d");

    // Set the background color
    // ctx.fillStyle = "#3498db"; // You can replace this with any color code or name

    let lightness = 100
    // Define a function for the animation frame
    function animate() {// Clear the canvas
        draw_initial_canvas(lightness)

        // Gradually decrease the opacity
        lightness -= 2; // Adjust the value to control the speed of fade-out

        // Continue the animation until the opacity is below 0
        if (lightness > target_lightness) {
            requestAnimationFrame(animate);
        }
    }

    // Start the animation
    animate();
}

