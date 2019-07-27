let guy = new User([], redRoom)

let redRoom = new Room("the red room", "you're in the red room", ["apple", "watermelon"])
let blueRoom = new Room("the blue room", "you're in the blue room", ["blueberry", "fig"])
let greenRoom = new Room("the green room", "you're in the green room", ["lime", "grape"])
let yellowRoom = new Room("the yellow room", "you're in the yellow room", ["lemon", "mango"])

let input = document.getElementById("input")
input.addEventListener("keyup", (event) => {
    let response = document.getElementById("response")
    let x = input.value
    if(event.key === "Enter") {
        if(x === "hello") {
            response.innerHTML = "good, you're awake"
            input.value = ""
        }
        else if(x === "bye") {
            response.innerHTML = "wait no, don't go"
            input.value = ""
        }
        else {
            response.innerHTML = "what?"
            input.value = ""
        }
    }
})
