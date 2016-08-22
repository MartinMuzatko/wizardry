import {NONE} from '../item/items'

export default class Slot {
    constructor(item = NONE, amount = 0) {
        this.item = item
        this.amount = amount
    }

    set(amount, item = this.item) {
        this.item = item
        this.amount = parseInt(amount)
    }

    add(amount, item = this.item) {
        this.item = item
        this.amount += parseInt(amount)
    }

    doesItemFit(amount) {
        if (this.amount + amount <= this.item.stackMaxSize) {
            return true
        }
    }
}
