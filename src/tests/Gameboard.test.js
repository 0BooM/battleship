import Gameboard from "../Gameboard";
import Ship from "../Ship";
describe("Gameboard", () => {
  test("constructor should create 10x10 grid", () => {
    const gameboard = new Gameboard();
    expect(gameboard.grid).toHaveLength(10);
    for (let i = 0; i < gameboard.grid.length; i++) {
      expect(gameboard.grid[i]).toHaveLength(10);
    }
  });

  test("check orientation while placing ships", () => {
    const ship = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(3, 3, ship, "horizontal");
    expect(gameboard.grid[3][3]).toBe(ship);
    expect(gameboard.grid[3][4]).toBe(ship);

    gameboard.placeShip(3, 3, ship, "vertical");
    expect(gameboard.grid[3][3]).toBe(ship);
    expect(gameboard.grid[4][3]).toBe(ship);
  });

  test("check edge cases while placing ships", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(8, 8, ship, "horizontal")).toThrow(
      "Ship cannot be placed outside the grid"
    );

    expect(() => gameboard.placeShip(8, 8, ship, "vertical")).toThrow(
      "Ship cannot be placed outside the grid"
    );
  });
});
