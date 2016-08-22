import Position from '../property/position'

export default class Tile {
    constructor(x, y, item) {
        this.position = new Position(x,y,0)
        this.material = item
    }
}
