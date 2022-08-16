//getting started with advanced javascript course

//session 1 nested function's scope

/*
let a = 10  //this is the global scope
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()*/


//=======================================

//session 2 Closure

/*function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
*/

//============================

//session 3 function currying

function sum(a, b, c){
    return a + b + c
}

console.log(sum(2,3,5))

//sum(2,3,5) sum(3)(3)(5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))


const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)