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

//logo.setAttribute("src", "logo2.png"); // Change image
//logo.setAttribute("alt", "New Logo");  // Change alt text

//console.log(logo.getAttribute("alt")); // "New Logo"
//OTHER PROPS: getElementById, getElementByClassName,getElementByTagName
//queryselector,querySelectorAll... querySelector: USED BY SELECTING THE
//CSS SELECTOR
//SO OKAY BIG BOY, LET'S BUILD A DOM SELECTOR PLAYGROUND.
//GO TO indexDomSelectionPlaygorund.html and srcDmoManipulation.js
//NOW BACK AT IT AGAIN... YOU HAVE THE DIFFERENCE IN HTML COLLECTION AND ARRAYS.
const test=document.getElementsByClassName("class");
console.log(test.constructor.name);
//IN HTML COLLECTION YOU SEE THE LIVE CHANGES BUT IN THE ARRAYS THOUGH YOU NEED NOT HAVE THE arrays.from() METHOD, THEY ARE NOT LIVE IN NATURE. YOU NEED
//TO RELOAD THE PAGE TO SEE THEM...

























