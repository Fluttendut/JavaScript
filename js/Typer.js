// der er  7 (3+2+2) primitive typer i JS
// Number String Boolean
// Undefined Null
// Symbol og BigInt.. dem bruger vi ikke

// Det er yderligere 2 typer
// object function

function showTypes(lst) {
    console.log("STARTER udskrivning")
    for (const obj of lst){
        console.log(obj + " er af typen = " + typeof obj)
    }
}

const a = 5-5
const arr = []
//push er en funktion der tilføjer til et array
arr.push(a)
arr.push(0/0)
const arr2 = [1,3]
arr.push(arr2)
// showTypes(arr)
let f
arr.push(f)
let g = null
arr.push(g)
arr.push("hej"+(0/0))
showTypes(arr)