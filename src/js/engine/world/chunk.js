import Position from '../property/position'
import Tile from './tile'
import * as ITEMS from '../item/items'


export default class Chunk {
    constructor(x,y,size = 16) {
        this.position = new Position(x,y,0)
        this.tiles = []
        for (var y = 0; y < size; y++) {
            this.tiles.push([])
            for (var x = 0; x < size; x++) {
                this.tiles[y].push(new Tile(x,y,this.getRandomMaterial()))
            }
        }
    }

    getRandomMaterial() {
        let tiles = [ITEMS.DIRT,ITEMS.GRASS,ITEMS.SAND,ITEMS.WATER]
        return tiles[Math.random() * 4 | 0]
    }
}
