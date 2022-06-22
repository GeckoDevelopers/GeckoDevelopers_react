// https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react
/*
import { testaA_pinolo } from '../../variabili'
console.log(testaA_pinolo);
export let testaA_pinolo = "TEST"
*/


import React, { useState } from "react";
import { getIta_text } from "./lingue/italiano";
import { getEngb_text } from "./lingue/inglese";


var lingua = getIta_text 

// export function lingue(valore){
//     var success = "successo"
// 	switch (valore) {
// 		case "ita":
// 				// lingua = getIta_text
//                 console.log("lingua italiana");
// 				break;
// 		case "engb":
// 				// lingua = getEngb_text
//                 console.log("lingua inglese");
// 				break;
// 		default:
// 				break;
// 	}
// 	return lingua, success;
// }

// console.log();

/* export const selecto = <select id="lingue"><option value="ita">Italiano</option><option value="engb">English</option></select>
console.log(selecto);

var selecto = document.getElementById('lingue');
var valore = selecto.options[select.selectedIndex].value; */



// const [language, SetLanguage] = useState("ita");
var language
export function getLanguage() {
	return language;
};

export function setLanguage(newLanguage) {
	language = newLanguage;
    //SetLanguage(newLanguage);
};
