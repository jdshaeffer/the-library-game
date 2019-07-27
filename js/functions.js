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
    if(x === "l") {
        look(roomInfo, roomInv, response, input)
    }
    else if(x === "i") {
        printUserInv(user)
    }
    else if(x.slice(0,5) === "take ") {
        let thing = x.slice(5)
        take(thing, roomInv, user.inv, response, input)
    }
    else if(x === "take") {
        response.innerHTML = "specify what you want to take"
        input.value = ""
    }
    else if(x.slice(0,5) === "drop ") {
        let thing = x.slice(5)
        drop(thing, roomInv, user.inv, response, input)
    }
    else if(x === "drop") {
        response.innerHTML = "specify what you want to drop"
        input.value = ""
    }
}

// eventually user inventory can be a piece of the ui - like a small list somewhere on the screen
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
    let itemFound = false
    for(let item of roomInv) {
        if(item.name === thing) {
            userInv.push(item) // user inv is array of item objects, not strings
            roomInv.pop(item)
            response.innerHTML = "you take the " + item.name
            itemFound = true
        }
    }
    // if(roomInv.includes(thing)) {
    //     userInv.push(thing)
    //     roomInv.pop(thing)
    //     response.innerHTML = "you take the " + thing 
    // }
    if(!itemFound) {
        response.innerHTML = "you can't take that"
    }
    input.value = ""
}

let drop = (thing, roomInv, userInv, response, input) => {
    if(userInv.includes(thing)) {
        roomInv.push(thing)
        userInv.pop(thing)
        response.innerHTML = "you drop the " + thing
    }
    else {
        response.innerHTML = "you can't drop that"
    }
    input.value = ""
}
