import Position from '../property/position'
import Inventory from '../inventory/inventory'
import SkillTree from '../skill/skilltree'
import Resource from '../resource/resource'
import Capacity from '../resource/capacity'

export default class Player {
    constructor() {
        this.health = new Capacity(new Resource('health', 0),1000)
        this.mana = new Capacity(new Resource('mana', 0),1000)
        this.position = new Position(2,3)
        this.inventory = new Inventory(5)
        this.skills = new SkillTree
        this.walking = 0
        riot.observable(this)
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.position.y -= 1
                break;
            case 'right':
                this.position.x += 1
                break;
            case 'down':
                this.position.y += 1
                break;
            case 'left':
                this.position.x -= 1
                break;
        }
        this.trigger('moved', {
            direction: direction,
            position: this.position
        })
    }

    walk(direction) {
        this.walking = Date.now()
        this.move(direction)
    }

}
