let name = 3;
console.log(name);
let car=
	{
		brand:"Tesla",
		color:"Red",
		speed:200
	}
console.log(car.brand);
console.log(car.color);
console.log(car.speed);
car.model="WagonR";
car.speed=250;
console.log(car.model);

let arr=
	[
		{name:"Samar", age:21, grade:"B+ve"},
		{name:"Astha", age:21, grade:"A"}
	]
console.log(arr[0].name);
console.log(arr[1].age);
/*JS arrays*/
let fruits=
	["Apple", "Banana", "Mango"]
console.log(fruits[0]);

let veggies=
	["Aaloo","Gobhi","Matar"]
veggies.push("Shimlamirch");
console.log(veggies);
veggies.pop("Shimlamirch");
console.log(veggies);
veggies.unshift("pekka");
console.log(veggies);
let age=10;
if(age<=18)
{
	console.log("You are not an adult!");
}
else
{
	console.log("You are an adult!");
}
let day=3;
switch(day)
{
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	case 7:
		console.log("Sunday");
		break;
	default:
		console.log("Invalid day!");
}
for(let i=1;i<=5;i++)
{
	console.log(`Balooon ${i} is flying!`);
}
console.log(``);
let i=10;
console.log(`The rocket launches in t-${i} seconds`);
while(i>0)
{
	console.log(`t-${i} seconds...`);
	i--;
}
console.log(`Ajay shukla ka rocket gayaa!!!`);
/*for each loop*/
let animals=["Kutta","Billi","Ghoda"];
animals.forEach
(
	animal=>
	{
		console.log(`${animal} says Hello!`);
	}
);
let chocolates=[1,2,3,4];
let doubleChocolates=chocolates.map(choco=>choco*2);
console.log(doubleChocolates);

let children=[2,4,6];
let doubleTheChildren=children.map(child=>child/2);
console.log(doubleTheChildren);

let watches=["TimeXkiGhadi","Titan","G-Shock"];
let timexKiGhadi=watches.filter(ghadi=>ghadi.includes("TimeXkiGhadi"));
console.log(timexKiGhadi);

let newCustomersCountByMonth=[2,4,3,6,10];
let totalCustomerFromStart=newCustomersCountByMonth.reduce((total,customer)=>total+customer,0);
console.log(`💰 total customers right now are=> ${totalCustomerFromStart}`);



























