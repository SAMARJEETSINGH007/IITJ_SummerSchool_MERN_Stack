//SEE JUST GO THROUGH THIS AND READ THE COMMENTS, THE SAMAR OF NOW HAS 
//MADE IT EASY TO UNDERSTAND FOR YOU SAMAR OF THE FUTURE...
//PASS BY VALUE:YOU PASS THE PRIMITIVE DATATYPES AND A COPY OF THEM IS
//PASSED TO THE FUNCTION.
let x=21;
function foo(x)
{
	x=20;
}
console.log(x);//before the change of value
foo(x);
console.log(x);//AFTER THE APPARENT CHANGE OF VALUE;
//-RUN THE CODE-
//THERE IS NO CHANGE.BECAUSE THE REFRENCE IS NOT PASSED.

//PASS BY REFRENCE.FOR OBJECTS AND ARRAYS.
//PASS BY REFRENCE FOR OBJECTS
function foo2(obj)
{
	obj.name="Changed...";
}
let person={name:"Mangloo"};
console.log(person.name);
foo2(person);
console.log(person.name);
//PASS BY VALUE FOR ARRAYS
let arr=[1,2,3,4,5];
function foo3(arr)
{
	arr.push(6);
}
console.log("Before"+arr);
foo3(arr);
console.log("After"+arr);
//LETS SAY YOU DONT WANNA MODIFY THE ORIGINAL ARRAY RIGHT, SO YOU DO:
//USE SPREAD OPERATOR.
let arr2=[1,2,3,4,5];
function foo4(arr)
{
	arr=[...arr,6];
	console.log(arr);
}
console.log("Before arr2 "+arr2);
foo4(arr2);
console.log("After arr2 "+arr2);
//YOU CAN ALSO USE Object.assign
//MIND IT YOU NEED TO USE console.log("Name is",name); instead of 
//clog(""+nam) as it assigns ranterh than logging separatelyx
function foo5(obj)
{
	let newObj=Object.assign({},obj);
	//RIGHT NOW THE newObj IS EMPTY {}
	newObj.name="Sam";
	console.log("the foo5 person is",newObj);
}
let person2={name:"Ansh"};
console.log("Before the person is",person2);
foo5(person2);
console.log("After the person is",person2);



//OKAY, SO NOW LET'S TALK ABOUT THE setTimeOut AND setInterval
//setTimeOut: runs a function after a specified time
setTimeout(()=>{
	console.log("This runs after 5 seconds");},5000
);
//AND YOU CAN CANCEL OUT THE SAME BY THE USE OF clearTimeout
const timerId=setTimeout
(
	()=>
	{
		console.log("You wont see this!");
	},3000
);
clearTimeout(timerId);
//AND setInterval(fn,interval)--> YOU WANNA RUN A FUNCTION AGAIN AND 
//AGAIN? USE THIS ONE.
let sec=1;
const interValId=
setInterval
(
	()=>
	{
		console.log(`${sec} seconds have passed`);
		sec++;
		if(sec==10)
		{
			clearInterval(interValId);
		}
	},1000
);
























