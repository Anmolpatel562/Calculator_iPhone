const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
const resetKey = document.querySelector(".ac");
const deleteKey = document.querySelector(".delete");
const answerKey = document.querySelector(".answerKey")
const minus = document.querySelector(".signMin");

let lastKeyIsOperator = false;
let decimalAdded = false;

deleteKey.addEventListener("click",()=>{
    let initialValue = display.value;
    let updatedValue = initialValue.substring(0,initialValue.length-1);
    display.value = updatedValue;
    return;
})

resetKey.addEventListener("click",()=>{
     display.value = "";
})

const keyArray = Array.from(keys);

keyArray.forEach((key)=>{  
     key.addEventListener("click",(event)=>{
          const value =  event.target.innerText;
          if(value === "." && decimalAdded){
             return;
          }
          if("+-*/".includes(value)){  
             if(lastKeyIsOperator){
               let initialValue = display.value;
               let updatedValue = initialValue.substring(0,initialValue.length-1) + value;
               display.value = updatedValue;
               return;
             }  
             lastKeyIsOperator = true;
             decimalAdded = false;
          }
          else{
             lastKeyIsOperator = false;  
             if(value === "."){
               decimalAdded = true;
             }
          }
          display.value += value;
     })
    
})


answerKey.addEventListener("click",()=>{
   if(lastKeyIsOperator){
     let initialValue = display.value;
     let updatedValue = initialValue.substring(0,initialValue.length-1);
     display.value = updatedValue;
     lastKeyIsOperator = false;
   }
   let value = display.value;
   let result = eval(value);
   display.value = result;
})

minus.addEventListener("click",()=>{
     console.log("clicked")
     let iniVal = display.value;
     let res = eval(iniVal);
     display.value = (res*-1);
})