const clearBtn = document.querySelector("#clear");
const currentStatus = document.querySelector("#input");
const evaluate = document.querySelector("#evaluate");
let operatorInstance = 0;


clearBtn.addEventListener('click',clearInput);
evaluate.addEventListener('click',evaluateNumbers);


function appendNumber(event){
const target = event.target.textContent;
currentStatus.value += target;
    checkOperator();
}

TODO: //* This part might need refactoring
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

            console.log(num1);
            console.log(num2);
            add(Number(num1),Number(num2));
    
        }else if(firstOperator === "-"){
            const splitValue = currentStatus.value.split("-");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
            subtract(Number(num1),Number(num2));
    
        }else if(firstOperator === "*"){
            const splitValue = currentStatus.value.split("*");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
            multiply(Number(num1),Number(num2));
    
        }else{
            const splitValue = currentStatus.value.split("/");
            const num1 = splitValue[0];
            const num2 = splitValue[1];
    
            if(Number(num2) === 0){
                displayEvaluation("Cannot divide");
                return;
    
            }
            divide(Number(num1),Number(num2));
        }

    }
    operatorInstance = 0;
    

    

}

function clearInput(){
    currentStatus.value = "";
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
        add(Number(num1),Number(num2));

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
    currentValue = (num1 + num2).toFixed();
    displayEvaluation(currentValue);
}

function divide(num1,num2){
    currentValue = (num1 / num2).toFixed()
    displayEvaluation(currentValue);
}

function multiply(num1,num2){
    currentValue = (num1 * num2).toFixed()
    displayEvaluation(currentValue);
}

function subtract(num1,num2){
    currentValue = (num1 - num2).toFixed()
    displayEvaluation(currentValue);

}

function displayEvaluation(result){
    const convert = String(result);

    if(convert !== "NaN"){
        currentStatus.value = result;
    
    }
}