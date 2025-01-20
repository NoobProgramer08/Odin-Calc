const clearBtn = document.querySelector("#clear");
const evaluate = document.querySelector("#evaluate");
const currentStatus = document.querySelector("#input");
const decimalButton = document.querySelector("#decimal");
const backSpace = document.querySelector("#delete");
let operatorInstance = 0, isFloat = false;



clearBtn.addEventListener('click',clearInput);
evaluate.addEventListener('click',evaluateNumbers);
decimalButton.addEventListener('click',convertToFloat);
backSpace.addEventListener('click',deleteLast);

document.addEventListener('DOMContentLoaded', ()=> { currentStatus.value = "" });


function appendNumber(event){
    const target = event.target.textContent;
    const status = currentStatus.value += target;
   

    if(checkDecimalPoint()){
        const sub = status.split("");
        sub.splice(-1,1);
        currentStatus.value = sub.join("");
        
    }


    checkOperator();
}

function convertToFloat(){
    isFloat = true;

}

function checkDecimalPoint(){
    const getCurrent = currentStatus.value;
    const splut = getCurrent.split("");
    let decimalCount = 0;
    splut.forEach((values) => {
        if(values === "."){
            decimalCount++;
    
        }
    });
    return (decimalCount >= 2) ? true : false;

}


function deleteLast(){
    const current = currentStatus.value.split("");
    current.splice(-1,1);
    currentStatus.value = current.join("");

}

TODO: //* This part might need refactoring
     //* Needs Reviewing
 
function checkOperator(){
    const currentValues = currentStatus.value.split("");
    let firstOperator = "";
    currentValues.forEach((element) => {
    if(element === "+" || element === "-" || element === "*" || element === "/"){
        operatorInstance++;
        if(operatorInstance == 1){
            firstOperator = element;
        
        }
    }
});


    if(operatorInstance >= 2){
        if(firstOperator === "+"){
            const splitValue = currentStatus.value.split("+");
            const num1 = splitValue[0];
            const num2 = splitValue[1];

            (isFloat) ?  add(parseFloat(num1),parseFloat(num2)) : add(Number(num1),Number(num2));
    
        }else if(firstOperator === "-"){
            const splitValue = currentStatus.value.split("-");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
            (isFloat) ?  subtract(parseFloat(num1),parseFloat(num2)) : subtract(Number(num1),Number(num2));
    
        }else if(firstOperator === "*"){
            const splitValue = currentStatus.value.split("*");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
            (isFloat) ?  multiply(parseFloat(num1),parseFloat(num2)) : multiply(Number(num1),Number(num2));
    
        }else{
            const splitValue = currentStatus.value.split("/");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
    
            if(Number(num2) === 0){
                displayEvaluation("Cannot divide");
                return;
    
            }
            (isFloat) ?  divide(parseFloat(num1),parseFloat(num2)) : divide(Number(num1),Number(num2));
        }

    }
    operatorInstance = 0;
    

    

}

function clearInput(){
    currentStatus.value = "";
    isFloat = false;
}

function evaluateNumbers(){
    const numbers = currentStatus.value;
    const findOperation = numbers.split("");
    let operation = "", instance = 0;
    
    findOperation.forEach((element) => { 
        if(element === "+" || element === "-" || element === "*" || element === "/"){
            operation = element;
            instance++;
            return;
        
        }
    });
    if(instance >= 2){
        instance = 0;
        return;
    }

    if(operation === "+"){
        const split = numbers.split("+");
        const num1 = split[0];
        const num2 = split[1];
        console.log(isFloat);
        console.log(parseFloat(num1));
        console.log(parseFloat(num2));
        (isFloat) ?  add(parseFloat(num1),parseFloat(num2)) : add(Number(num1),Number(num2));

    }else if(operation === "-"){
        const split = numbers.split("-");
        const num1 = split[0];
        const num2 = split[1];
        subtract(Number(num1),Number(num2));

    }else if(operation === "*"){
        const split = numbers.split("*");
        const num1 = split[0];
        const num2 = split[1];
        multiply(Number(num1),Number(num2));

    }else{
        const split = numbers.split("/");
        const num1 = split[0];
        const num2 = split[1];

        if(Number(num2) === 0){
            displayEvaluation("Cannot divide");
            return;

        }
        divide(Number(num1),Number(num2));
    }

}

function add(num1,num2){
    if(!isFloat){
        currentValue = (num1 + num2).toFixed();
    }

    currentValue = num1 + num2;
    displayEvaluation(currentValue);
}

function divide(num1,num2){
    if(!isFloat){
        currentValue = (num1 / num2).toFixed()
    }

    currentValue = num1 / num2;
    displayEvaluation(currentValue);
}

function multiply(num1,num2){
    if(!isFloat){
        currentValue = (num1 * num2).toFixed()
    }

    currentValue = num1 * num2;
    displayEvaluation(currentValue);
}

function subtract(num1,num2){
    if(!isFloat){
        currentValue = (num1 - num2).toFixed()
    }
    currentValue = num1 - num2;
    
    displayEvaluation(currentValue);

}

function displayEvaluation(result){
    const convert = String(result);

    if(convert !== "NaN"){
        currentStatus.value = result;
    
    }
    isFloat = false;
}