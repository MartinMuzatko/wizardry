import Slot from './slot'
import {NONE} from '../item/items'

export default class Inventory {
    constructor(slots) {
        if (typeof slots == 'number') {
            this.slots = new Array(slots).fill(1)
            for (let slot in this.slots) {
                this.slots[slot] = new Slot
            }
        } else if (typeof slots == 'array') {
            this.slots = slots
        } else {
            this.slots = []
        }
    }

    put(item, amount) {
        let nextFreeSlot = this.findNextFreeSlot(item, amount)
        if (nextFreeSlot) {
            if (nextFreeSlot.doesItemFit(amount) || nextFreeSlot.item.name == NONE.name) {
                nextFreeSlot.add(amount, item)
            } else {
                let spaceLeft = nextFreeSlot.item.stackMaxSize - nextFreeSlot.amount
                nextFreeSlot.add(spaceLeft, item)
                this.put(item, amount - spaceLeft)
            }
        }
        // handle overflow
    }

    findNextFreeSlot(item, amount) {
        let freeSlots = this.slots
        if (item) {
            freeSlots = this.slots.filter(slot => {
                return slot.item.name == item.name && slot.doesItemFit(amount)
            })
        }
        if (!freeSlots.length) {
            freeSlots = this.slots.filter(slot => {
                return slot.item.name == NONE.name
            })
        }
        if (freeSlots.length) {
            return freeSlots[0]
        } else {
            return false
        }
    }
}
