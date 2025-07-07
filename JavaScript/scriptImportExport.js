export function fun1()
{
	return "Hello There!";
}
export function fun2()
{
	return "General kenobi";
}
export const starWarsMovieCount=5;
//YOU CAN ALSO ADD THE exports manually using as from the exporting party
export
{fun1 as OBiVan,fun2 as Grevious}

//FOR DEFAULT INPUT YOU DONT NEED ANY OF THE {} in import ___ from "./soandsofile.js"
//YOU CAN DIRECTLY GO LIKE import fun3 from "./scriptImportExport.js"
export default fun3()
{
	return "No, I am your father!";
}