let look = (roomInfo, roomInv, response, input) => {
    response.innerHTML = roomInfo
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

// eventually user inventory can be a piece of the ui - like a small list that can expand or something that stays on the side of the screen
let printUserInv = (user) => {
    response.innerHTML = "you have:\n stuff"
    input.value = ""
}

let take = (thing, roomInv, userInv, response, input) => {
    if(roomInv.includes(thing)) {
        userInv.push(thing)
        roomInv.pop(thing)
        response.innerHTML = "you take the " + thing 
    }
    else {
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
