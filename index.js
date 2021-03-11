// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    return cats.pop()
}

function destructivelyRemoveFirstCat(name){
    return cats.shift()
}

function appendCat(name){
    appendCat = [ ...cats,name]
    return appendCat
}
function prependCat(name){
    prependCat = [ name, ...cats]
    return prependCat
}
function removeLastCat(name){
    removeLastCat = cats.slice(0,-1);
    return removeLastCat
}
function removeFirstCat(name){
    removeFirstCat = cats.slice(1,cats.length);
    return removeFirstCat
}