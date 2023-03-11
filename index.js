// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
// console.log (cats);
function destructivelyAppendCat() {
  cats.push("Ralph");
}
function destructivelyPrependCat() {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(){
  let newCatsArray=[...cats, "Broom"];
    return newCatsArray;
}
let newCatsArray = appendCat();
function prependCat(){
  let newCatsArray=["Arnold", ...cats];
    return newCatsArray;
}
function removeLastCat(){
  let newCatsArray=cats.slice(0,2);
    return newCatsArray;
}

function removeFirstCat(){
  let newCatsArray2=cats.slice(1);
    return newCatsArray2;
    // console.log(newCatsArray2)
}
let newCatsArray3 =removeFirstCat();
