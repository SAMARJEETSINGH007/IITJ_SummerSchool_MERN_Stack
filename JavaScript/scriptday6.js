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


























