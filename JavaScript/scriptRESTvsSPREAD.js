function sum(a,b)
{
	return a+b;
}
console.log(sum(10,20));
let arr=[10,15];
console.log(sum(arr));
console.log(sum(...arr));
let arr2=[10,20,1];
console.log(sum(...arr2));
function sumREST(...args)
{
	let summation=0;
	for(const arg of args)
	{
		summation+=arg;
	}
	return summation;
}
console.log(sumREST(1,2,3,3,4,6));
console.log(sumREST(arr2));//HERE IT WONT WORK AS, NEED TO SPREAD THE ELEMENTS IN IT...
console.log(sumREST(...arr2));
