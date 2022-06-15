// https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react
/*
import { testaA_pinolo } from '../../variabili'
console.log(testaA_pinolo);
*/

const someCommonValues = ['common', 'values'];

export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};

export const justAnAlert = () => {
   alert('hello');
};


export const test = () => {
  var testappinolo = "TEST"
  return testappinolo
};

export let testaA_pinolo = "TEST"


  var lingue = "ita" 
