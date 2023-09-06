// dynamic typed language
console.log('Hello world');

let a = 7;
let b = 6;
a = "akshat";
a = 4
console.log(a);

let person = {
    name: "Akshat",
    age: 22,
    walk() {
        console.log('fast');
    }
}
person.walk();
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person['age']);

let names = ['Akshat', 'Tanu'];
console.log(names[1]);
console.log(a ** b);
console.log(++a);
console.log(a !== a);

let age = 9;
let statuss = (age >= 18) ? 'Eligible' : 'Not elegible'

console.log(statuss);

console.log((false || 'Akshat' || 1));
console.log((5 && 'Akshat' && 45));

let num = 3;

switch (num) {
    case 1: {
        console.log('A');
    }
    case 2: {
        console.log('B');
        break;
    }
    case 3: {
        console.log('C');
    }
    default: {
        console.log('D');
    }
}

for (let index = 0; index < 5; index++) {
    console.log('Akshat' + index);
}

//Camelcase-numberOfStudent
//factory-fuunctions.
function createRectangle1(l, b) {
    return rectangle = {
        length: l,
        breadth: b,
        printArea() {
            console.log(l * b);
        }
    }
}

function createRectangle2(length, breadth) {
    return rectangle = {
        length,
        breadth,
        printArea() {
            console.log(length * breadth);
        }
    }
}

//creating object using factory function.
let rect1 = createRectangle2(2, 4);
console.log(rect1.length);
console.log(rect1.breadth);
rect1.printArea();

//Pascal Notation-NumberOfStudent
//constructor-functions
function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log('drawing');
    }
}

//creating ogject using constructor function
let rect2 = new Rectangle();
console.log(rect2);

//dynamic nature of object
rect2.color = 'red';
console.log(rect2);

delete rect2.length;
console.log(rect2);

//constructor property of object

//Every function is also an object and it also have constructor.

//This rect2 have constructor which we have defined above which is called when we create an object.
console.log(rect2.constructor);

//rect2-->calling of Rectangle constructor-->calling of Function constroctor.
//This constructor is a function and it must have constructor so we will have inbuilt constructor here, so this construtor function will call an inbuilt constructor "Function". and internally this is happening.
// let Rectangle = Function(
//     'len', 
//     'bre', 
//   ` this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//     console.log('drawing');
//     }`
// )
console.log(Rectangle.constructor);

//For this rect1 we have not created any constructor so we will have inbuilt constructor.
console.log(rect1.constructor);

//Types in JS
//1)Primitive or value ->here copy pass
//2)Reference or object ->here pass by reference exact passing.

let obj1={
    b:10
}

let obj2=obj1;
obj1.b=11;

console.log(obj1.b);
console.log(obj2.b);

function inc(a)   //Entities of objects are passed by value.
{
    a++;
}

inc(obj1.b); 
console.log(obj1.b);

function inc2(a)  //Object are passed by references.
{
    a.b++;
}

inc2(obj1);
console.log(obj1.b);

//Iterate through the object

let human={
    head:1,
    hand:2,
    leg:2
}

for(let key in human)
{
    console.log(key,human[key]); 
}

//for in for objects
//for of for iterables like arrays,maps
//object is not iterables so,for of cannot be used for object but we can use it using some hack.

for(let key of Object.keys(human))
{
    console.log(key,human[key]);
}

//Object.keys() return array iterable formed using keys of object.

if('head' in human)
{
    console.log('True');
}
else
{
    console.log('False');
}

//clonning object iteratively
let human2={};
for(let key in human)
{
    human2[key]=human[key];
}
console.log(human2)

//clonning object by assign
let human3=Object.assign({},human);
human.leg=4;
console.log(human3);

let human4={};
Object.assign(human4,human);
console.log(human4);

//clonning object using spread
let human5={...human};
console.log(human5);
human.head=2;

let namee=new String('Akshat');
console.log(typeof namee);

let lastname='Akshat';
console.log(typeof lastname);

//using . js treat string as object string;
console.log(lastname.charAt(3));
console.log(lastname.length);
console.log(lastname.startsWith('Ve'));
console.log(lastname.includes('Ak'));

let msg="This is my first msg";
let words=msg.split(' ');
console.log(words);
console.log(typeof words);

//object literal-> {}
//string literal-> ''
//template literal-> ``(back ticks) preserve formating

let msgg= `
Hello ${namee}

Congratulation.
You are selected`;

console.log(msgg);

//Date and time

let date1= new Date();
console.log(date1);

let date2=new Date(2000,11,26,5);
console.log(date2);

let date3=new Date('June 20 1998 5:00');
console.log(date3);

date3.setFullYear(2000);
console.log(date3)  ;

