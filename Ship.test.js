import Ship from './Ship';

describe('Ship', () => {
    test('should create a ship with the given length', () => {
        const ship = new Ship(3);
        expect(ship.length).toBe(3);
        expect(ship.hitCount).toBe(0);
        expect(ship.sunk).toBe(false);
    })
    test('should increase the hit number', () => {
        const ship = new Ship(3);
        expect(ship.hit()).toBe(1);
    })

    test('should output that ship is sunk', () => {
        const ship = new Ship(2);
        ship.hit();
        expect(ship.sunk).toBe(false);
        ship.hit();
        expect(ship.sunk).toBe(true);
    })
});