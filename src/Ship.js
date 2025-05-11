export default class Ship {
  constructor(length) {
    if(length < 1) {
      throw new Error("Length must be at least 1.");
    }
    if(length > 5) {
      throw new Error("Length must be at most 5.");
    }
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  // Increase hit count of current ship
  hit() {
    if (this.sunk || this.hitCount >= this.length) {
      return; // Do nothing if the ship is already sunk or fully hit
    }
    this.hitCount++;
    this.isSunk(); // Update the sunk status after a hit
    return this.hitCount;
  }

  // Check if current ship has sunk
  isSunk() {
    this.sunk = this.hitCount >= this.length ? true : false;
  }
}