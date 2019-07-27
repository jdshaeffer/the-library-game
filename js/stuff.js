// rooms
let redRoom = new Room("the red room", "you're in the red room", ["apple", "watermelon"], ["n","w"])
let blueRoom = new Room("the blue room", "you're in the blue room", ["blueberry", "fig"], ["n","e"])
let greenRoom = new Room("the green room", "you're in the green room", ["lime", "grape"], ["s","w"])
let yellowRoom = new Room("the yellow room", "you're in the yellow room", ["lemon", "mango"], ["s", "e"])

let user = new User([], redRoom)

// global commands
let globals = ["l", "i", "take ", "take", "drop ", "drop"]

// game
let input = document.getElementById("input")
input.addEventListener("keyup", (event) => {
    let response = document.getElementById("response")
    let x = input.value.toLowerCase()
    if(event.key === "Enter") {
        if(user.room === redRoom) {
            if(x == "e") {
                response.innerHTML = "you walk into the blue room"
                user.room = blueRoom
                input.value = ""
            }
            else if(x === "s") {
                response.innerHTML = "you walk into the green room"
                user.room = greenRoom
                input.value = ""
            }
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, redRoom.info, redRoom.inv, response, input, user)
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
        
        else if(user.room === blueRoom) {
            if(x === "s") {
                response.innerHTML = "you walk into the yellow room"
                user.room = yellowRoom
                input.value = ""
            }
            else if(x === "w") {
                response.innerHTML = "you walk into the red room"
                user.room = redRoom
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

        else if(user.room === greenRoom) {
            if(x === "n") {
                response.innerHTML = "you walk into the red room"
                user.room = redRoom
                input.value = ""
            }
            else if(x === "e") {
                response.innerHTML = "you walk into the yellow room"
                user.room = yellowRoom
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

        else if(user.room === yellowRoom) {
            if(x === "w") {
                response.innerHTML = "you walk into the green room"
                user.room = greenRoom
                input.value = ""
            }
            else if(x === "n") {
                response.innerHTML = "you walk into the blue room"
                user.room = blueRoom
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
