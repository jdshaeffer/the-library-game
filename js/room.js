class Room {
    constructor(name, info, inv, walls, visited) {
        this.name = name
        this.info = info
        this.inv = inv
        this.walls = walls
        this.visited = visited
    }
}

// TODO: deterimne objects - use of objects? use them in outside world?
let desks = new Room("a desk", "it's a desk with some papers - there's a window overlooking a courtyard - some bookshelves to the east", [], ["w","s","n"], false)
let door_to_harp_room = new Room("locked door", "just a door with a small window - you could probably look through - the shelves are south", [], ["w","n","e"], false)
let shelves = new Room("shelves", "you're in the middle of a long row of shelves filled with tall, thin books - continues e/w and a space to the north", [], ["s"], false)
let displays = new Room("displays", "there's a glass display case with a viola and some plaster hands - more displays to the south and a door to the east", [], ["n"], false)
let more_displays = new Room("more displays", "another display with pictures and memorabilia of an old musician", [], ["e","s","w"], false)
let door_to_viola_room = new Room("door to viola room", "the room you were in lies to the west - you see more doors to the north", [], ["s","e"], false)
let n_s_hallway = new Room("n/s hallway", "you're in the middle of a n/s hallway", [], ["e","w"], false)
let door_to_room4425 = new Room("door to room 4425", "there's a door labeled 4425 to the west - n/s hallway continues", [], ["e"], false)
let room4425 = new Room("", "", [], [], false)
let door_to_room4424 = new Room("door to room 4424", "there's a door labeled 4424 to the west - n/s hallway continues", [], ["e"], false)
let room4424 = new Room("", "", [], [], false)
let intersection = new Room("intersection", "you're at an intersection of a n/s hallway and an e/w hallway", [], ["n","e"], false)
let e_w_hallway = new Room("e/w hallway", "you're in the middle of a e/w hallway", [], ["n","s"], false)
let door_to_harps = new Room("intersection 2", "you're just outside a door to the south - a hallway continues east", [], ["n","w"], false)
let harp_archives = new Room("harp archives", "harps are strewn about - a person is sitting in a chair", [], [], false)
