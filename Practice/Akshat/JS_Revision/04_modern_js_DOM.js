// creation of DOM
// character->tags->token->nodes->DOM
//html document is converted to JS object whose name is document is called DOM.

console.log(document.getElementById('gender'));
console.log(document.getElementsByClassName('common'));
// $0  selected element
// name=$0 

//return only first element
let new_name=document.querySelector('.common');
console.log(new_name);

console.log(document.querySelector('.hidden'));


//Updating existing content
// properties
  
// 1) Inner HTML
//get an html element and all its discendant
//set html element

// 2) Outer HTML
// 3) Text content
// 4) inner text

let rat=document.querySelector('#rating');
console.log(rat.innerHTML);
rat={};
console.log(rat);

let write=document.querySelector('#write');
console.log(write.innerHTML);    //It will render tags.
console.log(write.textContent);  //It will treat inside tags as text
console.log(new_name.innerText);  //It will not show hidden objects like display hidden.

//Adding New Element/Content
let newinput=document.createElement('input');
let ph=document.querySelector('#phonee');
ph.appendChild(newinput);

//Creating text node
// let newpara=document.createElement('p');
// let textpara=document.createTextNode('I am the king');
// newpara.appendChild(textpara);
// let ratt=document.querySelector('#rating');
// ratt.appendChild(newpara);

//easy/fast method
let ratt=document.querySelector('#rating');
let newpara=document.createElement('p');
newpara.textContent='I am the king of kings';
ratt.append(newpara);

//Adding new element at any place
let newele=document.createElement('h3');
newele.textContent='I am Hero';
ratt.insertAdjacentElement('beforebegin',newele);

//Remove element
let childd=document.querySelector('#writeee_p');
childd.remove();


//Style page content
//Methods
// .Style
// .csstext
// .set...childd.etc

// newele.style.backgroundColor="blue";

newele.style.color="red";  //set only single
newele.style.cssText = 'color:green; background-color:yellow; font-size:4rem;';
newele.setAttribute("style","background-color:red;");
newele.setAttribute("id","king");
newele.setAttribute("class","queen1 queen2");
console.log(newele.className);
let className=newele.className.split(' ');  //Now it is converted to an array in which we can add any class but we have to make string again from this array thid sis bad;
console.log(className);

let classList= newele.classList;
console.log(classList);
classList.add('queen3');
// .toggle  If element present then delete if not present then add
// .contains