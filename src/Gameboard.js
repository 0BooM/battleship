export default class Gameboard {
    // Create gameboard - size 10x10
    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
    }

    // Place ship with given P(x,y) and orientation
    placeShip(x, y, ship, orientation = "horizontal") {
        if(orientation === "horizontal") {
            if(y + ship.length - 1 >= this.grid[0].length){
                throw new Error("Ship cannot be placed outside the grid");
            }
            for(let i = 0; i < ship.length; i++) {
                this.grid[x][y + i] = ship;
            }
        }

        else if(orientation === "vertical") {
            if (x + ship.length - 1 >= this.grid.length) {
                throw new Error("Ship cannot be placed outside the grid");
            }
            for (let i = 0; i < ship.length; i++) {
                this.grid[x + i][y] = ship;
            }
        }

    }
}