let givenStr = 'FXSHRYW'


let final = 0


function findTitleCount() {
    for (let val of givenStr) {
        final *= 26
        final += val.charCodeAt(0) - "A".charCodeAt(0) + 1

    }
    console.log(final)
}
if (givenStr === givenStr.toUpperCase()) {

    if (givenStr.length >= 1 && givenStr.length < 7) {
        findTitleCount()
    }
    else if (givenStr.length === 7 && givenStr <= 'FXSHRXW') {
        findTitleCount()
    }
    else {
        console.log("word length or word out of range")
    }
} else {
    console.log("enter uppercase")
}