//OK, SO WE HAVE ADVANCED DOM MANIPULATION. 
//FIRSTLY, WHEN TO USE CSS STYLE CLASSES: WHEN YOU WANT THAT YOU MUST 
//HAVE THE DYNAMICAL CHANGES. YOU WRITE THE STYLING IN CSS AND TOGGLE IN
//JS.
//A> classList PROPERTY. NOT AN OBJECT.
//const element =document.getElementById("element");
//element.classList.add("highlight");
const button =document.getElementById("themeToggle");
const container=document.getElementById("container");
//METHOD 1
/*button.addEventListener("click",()=>
	{
		container.classList.toggle("highlight");
	});*/
//METHOD 2
/*function hover(element,enter,leave)
{
	element.addEventListener('mouseenter',enter);
	element.addEventListener('mouseleave',leave);
}

hover(document.getElementById('themeToggle'),
	e=>
	{
		e.target.classList.add("highlight");
	},
	e=>
	{
		e.target.classList.remove("highlight");
	});*/
//METHOD 3
function fooHover(element,className)
{
	element.addEventListener('mouseenter',e=>element.classList.add(className))
	element.addEventListener('mouseleave',e=>element.classList.remove(className))
}
fooHover(document.getElementById('themeToggle'),"highlight");
