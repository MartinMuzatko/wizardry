import Chunk from './chunk'
import Player from '../entity/player'

export const CHUNKSIZE = 16

export default class World {
    constructor(seed = Math.random()*(1024*1024*16) | 0) {
        this.seed = parseInt(seed)
        this.chunks = [new Chunk(0,0),new Chunk(1,1),new Chunk(0,1),new Chunk(1,0)]
        this.loadedChunks = []
        this.updateChunks()
    }

    extend(x,y) {
        x = parseInt(x)
        y = parseInt(y)
        let chunkAlreadyExists = this.chunks.filter(chunk => {
            if (chunk.position.x == x &&
                chunk.position.y == y) {
                return true
            }
        })
        if (!chunkAlreadyExists.length) {
            this.chunks.push(new Chunk(x,y))
        }
    }

    // x,y = player pos
    loadChunks(x,y) {
        let chunkX = parseInt(x/16)
        let chunkY = parseInt(y/16)
        this.updateChunks(chunkX,chunkY)

    }

    updateChunks(x,y) {
        this.extend(x,y)
        this.extend(x+1,y)
        this.extend(x-1,y)
        this.extend(x,y-1)
        this.extend(x,y-1)
        this.extend(x+1,y+1)
        this.extend(x+1,y-1)
        this.extend(x-1,y+1)

        this.loadedChunks = this.chunks.filter((chunk) => {
            let validChunk = !!~[x-1,x,x+1].indexOf(chunk.position.x) ||
                !!~[y-1,y,y+1].indexOf(chunk.position.y)
            console.log(validChunk, x, y)
            return validChunk
        })
    }
}
