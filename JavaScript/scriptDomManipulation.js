//OK TOUGH GUY, I AM MAKING THIS FOR YA. JUST READ IT AND YOU WILL BE
//FAMILIAR WITH Dom MANIPULATION
//DOM: TREE LIKE STRUCTURE REPRESENTING YOUR WEBPAGE IN MEMORY. SO EACH
//AND EVERY Html TAG BECOMES AN OBJECT AND YOU CAN MANIPULATE THEM.
//OH YEAH btw,  DOM STANDS FOR DOCUMENT OBJECT MODEL.
//SO, THE D IN DOM IS DOCUMENT WHICH IS OUR HTML/XML PAGE.
//OBJECTS ARE THE TAGS IN HTML CONVERTED TO BE USED AS OBJECTS IN js
//MODEL IS BASICALLY, THE REPRESENTATION OF THE Html PAGE IN THE TREE 
//FORM EACH ELEMENT/ATTRIBUTE BECOMES A NODE.
//<p>Hello</p>
//Document-->html-->body-->p-->"Hello"
//CORE DOM PROPERTIES:
//innerText:GETS/SETS VISIBLE TEXT INSIDE AN ELEMENT.
//textContent:GETS/SETS THE ALL TEXT.
//innerHTML: GETS/SETS html CONTENT INCLUDING THE TAG.
/*const KenobiToAlien= document.getElementById("demo2");
const AlienToKenobi= document.getElementById("demo1");
const randomMessage= document.getElementById("demo");
console.log(AlienToKenobi.innerText);
console.log(KenobiToAlien.textContent);
console.log(AlienToKenobi.innerText);
console.log(KenobiToAlien.textContent);*/
// Safely get the elements
const demo = document.getElementById("demo");
console.log(demo.innerText);
console.log(demo.textContent);
//NOW YOU CAN ALSO USE THE DOM MANIPULATION TO 
//A) GET ANY ATTRIBUTE VALUE
const logo = document.getElementById("logo");

logo.setAttribute("src", "logo2.png"); // Change image
logo.setAttribute("alt", "New Logo");  // Change alt text

console.log(logo.getAttribute("alt")); // "New Logo"
//OTHER PROPS: getElementById, getElementByClassName,getElementByTagName
//
