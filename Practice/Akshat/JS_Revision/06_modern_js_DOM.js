//Performance

//code 1
//Here every time we add a para there will be processing of "reflow" and "repaint" which takes time;
//Reflow-it is the process of calculating the position and dimension of page element;
//Repaint-drawing pixel on display
let start=performance.now(); 
for(let i=0;i<100;i++)
{
    let newEle=document.createElement('p');
    newEle.textContent='This is para';

    document.body.appendChild(newEle);
}
let end=performance.now();
console.log('Code 1 performance '+(end-start)+'ms');

//code 2
start=performance.now();
let mainDiv=document.createElement('div');
for(let i=0;i<100;i++)
{
    let newEle=document.createElement('p');
    newEle.textContent='This is para';

    mainDiv.appendChild(newEle);
}
document.body.appendChild(mainDiv);
end=performance.now();
console.log('Code 2 performance '+(end-start)+'ms');


//Document Fragment- Light weight document object in which there is no reflow and repaint take place when we append a new child in this.
//code 3
start=performance.now();
let Fragment=document.createDocumentFragment();
for(let i=0;i<100;i++)
{
    let newEle=document.createElement('p');
    newEle.textContent='This is para';

    Fragment.appendChild(newEle);
}
document.body.appendChild(Fragment);
end=performance.now();
console.log('Code 3 performance '+(end-start)+'ms');

//JS is a single threaded language which means it run only one command at a time.
//Synchronous-Occuring at the same time.
//Example- When we write a function call then at that time function starts running.
//Example of asyncronous-Eventlisteners- It will not execute at the same time when the declaration line exute.

//Event loop
// Process- Let say we call a function(synchronous execution) then it will
//          go inside the funtion call stack ans after the complete execution it will get removed from there
//          Now we have a Listener then this listener function will go inside the function call stack and remove suddenly
//          after instructing browser that if event occur then run this function.
//          Now let say we have an another function(sync) and it takes a lot of time so it will remain in call stack for some time--
//          In between If event occur then browser through that event function to "event queue".
//          But Event queue will not process since function call stack is not empty. Means event queue will wait untill call stack is empty.
//          Whenever call stack is empty the function call move to call stack then function exexuted.
//Some points
// 1) Asynchronous code uses JS Event loop ans handeled by browser.


// //setTimeOut function- It comes under asynchronous code and it goes inside call stack
//                        And ask browser to run a stated function after a stated time then browser send
//                        this function to event queue but event queue process only when call stack is empty.
//                        It is not guaranteed that stated function executed after stated time because It may wait in queue.

setTimeout(function()
{
    console.log('Hello world');
},5000);