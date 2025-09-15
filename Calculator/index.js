
const display=document.getElementById("display");

const addtodisplay=(input)=>{
    display.value +=input

}
const cleardisplay=()=>{
    display.value="";

}
const calculate=()=>{
    try{
        display.value = eval(display.value)

    }
    catch(er){
        display.value="ERROR";
    }
    

}