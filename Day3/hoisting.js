// Hoisting: Hoisting is JavaScript default behavior of moving declarations to yhe top!

// Function Hoisting
name('Shubham');

function name(firstname){
    console.log(firstname);
}

// var hoisting: It cannot de declared without initalization.

console.log(num);   //Undefined output

var num;  //Declaration
num = 8; //Initialization
console.log(num);   // ouput 8

//let and const hoisting: 


// Asynchronous

const fun2 = () => {
    setTimeout(() => {
        console.log('function 2 is calling');
    }, 2000);
}
const fun1 = () => {
    console.log('function 1 is calling');
    fun2();
    setTimeout(() => {
    console.log('function 1 is calling again');
    }, 3000);
}
fun1();

