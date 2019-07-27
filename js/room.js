class Room {
    constructor(name, info, inv, walls) {
        this.name = name
        this.info = info
        this.inv = inv
        this.walls = walls
    }
}

let redRoom = new Room("the red room", "you're in the red room", [apple, watermelon], ["n","w"])
let blueRoom = new Room("the blue room", "you're in the blue room", [blueberry, fig], ["n","e"])
let greenRoom = new Room("the green room", "you're in the green room", [lime, grape], ["s","w"])
let yellowRoom = new Room("the yellow room", "you're in the yellow room", [lemon, mango], ["s", "e"])

