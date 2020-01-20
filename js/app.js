/*
function isValidNum(num){
	if(num=="" || isNaN(num))
	{
				return false;
	}
	return true;
}

function doubleIt(num){
    return num*2;
}

function displayFeedback(msg){
	msgDiv.textContent=msg;
}

function clickHandler(){
	doCalc();
}
*/

let userNumBox;
let btn;
let msgDiv;

function doCalc()
{
	var userNum = userNumBox.value.trim();
	if(userNum=="" || isNaN(userNum))
	{
    msgDiv.textContent="You need to enter a number";
    userNumBox.value="";
    userNumBox.focus();
	}else{
		const doubleNum=userNum*2
    msgDiv.textContent=`Double ${userNum} is ${doubleNum}`;
	}
}

function init(){
	msgDiv = document.querySelector("#msg")
	userNumBox = document.querySelector("#userNum");
	btn = document.querySelector("#goBtn");
	btn.addEventListener("click",clickHandler,false);
}

init();
