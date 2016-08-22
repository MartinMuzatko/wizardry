import Orientation from './orientation'

export default class Position {
    constructor(x = 0,y = 0,orientation = 0) {
        this.x = parseFloat(x)
        this.y = parseFloat(y)
        this.orientation = new Orientation(orientation)

    }
}
