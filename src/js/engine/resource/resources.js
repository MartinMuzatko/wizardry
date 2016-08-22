import Resource from './resource'
import Capacity from './capacity'

export const HEALTH = new Capacity(new Resource('health', 0),1000)
export const MANA = new Capacity(new Resource('mana', 0),1000)
