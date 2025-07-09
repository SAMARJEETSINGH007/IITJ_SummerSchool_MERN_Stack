console.log("Basic explaination of arrayDestructuring.");
const arr=['A','B','C','D','E'];
//THIS IS NORMAL LIFE
const first=arr[0];
console.log(first);
const second=arr[1];
console.log(second);

//THIS IS MENTOS LIFE
const [a,b,c]=arr;
const [x,,y]=arr
console.log(a,b,c);
console.log(x,y);


//YOU CAN ALSO DEFINE THE default VALUES TO THE CONCERNED ELEMENTS
console.log("Assigning the default values.");
const arrA=[5];
const [ab,ba=10]=arrA;
console.log(ab);
console.log(ba);

//THEY CAN ALSO BE USED TO SWAP ELEMENTS
console.log("Swapping elements");
//mind it you can't use constatnt in here . 
let num1=1;
let num2=2;
console.log("before");
console.log(num1);
console.log(num2);
[num1,num2]=[num2,num1];
console.log("after");
console.log(num1);
console.log(num2);

//WE CAN ALSO THE rest OF THE ELEMENTS OF THE ARRAY.
const arrN=[1,2,3,4,4,5,5,5,2,12,121,21,1,2,3,4,5];
const [firstN,secondN,...restN]=arrN;
console.log(firstN);
console.log(secondN);
console.log(restN);

//YOU CAN ALSO DESTRUCTURE NESTED ARRAYS TOO. JUST GO FO THE NESTED 
//DESTRUCTURING TOO.
const arrM=[1,2,[11,22,33,44],3,[111,222,333,444],4];
const [aM,bM,[aa,bb,cc,dd],cM,[aaa,bbb,ccc,ddd],d]=arrM;
console.log(aa);
console.log(bb);

//SO GANG, YOU CAN ALSO USE ARRAY DESTRUCTURING TO FW FUNCTION PARAMETERS
function foo([a,b])
{
	return a+b;
}
console.log(foo[1,3]);

console.log("Okay so big boy lets talk about Object Destructuring...");
//BASIC SYNTAX
console.log("Simple destructuring of objects");
const user=
	{
		name:'Samar',
		age:21
	};
const {naam,umar}=user;
console.log(naam);
console.log(umar);
const {name,age}=user;
console.log(name);
console.log(age);
//SO YOU BASICALLY CAN'T GO USING OTHER NAMES BECAUSE JAVASCRIPT LOOKS 
//FOR THE VALUE NAMES TO MATCH YOU KNOW! STILL YOU CAN RENAME THEM TO 
//CONTAIN ALIAS

const student=
	{
		rollNo:76,
		PRN:2214110193
	};
const {rollNo:rnum,PRN:pnum}=student;
console.log(rnum);
console.log(pnum);
//AGAIN YOU CAN ALSO ASSIGN THE DEFAULT VALUES TO THE 	MISSING PROPERTIES
//NESTED OBJECT CAN ALSO BE DESTRUCTURED.
const resident=
	{
		naam:'Samar',
		address:
		{
			place:'Jammu',
			pincode:18001
		},
		country:'india'
	};
const
{
	address:{place,pincode}
}=resident;
console.log(place+" "+pincode);