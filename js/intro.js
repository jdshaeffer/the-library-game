let user = new User([], desks)

// global commands
let globals = ["l", "look", "x", "examine", "look around",
    "i", "inventory",
    "take ", "take", "t", "t ",
    "drop ", "drop", "d", "d ",
    "help"]

// game
let input = document.getElementById("input")
input.addEventListener("keyup", (event) => {
    let response = document.getElementById("response")
    let x = input.value.toLowerCase()

    if(event.key === "Enter") {

        if(user.room === desks) {
            desks.visited = true
            if(x == "e") {
                enter(shelves, input, user, response)
            }
            else if(globals.includes(x) || globals.includes(x.slice(0,5)) || globals.includes(x.slice(0,2))) {
                printGlobals(x, desks, response, input, user)
                input.value = ""
            }
            else if(user.room.walls.includes(x)) {
                response.innerHTML = "can't go that way"
                input.value = ""
            }
            else {
                response.innerHTML = "what?"
                input.value = ""
            }
        }
        
        else if(user.room === shelves) {
            if(x === "w") {
                enter(desks, input, user, response)
            }
            else if(x === "n") {
                enter(door_to_harp_room, input, user, response)
            }
            else if(x === "e") {
                enter(displays, input, user, response)
            }
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, shelves, response, input, user)
                input.value = ""
            }
            else if(user.room.walls.includes(x)) {
                response.innerHTML = "can't go that way"
                input.value = ""
            }
            else {
                response.innerHTML = "what?"
                input.value = ""
            }
        }

        else if(user.room === door_to_harp_room) {
            if(x === "s") {
                enter(shelves, input, user, response)
            }
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, door_to_harp_room, response, input, user)
                input.value = ""
            }
            else if(user.room.walls.includes(x)) {
                response.innerHTML = "can't go that way"
                input.value = ""
            }
            else {
                response.innerHTML = "what?"
                input.value = ""
            }
        }

        else if(user.room === displays) {
            if(x === "w") {
                enter(shelves, input, user, response)
            }
            else if(x === "s") {
                enter(more_displays, input, user, response)
            }
            else if(x === "e") {
                enter(door_to_viola_room, input, user, response)
            }
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, displays, response, input, user)
                input.value = ""
            }
            else if(user.room.walls.includes(x)) {
                response.innerHTML = "can't go that way"
                input.value = ""
            }
            else {
                response.innerHTML = "what?"
                input.value = ""
            }
        }
    }
})
