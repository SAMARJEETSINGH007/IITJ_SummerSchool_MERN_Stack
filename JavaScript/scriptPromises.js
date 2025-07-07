//HERE WE DECLARE BASIC PROMISE SYNTAX
console.log("test");
console.log('test');
let p= new Promise
(
	(resolve,reject)=>
	{
		let num=1+3;
		if(num==4)
		{
			resolve('Success')
		}
		else
		{
			reject('Failed')
		}
	}
);
p.then
(
	(message)=>{console.log('num=4'+message);}
)
	.catch((message)=>{console.log('num=5'+message);})
//SO WHY TO USE THIS promise AGAINST callback?
//BECAUSE CALLBACK LEADS TO VERY MESSY AND HARD TO DEBUG CODE.
//SEE THE EXAMPLE OF callbackhell...
//BUT RIGHT NOW LETS SEE HOW TO USE promises.
const promise=new Promise((resolve,reject)=>{
	resolve("we did it boy");
})
promise.then((data)=>{
	console.log(data)
})
const promise2=new Promise
(
	(resolve,reject)=>
	{
		reject("we didn't do it boys :(");
	}
)
promise2.then
(
	(data)=>
	{
		console.log(data);
	}
).catch
(
	err=>
	{
		console.log(err);
	}
);
const promise3=new Promise
(
	(resolve,reject)=>
	{
		resolve({troop:"Skeleton Dragon"},
			{type:"Fying"},
			{favTarget:"defenses"});
	}
);
promise3.then
(
	(roop)=>
	{
//		console.log("My fav troop is "+data.troop);
//		YOU CAN DO THE ABOVE OR THE DOWN ONE. I.E. COMBINING
//		MULTIPLE then CLAUESES...
		return roop;
	}

).then
(
	(troopDetails)=>
	{
		console.log(troopDetails);//WHY IS ONLY skdragon GETTING
//		PRINTED?		
	}
)
.catch
(
	(err)=>
	{
		console.log(":("+err);
	}
);
const promise4=new Promise
(
	(resolve,reject)=>
	{
		setTimeout
		(
			()=>
			{
				resolve('This is my server data');
			},2000
		)
	}
);
promise4.then
(
	(res)=>
	{
		console.log(res);
	}
);
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then
(
	(data)=>
	{
//		console.log(data);
		return data.json()
	}
).then
(
	(jsonedData)=>
	{
		console.log(err);
	}
).catch
(
	(err)=>
	{
		console.log("Oh no!!!Some shit went wrong!!");
	}
)
.finally
(
	()=>
	{
		console.log("Everything okay!!");
	}
)
//SO ANOTHER COOL WAY TO GET THINGS DONE IS BY USING THE async FUNCTION.
async function getTodos()
{
		const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
		const data=await response.json();
		console.log(1);
		console.log(data);
		console.log(2);	
}
getTodos();
//WHAT HAPPENS WHEN YOU WANNA RETURN A JSON DATA FORMAT?
async function getTodosA()
{
	const response=await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>
		{
			return res.json();
		})
	console.log(response);
}
getTodosA();
//SO TO RATHER THAN SEND THE RESPONSE VIA .then() AND CONVERT TO JSON
//WEE CAN GO SOMETHING LIKE THIS:
async function getTodosB()
{
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const jsonData= await response.json();
	console.log(11);
	console.log("This is a response data! "+response);
	console.log("This is a response data! "+jsonData);
	console.log(22);
}
//NOW STILL YOU CAN GO FOR try AND catch FOR BETTER HANDLING.
//OH! AND BTW, YOU CAN ALSO DO ALL THIS WITHOUT DEFINING THE async function functionName()
async function fooN()
{
	try
	{
		const response=await fetch('https://jsonplaceho');
		const jsonData= await response.json();
		console.log(1);
		console.log("Here we are giving ya the data "+jsonData);
		console.log(2);
	}catch(err)
	{
		console.log("Sorry boys there is an error :(");
		//const jsonDataX=err.json();
		console.log(err);
		//console.log(jsonDataX);
	}
}
fooN();






















