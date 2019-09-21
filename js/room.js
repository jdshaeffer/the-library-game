class Room {
    constructor(name, info, inv, walls) {
        this.name = name
        this.info = info
        this.inv = inv
        this.walls = walls
    }
}

// TODO: deterimne objects - use of objects? use them in outside world?
let desks = new Room("a desk", "a desk with some papers. there's a window overlooking a courtyard. some bookshelves to the east.", [], ["w","s","n"])
let locked_door_to_harp_room = new Room("locked door", "just a door with a small window. you could probably look through. the shelves are south.", [], ["w","n","e"])
let shelves = new Room("shelves", "you're in the middle of a long row of shelves filled with tall, thin books. continues e/w.", [], ["s"])
let displays = new Room("displays", "there's a glass display case with a viola and some plaster hands. more displays to the south and a door to the east.", [], ["n"])
let more_displays = new Room("more displays", "another display with pictures and memorabilia of an old musician.", [], ["e","s","w"])
let door_to_viola_room = new Room("door to viola room", "the room you were in lies to the west. you see more doors to the north.", [], ["s","e"])
let n_s_hallway = new Room("n/s hallway", "you're in the middle of a n/s hallway.", [], ["e","w"])
let door_to_room4425 = new Room("door to room 4425", "there's a door labeled 4425 to the west. n/s hallway continues.", [], ["e"])
let room4425 = new Room("", "", [], [])
let door_to_room4424 = new Room("", "there's a door labeled 4424 to the west. n/s hallway continues.", [], ["e"])
let room4424 = new Room("", "", [], [])
let intersection1 = new Room("intersection 1", "you're at an intersection of a n/s hallway and an e/w hallway.", [], ["n","e"])
let e_w_hallway = new Room("e/w hallway", "you're in the middle of a e/w hallway", [], ["n","s"])
let door_to_harps = new Room("intersection 2", "you're just outside a door to the south. a hallway continues east.", [], ["n","w"])
let harp_archives = new Room("harp archives", "harps are strewn about. a person is sitting in a chair.", [], [])
