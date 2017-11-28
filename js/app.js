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
}

var userNumBox = document.querySelector("#userNum");
var btn = document.querySelector("#goBtn");
var msgDiv=document.querySelector("#msg");
btn.addEventListener("click",doCalc,false);
