console.log("Hello");
console.log(this);
/*function talk()
{
	return this;
}
const me=
	{
		name:"Samar",
		talk:talk//Short hand notation would be talk
	}
console.log(me.talk());*/
function talk()
{
	return `Hello I am ${this.name} talking`;
}
talk();
const me=
	{
		name:'Samar',
		talk
	}
const you=
	{
		name:'Pika',
		talk
	}
console.log(me.talk());
//IN HERE IF YOU DO me.talk YOU WILL GET THE WHOLE FUNCTION
console.log(you.talk());
//WHAT HAPPENS WHEN YOU DONT HAVE THE OBJECT TO APPEND THE 
//FUNCTION TO?WE USE THE bind FUNCTION
function talk2()
{
	return `I am ${this.name} talking`;
};
const me2 =
	{
		name:'Samar2'
	}//A FUNCTION WHICH IS NOT ACCESSIBLE TO US.
const meTalk=talk.bind(me2)//SO THE OBJECT me IS BINDED TO THE 
//FUNCTION talk. AND I STORE THAT IN THE VARIABLE meTalk WHICH
//MAKES THE meTalk A FUNCTION AS WELL. SO CALL IT.
meTalk();
console.log(meTalk());
//ALSO TO CALL IT WITHOUT STORING IT INSIDE A VARIABLE YOU CAN
//GO LIKE:
console.log(talk.bind(me2)());
//OH YEAH! YOU CAN ALSO USE call
console.log(talk2.call(me));



//NOW LETS TALK ABOUT IF THE TALK TOOK A PARAMETER...
function foo(prefrence,isFilled)
{
	if(prefrence==='rooahfza')
	{
		if(isFilled)
		{
			return `Okay big guy here is your ${this.name}`;
		}
		else
		{
			return `Sorry blud we are outta ${this.name}`;
		}
	}
	else if(prefrence==='Water')
	{
		if(isFilled)
		{
			return `Okay here you go basic guy, here is your ${this.name}`;
		}
		else
		{
			return `Sorry tough guy, we don't have ${this.name}`;
		}
	}
	else
	{
		return `Sorry big guy, we only serve water or rooahfza :`;
	}
};
const customer=
	{
		name:'fav drink'
	}
console.log(foo.call(customer, 'Water',true));
//YOU CAN ALSO USE foo.apply() BUT IN HERE YOU GO FOR ARGUMENTS 
//AS AN ARRAY
function fooB(n)
{
	this.name=n
	console.log(this)
}
const newPerson=new fooB('Sina')
function constructor(n1,n2)
{
	this.name=n1;
	this.age=n2;
	this.sayHello=function()
	{
		console.log(`My name is ${this.name} and age is ${this.age}`);
	};
	this.talk=function()
	{
		console.log(this);
	};
	setTimeout(function()
		{
			console.log(this);//this returns the 
//			window object. Why? because call back 
//			functions are run in a different context. 
		},3000);
//	SO WHAT WE CAN DO IS WE CAN bind THE FUNCTIONS AND AS 
//	SUCH WE CAN HAVE THE this REFER TO THE OBJECT Samar.
	setTimeout(function()
		{
			console.log(this);
		}.bind(this),500);
//WHAT HAPPENS: WE GIVE THE ARGUMENT OF function(){} TO THE 
//setTimeout() AND THAT IS BEING DEFINED IN A DIFFERENT CONTEXT.
//OK. SO THE MOMENT WE EXIT THE {} OF THE function() WE ARE BACK
//INTO THE OBJECT AND WE SAY OKAY... WE ARE GONNA BIND YA BIG GUY
//TO THE this OBJECT... ;-)
//YOU CAN ALSO USE THE ARROW FUNCTION => TO GET THE SAME RESULTS
//THAN TO USE BIND!
	setTimeout(()=>
		{
			console.log(this);
		},100)
}
const Samar=new constructor('asfsgs',21);
Samar.sayHello();
Samar.talk();



/*function construct(n1,n2)
{
	this.naam=n1;
	this.age=n2;
	this.myFunction=function()
	{
		console.log(`Yo wassup? I have ${this.naam},${this.age}`);
//WHY WE NEED TO USE this.age? IT IS BECAUSE WE HAVE age AND naam AS THE PROPERTIES OF OBJECTS AND NOT OF THE GLOBAL SCOPE. SO TO REFRENCE 
//THEM FROM THE OBJECT, WE NEED THE this.
	}
}
const guy=new construct("Samar",21);
guy.myFunction();*/
































