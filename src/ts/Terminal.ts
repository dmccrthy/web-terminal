export interface TerminalConfig {}

export class Terminal {
    config: TerminalConfig;
    terminalElement: HTMLElement;

    constructor(id: string, config?: TerminalConfig) {
        if (config) {
            this.config = config;
        } else {
            this.config = {};
        }

        this.terminalElement = document.getElementById(id)!;
        document.addEventListener("keydown", (e) => this.handleInput(e));
    }

    /**
     * Handle user inputs to the terminal.
     * @param event
     */
    handleInput(event: KeyboardEvent): void {
        let length = this.terminalElement.innerHTML.length;

        // Escape CTRL key inputs
        if (event.ctrlKey) return;

        // Handle valid key inputs from user
        // Enter/Backspace are special cases here
        if (event.key === "Enter") {
        } else if (event.key === "Backspace") {
            this.terminalElement.innerHTML = this.terminalElement.innerHTML
                .split("")
                .splice(length)
                .join("");
        } else if (event.key.length === 1) {
            this.terminalElement.innerHTML += event.key;
        }
    }

    /**
     *
     */
    runCommand(): void {}
}
