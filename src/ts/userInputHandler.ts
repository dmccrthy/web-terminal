/**
 * This file contains the code for handling user input/interactions with the terminal.
 */

// Terminal is hardcoded into html so we can use ! here
const terminal: HTMLElement = document.getElementById("terminal")!;

/**
 * Handle key down events on terminal.
 */
document.addEventListener("keydown", function (e: KeyboardEvent): void {
    console.log(e);

    // Escape CTRL key inputs
    if (e.ctrlKey) return;

    if (e.key === "Backspace") {
        // terminal.innerHTML
    } else {
        terminal.innerHTML += e.key;
    }
});

/**
 * Handle backspace input on terminal.
 */

/**
 * Handle enter command on terminal.
 */
