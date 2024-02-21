const lightness = 75

draw_initial_canvas(lightness);

function click_canvas() {
    copySectionContents();
    draw_fade(lightness);
}