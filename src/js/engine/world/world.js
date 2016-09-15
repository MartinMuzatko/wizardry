import Chunk from './chunk'
import Player from '../entity/player'

export const CHUNKSIZE = 16

export default class World {
    constructor(seed = Math.random()*(1024*1024*16) | 0) {
        this.seed = parseInt(seed)
        this.chunks = []
        this.loadedChunks = []
        this.loadChunks()
        this.players = [new Player()]
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
    loadChunks(x=0,y=0) {
        let chunkX = parseInt(x/16)
        let chunkY = parseInt(y/16)
        this.updateChunks(chunkX,chunkY)

    }

    updateChunks(x,y) {
        this.extend(x,y)
        this.extend(x,y+1)
        this.extend(x+1,y)
        this.extend(x+1,y+1)
        this.extend(x,y-1)
        this.extend(x-1,y)
        this.extend(x-1,y-1)
        this.extend(x-1,y+1)
        this.extend(x+1,y-1)

        this.loadedChunks = this.chunks.filter((chunk) => {
            let validChunk = !!~[x-1,x,x+1].indexOf(chunk.position.x) ||
                !!~[y-1,y,y+1].indexOf(chunk.position.y)
            return validChunk
        })
        console.log('loaded total: '+this.loadedChunks.length);
    }
}
