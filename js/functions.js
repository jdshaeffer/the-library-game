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
        take(thing, roomInv, user.inv)
    }
    else if(x === "take") {
        response.innerHTML = "specify what you want to take"
        input.value = ""
    }
    else if(x.slice(0,5) === "drop ") {
        let thing = x.slice(5)
        drop(thing, roomInv, user.inv)
    }
    else if(x === "drop") {
        response.innerHTML = "specify what you want to drop"
        input.value = ""
    }
}

let printUserInv = (user) => {

}
