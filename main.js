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
/*
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
*/

//=========================

//session 4 this

/*function sayMyName(name){
    console.alog(`My name is ${name}`)
}

sayMyName('Hadi Hassan')
sayMyName('Mark Zik')
*/

//implicit binding

/*
const person = {
    name:'Hadi',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
}
person.sayMyName()

//Explicit binding it uses call
globalThis.name = 'Superman'
function sayMyName(){
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

//new binding
function Person(name){
    //this = {}
    this.name = name
}
const p1 = new Person('Hadi')
const p2 = new Person('Hassan')

console.log(p1.name)
console.log(p2.name)


//Default binding
//we add globalthis before the function
sayMyName()

*/

//==================================

//session 5 prototype and inheritance

/*
function Person(fName, lName){
    this.firsName = fName
    this.lastName = lName
}

const p1 = new Person('Hadi', 'Hassan')
const p2 = new Person('Super','Man')

/*p1.getFullName = function(){
    return this.firsName + ' ' + this.lastName
}

//to make prototype
Person.prototype.getFullName = function(){
    return this.firsName + ' ' + this.lastName
}

console.log(p1.getFullName())
console.log(p2.getFullName())
*/

//inheritance

function Person(fName, lName){
    this.firsName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function(){
    return this.firsName + ' ' + this.lastName
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHerio = true
}
SuperHero.prototype.fightCrime = function(){
    console.log('Fighting crime')
}
SuperHero.prototype = Object.create(Person.prototype)

const batman = new SuperHero('Hadi', 'Superman')
console.log(batman.getFullName())
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())