export default class Resource {
    constructor(name, amount=0) {
        this.name = name
        this.amount = amount
    }

    canDrain(amount) {
        return this.amount > amount
    }

    drain(amount) {
        if (this.canDrain(amount)) {
            this.amount -= amount
            return true
        }
    }

    gain() {

    }
}
