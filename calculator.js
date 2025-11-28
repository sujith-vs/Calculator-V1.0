let operator;
let firstVal ="";
let result; 
let secondVal="";

function display(num){
    document.getElementById("inpText").value += num;
}

function onDot(){
    let inp = document.getElementById("inpText").value;
    if (!inp.includes(".")){
        document.getElementById("inpText").value += ".";
    }
}

function clearAll(){
    document.getElementById("inpText").value = "";
    operator = "";
    firstVal = "";
    secondVal = "";
}

function add(){
    operator = "+";
    if (firstVal == ""){
            //logic for continious addition. check for the firstVal if it is empty then.
            //its first time or after hitting the equal button or clear button.

        firstVal = Number(document.getElementById("inpText").value);
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";
        
    }
    else{
            // if firstVal is not empty it means there is a continious addition.
            // firstVal is changed by +=
            //secondVal is set null to avoid the problem in hitting equal.

        document.getElementById("upperHead").innerHTML = String("");
        secondVal = Number(document.getElementById("inpText").value);
        firstVal = firstVal+secondVal;
        secondVal = "";
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";


        // console.log("non-empty");
        // firstVal = Number(document.getElementById("inpText").value);
        // operator = "+";
        // document.getElementById("lowerHead").innerHTML = String(firstVal);
        // document.getElementById("inpText").value = " ";

    }
        
}
function sub(){
    operator = "-";
    if (firstVal == ""){
        firstVal = Number(document.getElementById("inpText").value);
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";


    }
    else{
        document.getElementById("upperHead").innerHTML = String("");
        secondVal = Number(document.getElementById("inpText").value);
        firstVal = firstVal-secondVal;
        secondVal = "";
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";
    }
    // firstVal = Number(document.getElementById("inpText").value);
    // operator = "-";
    // document.getElementById("lowerHead").innerHTML = String(firstVal);
    // document.getElementById("inpText").value = " ";
    
}

function mul(){
     operator = "*";
    if (firstVal == ""){
        firstVal = Number(document.getElementById("inpText").value);
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";


    }
    else{
        document.getElementById("upperHead").innerHTML = String("");
        secondVal = Number(document.getElementById("inpText").value);
        firstVal = firstVal*secondVal;
        secondVal = "";
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";
    }

    // firstVal = Number(document.getElementById("inpText").value);
    // operator = "*";
    // document.getElementById("lowerHead").innerHTML = String(firstVal);
    // document.getElementById("inpText").value = " ";
    
}

function div(){
     operator = "/";
    if (firstVal == ""){
        firstVal = Number(document.getElementById("inpText").value);
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";


    }
    else{
        document.getElementById("upperHead").innerHTML = String("");
        secondVal = Number(document.getElementById("inpText").value);
        firstVal = firstVal/secondVal;
        secondVal = "";
        document.getElementById("lowerHead").innerHTML = String(firstVal);
        document.getElementById("inpText").value = "";
    }


    // firstVal = Number(document.getElementById("inpText").value);
    // operator = "/";
    // document.getElementById("lowerHead").innerHTML = String(firstVal);
    // document.getElementById("inpText").value = " ";
    
}

function equal(){
    secondVal =Number(document.getElementById("inpText").value);
    document.getElementById("lowerHead").innerHTML = String(secondVal);
    document.getElementById("upperHead").innerHTML = String(firstVal);

    switch(operator){
        case '+' :
            result = String(firstVal+secondVal);
            document.getElementById("inpText").value = result;
            firstVal="";
            break;
        case "-":
            result = firstVal-secondVal;
            document.getElementById("inpText").value = result;
            break;
        case "*":
            result = firstVal*secondVal;
            document.getElementById("inpText").value = result;
            break;
        case "/":
            result = firstVal/secondVal;
            document.getElementById("inpText").value = result;
            break;
        }
}
