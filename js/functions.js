let look = (roomInfo, roomInv, response, input) => {
    if(roomInv.length === 0) {
        response.innerHTML = roomInfo 
    }
    else {
        response.innerHTML = roomInfo + "<br>"
        for(let item of roomInv) {
            response.appendChild(document.createTextNode("there is " + item.indef + " " + item.name + " here"))
            response.appendChild(document.createElement("br"))
        }
    }
    input.value = ""
}

let printGlobals = (x, roomInfo, roomInv, response, input, user) => {
    if(x === "l" || x === "look" || x === "x" || x === "examine" || x === "look around") {
        look(roomInfo, roomInv, response, input)
    }
    else if(x === "i" || x === "inventory") {
        printUserInv(user)
    }
    else if(x.slice(0,5) === "take ") {
        let thing = x.slice(5)
        take(thing, roomInv, user.inv, response, input)
    }
    else if(x.slice(0,2) === "t ") {
        let thing = x.slice(2)
        take(thing, roomInv, user.inv, response, input)
    }
    else if(x === "take" || x === "t") {
        response.innerHTML = "specify what you want to take"
        input.value = ""
    }
    else if(x.slice(0,5) === "drop ") {
        let thing = x.slice(5)
        drop(thing, roomInv, user.inv, response, input)
    }
    else if(x.slice(0,2) === "d ") {
        let thing = x.slice(2)
        drop(thing, roomInv, user.inv, response, input)
    }
    else if(x === "drop" || x === "d") {
        response.innerHTML = "specify what you want to drop"
        input.value = ""
    }
    else if(x === "help") {
        response.innerHTML = "n, s, e, w - move around<br>" +
            "take - take an item<br>" +
            "drop - drop an item<br>" +
            "i - check your inventory<br>" +
            "x - examine an item/room<br>" +
            "l - look at an item/room<br>"
        input.value = ""
    }
}

let printUserInv = (user) => {
    if(user.inv.length === 0) {
        response.innerHTML = "you don't have anything" 
    }
    else {
        response.innerHTML = "you have:<br>"
        for(let item of user.inv) {
            response.appendChild(document.createTextNode(item.indef + " " + item.name))
            response.appendChild(document.createElement("br"))
        }
    }
    input.value = ""
}

let take = (thing, roomInv, userInv, response, input) => {
    if(roomInv.length === 0) {
        response.innerHTML = "you can't take that"
    }
    if(thing === "all") { // if user decides to take everything in the room
        let allResponse = ""
        for(let item of roomInv) {
            userInv.push(item)
            allResponse += "you take the " + item.name + "<br>"
            response.innerHTML = allResponse
        }
        roomInv.length = 0 // empty array
    }
    else {
        for(let item of roomInv) { // not very dry right now
            if(item.name === thing) {
                userInv.push(item) // user inv is array of item objects, not strings
                roomInv.splice(roomInv.indexOf(item), 1)
                response.innerHTML = "you take the " + item.name
            }
            else {
                response.innerHTML = "you can't take that" 
            }
        }
    }
    input.value = ""
}

let drop = (thing, roomInv, userInv, response, input) => {
    if(userInv.length === 0) {
        response.innerHTML = "you can't drop that"
    }
    if(thing === "all") {
        let allResponse = ""
        for(let item of userInv) {
            roomInv.push(item)
            allResponse += "you drop the " + item.name + "<br>"
            response.innerHTML = allResponse
        }
        userInv.length = 0 // empty array
    }
    else {
        for(let item of userInv) {
            if(item.name === thing) {
                roomInv.push(item)
                userInv.splice(userInv.indexOf(item), 1)
                response.innerHTML = "you drop the " + thing
            }
            else {
                response.innerHTML = "you can't drop that"
            }
        }
    }
    input.value = ""
}
