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
            else if(globals.includes(x) || globals.includes(x.slice(0,5)) || globals.includes(x.slice(0,2))) {
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
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, blueRoom.info, blueRoom.inv, response, input, user)
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
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, greenRoom.info, greenRoom.inv, response, input, user)
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
            else if(globals.includes(x) || globals.includes(x.slice(0,5))) {
                printGlobals(x, yellowRoom.info, yellowRoom.inv, response, input, user)
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
