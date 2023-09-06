//Browser through events when click scroll or something happen.
//monitorEvents()
//unmonitorEvents()

//interface--blueprint

//EventTarget(top level entity even document is inside this)- Interface implimented by object that can recieve events & my have listeners for them.
//Listeners- Defines what to do in respond to event.

//Methods of Eventtarget
// 1)addEventListener()
// 2)removeEventListener()
// 3)dispatchEvent()

// EventTarget->Node->Element

// let mail=document.querySelector('#mail_form_inside');
let trial=document.querySelector('#mainhead');
let bod=document.querySelector('body');
// trial.addEventListener('click',function(){
//     alert('You are not eligible');
//     // mail.setAttribute('style','background-color:red');
// })


let fun=function()
{
    bod.setAttribute('style','background-color:yellow');
}
document.addEventListener('scroll',fun);

//remove event litenner
//for remove listner we need exactly same function not copy which is passed to addlistner.
document.removeEventListener('scroll',fun);

// Phases of an event
// Capturing phase- capturing target 
// At target phase- target found
// Bubbling phase - return 

//By default litener provoke at bubbling phase we can provoke it in Capturing phase by using third parameter 'true'(in place of usecapture) in add listener



//The Event Object
//When an object occurs, addeventlistener function get event object which have a lot of info about event
trial.addEventListener('click',function(event){
    console.log(event);
})

let links=document.querySelectorAll('a');
console.log(links);
let secondLink=links[1];
console.log(secondLink);

secondLink.addEventListener('click',function(event)
{
    event.preventDefault();
})


//Avoid too many event

//here we have too many litner to remove this take function outside
let mydiv=document.createElement('div');
let body=document.querySelector('body');

function paraStatus(event)
    {
        console.log(event.target.textContent);
    }

mydiv.addEventListener('click',paraStatus);

for(let i=0;i<100;i++)
{
    let newpara=document.createElement('p');
    newpara.textContent='This is para '+i;
    mydiv.appendChild(newpara);
}
body.appendChild(mydiv);

//A problem
//It will run code for span as well as paragraph
let ele=document.querySelector('#art');
ele.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN')
    {
    console.log('span per click ' + event.target.textContent)
    }
})

//DOM Content loaded
