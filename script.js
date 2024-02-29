// Get the btn element
const element = document.querySelector("#btn");
const heading = document.querySelector("#heading")
//Listen to click event
element.addEventListener("click", addExpense, false) //first write which event and the counterInc is the function
 
 // init value of expense at 0
 let totalExp = 0;
// set the heading element to total expense
heading.textContent = totalExp;

//onButtonClick add inputAmount to addExpense
function addExpense(){
    //read value to input amount
    const amount = document.querySelector("#inputAmount");
    const textAmount = amount.value;
    

    // convert string to a number
    const expense =  parseInt(textAmount,10);
    
    // add value to total expense
    totalExp = totalExp + expense;
    // set the heading element to total expense
    heading.textContent = totalExp;
}
