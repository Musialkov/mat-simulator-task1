import { getRandomInt, isValidCoordinates } from "../utils/utils.js";
import { INTERVAL, ROWS, COLUMNS } from "../constants.js";

export class MatSimulator {
  #matrix;

  constructor() {
    this.#matrix = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
  }

  printMatrix() {
    console.clear();
    this.#matrix.forEach((row) => {
      console.log(row.join(" "));
    });
  }

  turnOff(x, y) {
    if (isValidCoordinates(x, y)) {
      this.#matrix[x][y] = 0;
    }
  }

  turnOn(x, y) {
    if (isValidCoordinates(x, y)) {
      this.#matrix[x][y] = 1;
    }
  }

  turnOnRandomPixel() {
    const { x, y } = this.#getRandomCoordinates();
    this.turnOn(x, y);
  }

  turnOffRandomPixel() {
    const { x, y } = this.#getRandomCoordinates();
    this.turnOff(x, y);
  }

  #getRandomCoordinates() {
    return {
      x: getRandomInt(0, ROWS - 1),
      y: getRandomInt(0, COLUMNS - 1),
    };
  }

  runSimulation() {
    this.printMatrix();
    setInterval(() => {
      this.turnOnRandomPixel();
      this.turnOffRandomPixel();
      this.printMatrix();
    }, INTERVAL);
  }
}
