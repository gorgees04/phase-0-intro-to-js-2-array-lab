// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    const newArr = [...cats, name]
    return newArr
}

function prependCat(name){
    const newArr = [name, ...cats]
    return newArr
}

function removeLastCat() {
    return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1)
}

