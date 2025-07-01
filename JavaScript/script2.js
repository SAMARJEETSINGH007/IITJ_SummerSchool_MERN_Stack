let n1="Hello";
console.log(typeof(n1));
let n2=1;
console.log(typeof(n2));
let n3=true;
console.log(typeof(n3));
let n4;
console.log(typeof(n4));
let n5=null;
console.log(typeof(n5));
let n6=0/0;//this is NaN ie not a number
let n7=10/0;//this is infinity
console.log(n6,n7);
let n=BigInt(Number.MAX_SAFE_INTEGER);
console.log(n);
console.log(Number.MAX_SAFE_INTEGER+1===Number.MAX_SAFE_INTEGER+2);
//The purpose of using big int is to store the large integer values
//While the purpose of symbol is to act as a key to the object and may
//not clash with the key of another object.
//---------->HOISTING<----------
//What does hoisting mean> using any variable/any object before it's declaration where js implicitly moves the declaration it to the top of their scope.
//There are two types of hoisting mainly ie the value hoisting and the declaration hoisting.
//function declaration:hoisted with type 1 behaviour
//var is hoisted with type 2 behaviour
//let, const, class are declared with the type 3 behaviour.
//and the import are declared with type 1 and 4 behaviour.
console.log(x);
var x=10;
//The declaration of x is moved up and thence it is accessible but since
//it is not defined ie not provided a value, it is undefined in console 
//when we c.log it.
//------------PROMPT---------
//Used for taking input from user via dialog box.
//Three parameters:1.message(optional)> what you wanna say in prompt
//2.Default value
//3.Return value.
const ageButton=document.querySelector("#ageButton");
const log=document.querySelector("#log");
ageButton.addEventListener("click",()=>
	{
		let age=Number(window.prompt("What is your age"));
		if(age===null)
		{
			log.innerText="No problem next time!";
		}
		else if(age<18)
		{
			log.innerText="Teen";
		}
		else if(age>=18 && age<60)
		{
			log.innerText="You are an adult";
		}
		else if(age>=60 && age<121)
		{
			log.innerText="You are senior citizen";
		}
		else if(age>121)
		{
			log.innerText="Please enter a valid age!";
		}
	});
for(let i=1;i<11;i++)
{
	console.log(i);
}
let s=2;
while(s<21)
{
	console.log(s);
	s++;
}
let t=11;
do
{
	--t;
	console.log(t);
}while(t>1);
//----------------FUNCTIONS IN JAVA SCRIPT-------------
//used to increase readability adn maintainability. perform complex 
//task in a modular way.
//Type 1
//Function Declaration
console.log("calling greet()");
greet();
function greet()
{
	console.log("Hello!");
}
greet();
//FUNCTION DECLARATION ARE HOISTED. THEY CAN BE USED BEFORE THEY ARE
//DECLARED!!!
//Function expression
const grt=function()
{
	console.log("Hello from a function expression!");
};
grt();
//MIND IT FUNCTIONS ARE NOT HOISTED.
//Arrow functions
//THESE WORK LIKE THE LAMBDA FUNCTIONS IN JAVA.
//BTW, add is the short way to write the l function.
let l=function(a,b)
{
	return a+b;
};
const add=(a,b)=>
{
	return a+b;
};
console.log(l(5,3));
console.log(add(5,3));
//You can also define a default value of the parameters in javascript
function greet(name="Default_name")
{
	console.log(`Hello ${name}`);
}
greet();
greet("Samar");
//Well a shocker that functions can return some values in JS
function character(name="pekka")
{
	return name+" is of seven elixir";
}
let result=character("Mega Knight");
console.log(result);
//ANY FUNCTION THAT DOES NOT RETURN ANYTHING IS RETURNING UNDEFINED
function foo()
{
	console.log("executed the function foo()");
}
let op=foo(4);
console.log();
console.log(typeof(foo));
//-----------------IMMEDIATELY INVOKED FUNCTIONS-------------\\
//Function that runs immediately after being defined.
let fun=(function()
	{
		consle.log("This function runs immediately!!!");
	});
//IIFE are immediately invoked and help in avoiding the pollution of
//the global scope as it defines a local scope for a variable where it
//is to be stored. () are there to depict that it is indeed a IIFE.
//And it does not go to the global scope and is executed immediately
function sum(a,b)
{
	return a+b;
}
console.log(sum(5,10));
function sq(a)
{
	return n*n;
}
console.log(sq(6));
function sayHello(name="Jhon Doe")
{
	return name+" hello!" 
}
sayHello("Wizard");
function incrementByOne(num1)
{
	return num1+1;
}
function processNumber(baseNumber,callback)
	{
		const incremented=callback(baseNumber);
		console.log("sum of the number 5 and num incremented is"
		,incremented*2);
	};
processNumber(5,incrementByOne);






















