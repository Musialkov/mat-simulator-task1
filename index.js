import { MatSimulator } from "./simulator/mat-simulator.js";

// You can adjust the size of the mat and the refresh interval in constants.js
// The simulation will highlight and turn off a random pixel at each interval.

const matSimulator = new MatSimulator();
matSimulator.runSimulation();
