export default class Skill {
    constructor(name, effect) {
        this.name = name
        this.effect = effect
        this.level = 1
        this.cost = 5
        this.delay = 5
        riot.observable(this)
        this.on('cast', (player) => {
            this.cast(player)
        })
    }

    levelUp() {
        this.level += 1
    }

    canCast(player) {
        return (this.cost < player.mana.amount)
    }

    cast(player) {
        if (this.canCast(player)) {
            player.mana.drain(this.cost*this.level)
            this.effect()
            
            this.trigger('casted')
        }
    }
}
