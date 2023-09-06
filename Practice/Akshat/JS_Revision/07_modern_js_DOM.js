//API- Application programming interface
//It is a bridge of communication between one software component to other.

//promises
// let myPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//         // resolve(1226);
//         reject(new Error('Error occured'));
//     },5000);
// })

// myPromise.then((val)=>console.log(val),(err)=>console.log(err));  //then catch in one
// // myPromise.catch((err)=>console.log(err));

// console.log('Synchronous code');


//multiple promises

let wadaa1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Inside wadaa 1');
        resolve("wadaa 1 resolved");
    }, 4000);
})

wadaa1.then((value) => {
    console.log(value);
    let wadaa2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Inside wadaa 2');
            resolve("wadaa 2 resolved");
        }, 2000);
    })
    return wadaa2;
}).then((value) => console.log(value));


//async-await
async function fun() {
    return 6;
}
console.log(fun());

async function utility() {

    let Dell = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi me bohot garmi hai");
        }, 2000);
    });

    let Maha = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Maharashtra me bohot sardi hai");
        }, 4000);
    });

    return [Dell, Maha];
}
console.log(utility());


//fetch API

//Get call
async function util() {
    let promiseData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let jsonData = await promiseData.json();
    console.log(jsonData);
}
util();

//Post call
async function helper() {
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'Akshat',
            body: 'Builder',
            userId: AK26,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };
    let promise = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await promise.json();
    return response;
}

async function utill() {
    let ans=helper;
    console.log(ans);
}
utill();

// Closure
function init(){
    let name ="Mozilla";
    function displayName(){  //This function forms a closure (closure basically a binding of function + all data required with reference), Here function displayName and name bind together to form closure. Here name is surrounding state for displayName function.
        console.log(name);
    }
    return displayName;       //In this way we can return whole function not call.
}
let ans=init();
ans();