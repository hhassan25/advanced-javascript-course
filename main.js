//getting started with advanced javascript course

//session 1 nested function's scope
let a = 10  //this is the global scope
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()