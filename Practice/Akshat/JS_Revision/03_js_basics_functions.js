//Hoisting js engine move all functions declaration(not function assignment) on top, and we will be able to call functions before its declation.

//method 1
print();

function print()
{
    console.log('Run');
}

//method 2 - named function assignment
let fun=function print2()
{
    console.log('walk');
}
// print2();  //not work
fun();        //we cannot use is above

//method 3 - anonymous function assignment
let fun2=function()
{
    console.log('Bhaag');
}
fun2();

//Is dynamic nature work on function Yes! here we can pass less or more argument
function sum()
{
    console.log(arguments);
    
    let total=0;
    for (let value of arguments) {
        total=total+value;
    }
    return total;
}
console.log(sum(2,3));
console.log(sum());
console.log(sum(2,3,5,6,7));

//rest operators
function sum2(num,...args)
{
    console.log(args);
}
sum2(1,2,3,4,5,6);

//getter setter apply
let person={
    fname: 'Akshat',
    lname: 'Verma',
    get fullName()  //It is not a function
    {
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value){
        if(typeof value!== 'string')
        {
            throw new Error("You have not sent a valid string");
        }
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};

console.log(person.fullName);
person.fullName='Tammana Jangid';
console.log(person.fullName);

// Try & Catch (Error handeling)
try{
    person.fullName=1;    //set 1 or true to check 
}
catch(e){
    alert(e);
}

//Scope of var keyword is within a function in with it is define but if it is not define in within function the its scope will be whole file.

let aarr=[1,2,3,4];

let totalsum = aarr.reduce((accumulator,currentValue) => accumulator + currentValue,0); //When we dont use accumulator as 0 here then by default accumulator start from 0th index value and current_value starts from second index_value.
console.log(totalsum);