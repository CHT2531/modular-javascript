function doCalc()
{
	var userNum = userNumBox.value.trim();
	if(userNum=="" || isNaN(userNum))
	{
        msgDiv.innerHTML="You need to enter a number";
        userNumBox.value="";
        userNumBox.focus();
	}else{
		var doubleNum=userNum*2
        msgDiv.innerHTML="Double "+userNum+" is "+doubleNum;
	}
}

var userNumBox = document.querySelector("#userNum");
var btn = document.querySelector("#goBtn");
var msgDiv=document.querySelector("#msg");
btn.addEventListener("click",doCalc,false);
