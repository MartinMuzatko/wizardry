export default class Resource {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }

    canDrain() {}
    drain() {}
    gain() {}
}
