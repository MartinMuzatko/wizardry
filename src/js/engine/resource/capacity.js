import Resource from './resource'

export default class Capacity extends Resource {
    constructor(resource, capacity = 100) {
        super(resource.name, resource.amount)
        this.capacity = capacity
    }
}
