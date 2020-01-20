import {doubleIt} from "./simpleMaths.js";
import {isValidNum} from "./validationFncs.js";

let userNumBox;
let btn;
let msgDiv;

function displayFeedback(msg){
	msgDiv.textContent=msg;
}
function keyUpHandler(evnt){
	if(evnt.code=="Enter"){
			doCalc();
	}
}
function clickHandler(){
	doCalc();
}

function doCalc()
{
	const userNum = userNumBox.value.trim();
	if(!isValidNum(userNum))
	{
      displayFeedback("You need to enter a number");
      userNumBox.value="";
      userNumBox.focus();
	}else{
			const doubleNum = doubleIt(userNum);
      displayFeedback(`Double ${userNum} is ${doubleNum}`);
	}
}

function init(){
	msgDiv = document.querySelector("#msg")
	userNumBox = document.querySelector("#userNum");
	btn = document.querySelector("#goBtn");
	userNumBox.addEventListener("keyup",keyUpHandler,false);
	btn.addEventListener("click",clickHandler,false);
}

init();
