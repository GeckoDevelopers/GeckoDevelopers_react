// https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react
/*
import { testaA_pinolo } from '../../variabili'
console.log(testaA_pinolo);
export let testaA_pinolo = "TEST"
*/


import { getIta_text } from "./lingue/italiano";
import { getEngb_text } from "./lingue/inglese";

var lingua = getIta_text 

export function gino(value){
	switch (value) {
		case "ita":
				lingua = getIta_text
				break;
		case "engb":
				lingua = getEngb_text
				break;
		default:
				break;
	}
	return lingua;
}

console.log();

/* export const selecto = <select id="lingue"><option value="ita">Italiano</option><option value="engb">English</option></select>
console.log(selecto);

var selecto = document.getElementById('lingue');
var valore = selecto.options[select.selectedIndex].value; */




var language = "ita" 

export function getLanguage() {
	return language;
};

export function setLanguage(newLanguage) {
	language = newLanguage;
};
