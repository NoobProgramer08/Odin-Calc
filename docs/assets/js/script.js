const clearBtn = document.querySelector("#clear");
const currentStatus = document.querySelector("#input");
const evaluate = document.querySelector("#evaluate");

clearBtn.addEventListener('click',clearInput);
evaluate.addEventListener('click',evaluateNumbers);


function appendNumber(event){
const target = event.target.textContent;
currentStatus.value += target;
    
}

function clearInput(){
    currentStatus.value = "";
}

function evaluateNumbers(){
    const numbers = currentStatus.value;
    const arrayed = numbers.split("");
    let operation = "";
    arrayed.forEach(element => {
            if(element === "+" || element == "-" || element == "*" || element == "÷"){
                operation = element;
                return;
                
            }
    });

    if(operation === "+"){
        const separated = numbers.split("+");
        const num1 = separated[0];
        const num2 = separated[1];
        add(num1,num2);

    }else if(operation === "-"){
        const separated = numbers.split("-");
        const num1 = separated[0];
        const num2 = separated[1];
        subtract(num1,num2);

    }else if(operation === "*"){
        const separated = numbers.split("*");
        const num1 = separated[0];
        const num2 = separated[1];
        multiply(num1,num2);


    }else{
        const separated = numbers.split("÷");
        const num1 = separated[0];
        const num2 = separated[1];
        divide(num1,num2);
    }
}

function add(num1,num2){
    displayEvaluation(Number(num1) + Number(num2));
    

}
function divide(num1,num2){
    displayEvaluation(Number(num1) - Number(num2));

}
function multiply(num1,num2){
    displayEvaluation(Number(num1) * Number(num2));

}
function subtract(num1,num2){
    displayEvaluation(Number(num1) - Number(num2));

}

function displayEvaluation(result){
    currentStatus.value = result;

}