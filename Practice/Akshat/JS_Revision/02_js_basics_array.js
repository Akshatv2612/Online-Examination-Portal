let arr=[1,2,3,4,5];
console.log(arr);

arr.push(9);
console.log(arr);

arr.unshift(8);
console.log(arr);

arr.splice(3,0,'a','b','c'); //start index of insertion, no of element to delete,add elements
console.log(arr);

//search on primitives
console.log(arr.indexOf('b'));
console.log(arr.indexOf('k'));
console.log(arr.indexOf(2,4)); //start searching from 4th index

//better search
console.log(arr.includes('b'));

//indexOf method search by comparing value in case of primitive and search by reference in case of refrences;
//searches on object/references
let students=[
    {no:1,naam:'Akshat'},
    {no:2,naam:'Tanu'}
]

console.log(students);
console.log(students.indexOf({no:1,naam:'Akshat'})); //this will not work since reference of object passed here and actuall object/ is different.
//similarly includes will not work here.

//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

let ans=students.find(function(stu){
    return stu.naam=='Tanu';
})
console.log(ans);

//short code
let ans2=students.find(stu => stu.naam==='Akshat');  //If no parameter then ()=>, if more than one parameter then (a,b)=>
console.log(ans2);

//Elements removing
let arr2=[1,2,3,4,5,6,7];
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.shift();
console.log(arr2);

arr2.splice(2,2);
console.log(arr2);

//Emptying array
let arr3=[1,2,3,4,5,6,7];
let arr4=arr3; //copy by reference

// arr3=[]; //here we have pointed arr3 to empty but [1,2,3,4,5,6,7] reference is stored.
arr3.length=0; //*********/
console.log(arr3);
console.log(arr4); 

let arr6=[1,2,3,4,5,6,7];
arr6.splice(0,arr6.length);
console.log(arr6);


//Combining and slicing
let first=[1,2,3,4,5];
let second=[1,2,3,4];

let comb=first.concat(second);
console.log(comb);

let slice=first.slice(1,3);
console.log(slice);

let fullslice=first.slice();
console.log(fullslice);

let stu1=[
    {No:1,naam:'Tamanna'},
    {No:2,naam:'Akku'},
]
let stu2=[
    {No:1,naam:'Tanu'},
    {No:2,naam:'Akshat'},
]

let stu=stu1.concat(stu2);
console.log(stu);

//Spread Operator
let f=[1,2,3,4];
let s=[1,2];
let com=[...f,...s];
console.log(com);

//copy using spread operator

let copy=[...f];
console.log(copy);

//Iterating over array
let arrr=[5,6,3,4,1,2,3,3,3,4,2]
for(let i of arrr){
    console.log(i);
}

com.forEach(function(number){
    console.log(number);
})

com.forEach(number => console.log(number));

//Joining arrays [1,2,3]->1,2,3,4 //',' is separator joined in string

let vector=[1,2,3,4,5];
let joined=vector.join('|'); //'|' as separator
console.log(joined);
console.log(typeof(joined));

let split=joined.split('|');
console.log(split);

//Sorting
let srr=[3,6,7,30,41,12,8];
srr.sort(); //It will not short array correctly beacause sort function does sorting after converting to string;
console.log(srr);
srr.reverse(srr);
console.log(srr);

srr.sort(function comp(num1,num2)
{
    // if(num1<=num2)
    // {
    //     return -1;
    // }
    // else
    // {
    //     return 1;         //swap when positive number encounters
    // }

    return num1-num2;
})
console.log(srr);

//Sort in onjects

let teachers=[
    {naam:'KK',salary:4000000},
    {naam:'AK',salary:3000000},
    {naam:'DK',salary:1000000}
]

function comparator(t1,t2)
{
    if(t1.salary<t2.salary)
    {
        return -1;
    }
    else{
        return 1;
    }
}

teachers.sort(comparator);
console.log(teachers);

let numbers=[1,-2,3,4,-5,-3];

let filtered=numbers.filter(function(value)
{
    return value>=0;
})
console.log(filtered);

//Mapping Arrays
let number=[5,6,7,8];
let mapping=number.map(function(value)
{
    return 'Student no '+value;
})
console.log(mapping);

//Mapping with Objects
let num=[2,3,4,-3,5,-4];
let items=num.filter(value => value>=0) //chaining
              .map(function(num)
              {
                 return {value:num};
              })
console.log(items);
console.log(typeof(items));


