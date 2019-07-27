let checkEnter = (e) => {
    let charCode
    if(e && e.which) {
        charCode = e.which
    }
    else {
        e = event
        charCode = e.keyCode
    }
    if(charCode === 13) {
        document.forms[0].submit()
        return false
    }
    else {
        return true
    }
}

if(document.getElementById("input").value == "hello") {
    document.getElementById("response").innerHTML = "Good, you're awake"
}
