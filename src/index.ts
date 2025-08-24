/**
 * This files serves as the entry-point for all typescript used
 * in this project. The majority of the actual code is being pulled
 * from other files found in the surrounding directories.
 */

import "./main.scss";
import { Terminal, type TerminalConfig } from "./ts/Terminal";

const config: TerminalConfig = {};
const terminal = new Terminal("terminal", config);
