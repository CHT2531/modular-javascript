var doubleIt=function(num){
    return num*2;
}
var isANumber=function(num){
        if(num=="" || isNaN(num))
        {
            return false;
        }
        return true;
}
var clickHandler=function(evnt)
{
    doCalc();
}
var displayFeedback=function(msg){
    msgDiv.innerHTML=msg;
}
function doCalc()
{
<<<<<<< HEAD
	var userNum = userNumBox.value.trim();
	if(userNum=="" || isNaN(userNum))
	{
        msgDiv.textContent="You need to enter a number";
        userNumBox.value="";
        userNumBox.focus();
	}else{
		var doubleNum=userNum*2
        msgDiv.textContent=`Double ${userNum} is ${doubleNum}`;
	}
=======
    var userNum = userNumBox.value;
    if(isANumber(userNum))
    {
        var doubleNum=doubleIt(userNum);
        displayFeedback("Double "+userNum+" is "+doubleNum)
    }else{
        displayFeedback("You need to enter a number")
        userNumBox.value="";
        userNumBox.focus();
    }
>>>>>>> 69d323e5b3b9004859a3ebd1b23db32b86571cd0
}

var userNumBox = document.querySelector("#userNum");
var btn = document.querySelector("#goBtn");
var msgDiv=document.querySelector("#msg");
btn.addEventListener("click",doCalc,false);
