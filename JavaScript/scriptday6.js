//SO FOR EACH IS TO BE CALLED ON THE ARRAY
let arr=[1,2,3,4,5];
arr.forEach(num=>console.log(num*2));
//IS PRIMARILY USED TO CALL A FUNCTION OVER EACH ELEMENT OF AN ARRAY.
//arr.forEach(callback(currentelement))
let numbers=[10,20,30,40,50];
let total=0;
numbers.forEach(function sum(currentElement)//MIND, HERE WE ARE NOT GIVING ANY ARGUMENT OF FUNCTION LIKE CALLBACK BUT DEFINING THE FUNCTION IN NUMBERS 
//	ITSELF.
	{
		total+=currentElement;
	});
console.log(total);
numbers.forEach(function double(currentElement)
	{
		currentElement*=2;
	});
console.log("Printing doubleValue of number "+numbers);//WHY IS NO CHANGE VISIBLE IN THIS ARRAY numbers
//MODIFYING OBJECT INSIDE forEach LOOP
let students=
	[
		{name:"Samar",rollNo:76},
		{name:"Astha",rollNo:75},
		{name:"Siddhant",rollNo:77},
		{name:"Anupam",rollNo:74},
	];
students.forEach(vidyarthi=>vidyarthi.rollNo+=1);
console.log(students);
//BREAK STATEMENT OR RETURN STATEMENT WON'T WORK ON THE FOREACH. SO YOU NEED TO HAVE EITHER some OR USE for...of
let arr2=[1,2,3,4,5];
console.log("Printing arr1");
arr2.some(num2=>{console.log(num2);return num2===3;});
//THIS ARG USE IN FOR EACH LOOP
console.log("");
console.log("Printing arr 3");
//UNDERSTAND FOR EACH AGAIN...
let arr3=[1,2,3,4,5];
const incrementByOne=
	{
		increaseByOne:1,
		increment(numberX)
		{
			numberX+=this.increment;
			console.log(numberX);
		}
	};
arr3.forEach(incrementByOne.increment,incrementByOne);
//SEE YOU HAVE THE PROBLEM THAT forEach MAKES CHANGES IN SAME ARRAY.
//SO YOU USE THE map()
//Syntax: arr.map(callback(currentElement,index,array),thisArg);
let studentss=
[
	{name:"Samar",rollNo:76},
	{name:"Astha",rollNo:77},
	{name:"Anupam",rollNo:75}
];
console.log("Students are being transfered. Already 50 are there. So rollnumbers assigned->RNo.+=50");
let studentTransfered=studentss.map
(
//	student=>student.rollNo+=50;//if i go something this then return statement is expected as javascript expects it.
	student=>student.rollNo+=50//in here the return statement is not expected.	
);
console.log(studentTransfered);//I am only changing the names in here, I gotta use the another statement ie -->studentName=>studentName.name<-- 
console.log(studentss);
//SO TO SAY THAT WE COMBINE THE filter() map() reduce() WOULD BE A WRONG STATEMENT. ACTUALLY, YOU CHAIN ONE TO OTHER. THAT IS PUSH THE OUTPUT OF ONE 
//INTO THE INPUT OF ANOTHER.SEE:
let num=[1,2,3,4,5];
const evenSquare=(
	num.filter(number=>number%2==0)
	.map(number=>number*number)
		 );
console.log("The even sq. numbers are-->"+evenSquare);


//NOW GOING OVER THE USAGE OF this ARG IN map()
const arrX=[1,2,3,4,5];
/*const arg=
	{
		factor:2,//Why not ; but , and why : not =
		multiply(num)
		{
			num*=this.factor;
		}
	};
*/
/*const multiplier={};THIS MEANS I AM ASSIGNING THE VARIABLE MULTIPLIER SOME OBJECT. U CAN CHECK BY DOING console.log(typeof(multiplier)) AND YOU WILL
 GET AND OBJECT*/
const obj={factor:10};//YEAH WHEN YOU PROVIDE SOME PROPERTIES TO THE OBJECT IN THIS CASE YOU USE key:value not key=value. ITS A PAIR NOT AN ASSIGNMENT
console.log(typeof(obj));
const obj2=
{
	key1:100,
	key2:function(numA)//HERE I HAVE INITIALISED A FUNCTION. EVEN THOIGH YOU COULD GO LIKE key(numA){} THIS ONE APPEARS MORE READABLE AS BEGINNER
	{
//		return numA*=key1; WHY IN HERE i AM GETTING KEY1 NOT DEFINED ERROR?
		return numA*=this.key1;
	}
};
const arrZ=[1,2,3,4,5];
const arrY=arrZ.map(obj2.key2,obj2);//Why I need to pass obj2 in here when I have used obj2.key2
console.log(arrY);
//SO LET US NOW DO THE filter and use it to 
//a)FILTER OUT THE FALSY VALUES.
let arrF=[10,undefined,"10",0,false,null];//SO APPARENTLY WE CANNOT PROVIDE NaN IN THE CASE OF arr
let filteredArr=arrF.filter(Boolean);
console.log(filteredArr);
//NOW USING filter() TO FILTER THE OBJECT
let n=
	[
		{name:"Samar",rollNo:76},
		{name:"Astha",rollNo:75},
		{name:"Siddhant",rollNo:77}
	];
let filtered=n.filter(users=>users.rollNo>75);
console.log(filtered);

//USING REDUCE. SO FIRSTLY USING REDUCE TO 
//A) CAPTURE THE LARGEST ELEMENT B) COUNT OF ELEMENT
let elements=[1,2,3,4,4,5,1,2,3,4,1,2,5,5,5];
let largestElement=elements.reduce((acc,num)=>acc>num?acc:num);
console.log(largestElement);
const numCount=function foo(num,count)
{
	count
};
let elementsA=["apple","banana","apple","banana","apple","mango","mango","mango"];//DEFINED THE ARRAY.
let count=elementsA.reduce((accumulator,word)=>//CALLED reduce METHOD ON IT. ARGUMENTS ARE accumulator AND index.DEFINED AN ARROW FUNCTION
	{
/*Why Nan if have +=*/		accumulator[word]=(accumulator[word] || 0)+1;//YOU HAVE THE WORD AND THEN YOU INCREASE THE COUNT 
//LOGIC: YOU OR IT IE ADD THE VALUE OF 0 TO IT i.e. INITIALISING IT AND THEN IT IT OCCURS AGAIN, YOU INCREASE THE VALUE BY 1.
		return accumulator;//NEED TO RETURN THE accumulator[word] AS WE ARE STORING THE VALUE IN SOME VARIABLE
	},{});
/*The callback function updates acc and returns it again.

Example for your array:
["apple", "banana", "apple", "orange", "banana", "apple"]

1st iteration:

acc = {}

word = "apple"

(acc["apple"] || 0) + 1 → 0 + 1 = 1

acc = { apple: 1 }

2nd iteration:

acc = { apple: 1 }

word = "banana"

(acc["banana"] || 0) + 1 → 0 + 1 = 1

acc = { apple: 1, banana: 1 }

3rd iteration:

acc = { apple: 1, banana: 1 }

word = "apple"

(acc["apple"] || 0) + 1 → 1 + 1 = 2

acc = { apple: 2, banana: 1 }

…and so on.*/
console.log(count);

