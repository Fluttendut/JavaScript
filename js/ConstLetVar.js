//Der er 3 JS keywords der bruges til tildeling af variable

const a = 5
let b = 6
b = "hej"
var c = 5.5

console.log(b)

function testScope(){
    let a1 = "xjeg er lokal"
    var v1 = "jeg var lokal"
    if (a1>v1) {
        let a2 = "a1 var større end v1"
        console.log(a2)
        if (3==3) {
            let a3 = 3
            var v3 = 3.3
            console.log("3=3")
        }
        // console.log(a3) kan ikke ses her
        console.log(v3) //blok scope virker ikke med var
    }
}
testScope()
// console.log(a2) scope virker
// console.log(v1) scope virker