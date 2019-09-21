class Room {
    constructor(name, info, inv, walls) {
        this.name = name
        this.info = info
        this.inv = inv
        this.walls = walls
    }
}

// TODO: deterimne objects - use of objects? use them in outside world?
let desks = new Room("a desk", "", [], ["w","s","n"])
let locked_door_to_harp_room = new Room("","",[],["w","n","e"])
let shelves = new Room("", "", [], [])
let displays = new Room("", "", [], [])
let more_displays = new Room("", "", [], [])
let exit = new Room("", "", [], [])
let n_s_hallway = new Room("", "", [], [])
let door_to_room4425 = new Room("", "", [], [])
let room4425 = new Room("", "", [], [])
let door_to_room4424 = new Room("", "", [], [])
let room4424 = new Room("", "", [], [])
let intersection1 = new Room("", "", [], [])
let w_e_hallway = new Room("", "", [], [])
let intersection2 = new Room("", "", [], [])
let harp_room = new Room("", "", [], [])
