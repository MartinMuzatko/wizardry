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

    doesItemFit(amount, item) {
        if (this.item.name == NONE.name) {
            if (this.amount + amount <= item.stackMaxSize) {
                return true
            }
        } else if (this.amount + amount <= item.stackMaxSize) {
            return true
        }
    }
}
