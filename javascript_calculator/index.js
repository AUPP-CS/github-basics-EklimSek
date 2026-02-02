let string = "";
let display = document.getElementById("displayResult");

function appendToDisplay(element){
    string += element;
    display.textContent = string;
    
}

function displayClear(){
    string = "";
    display.textContent = string;
}

function displayResult(){
    try{
        string = parseFloat(eval(string)).toFixed(2)
        display.textContent = string;
    }
    catch(error){
        display.textContent = "Error"
    }


    
    
}