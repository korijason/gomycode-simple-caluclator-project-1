const display = document.getElementById("display");

function appendDisplay(input){
    display.value += input;
}


function calculate(){

try{
    display.value = eval(display.value);
}

catch{
    display.value = "Error"
}
}
function clearDisplay(){
   display.value = ""
}

function deleteCharacter(){
    const display = document.getElementById('display');
           
            display.value = display.value.slice(0, -1);
}
