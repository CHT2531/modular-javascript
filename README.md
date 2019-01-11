# Structuring JS Application and Script Loading

* Once you have downloaded the code, run the example in a browser and check it works

At the moment the application is structured as a single huge function.

1. Try and re-structure the code as a number of different functions
    * *validateNum()*. This function should accept a single argument and return true if this value is a number and false if it isn't 
    * *doubleIt()*. Should accept a single argument, a number, and return the number doubled.
    * *displayFeedback()*. Should accept a single argument, a string, and change the text of ```<div id="msg"></div>``` to display this string. 
    * *doCalc()*. Should co-ordinate activity between the other functions and run the app.
    * *clickHandler()*. Should be the event handler for the button click. It should simply call *doCalc()*.

2. Next think about how you can structure the app into three modules (as separate JavaScript files):
    * *simpleMath.js* - should contain a single function *doubleIt()*
    * *validateUserInput* - should contain a single function *isANumber()*
    * *doubleItApp* - should contain the other functions. It should co-ordinate activity between the other modules and run the app. 
    * Modify the HTML page to load the files in the order above. 

3. Now think about how you can use ES2015 *import* and *export* statements to handle your module loading. 
    * This will only work if the files are on a web server e.g. *http-server*. make sure you have a web server up and running. 
    * Change the *script* elements to specify that you want to use modules e.g. 
    ```html
    <script type="module" src="js/simpleMath.js"></script>
    ```
    * Use the *import* and *export* statements to load specifc functions from your modules. See https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_named_exports for an example. 

4. 

Have a go using webpack. Here are some instructions to get you going:

* First we need to create a Node.js project.
* Open the Node.js Command Prompt
* Navigate to your folder of practical work
```
* Enter the following to create a Node.js project
```
npm init-y
```
* Enter the following to install webpack
```
npm install --save-dev webpack
```
* Now try and create a number of modules. Try creating two modules *simpleMath.js* and *validateUserInput.js*. 
* Use export to specify which parts of the module should be accessible. here's an example for *simpleMath.js*.
```
var simpleMath={
    doubleIt:function(num){
        return num*2;
    }
}
export {simpleMath}

```

* Use app.js to import these modules and use them. 

```
import {simpleMath} from './simpleMath.js'
import {validateUserInput} from './validateUserInput.js'
var app={
    userNumBox:document.querySelector("#userNum"),
    btn:document.querySelector("#goBtn"),
    msgDiv:document.querySelector("#msg"),
    clickHandler:function(evnt){
        doCalc();
    },
    displayFeedback:function(msg){
        this.msgDiv.innerHTML=msg;
    },
    doCalc:function()
    {
        var userNum = this.userNumBox.value;
        if(validateUserInput.isANumber(userNum))
        {
            var doubleNum=simpleMath.doubleIt(userNum);
            this.displayFeedback("Double "+userNum+" is "+doubleNum)
        }else{
            this.displayFeedback("You need to enter a number")
            this.userNumBox.value="";
            this.userNumBox.focus();
        }
    },
    handleClick:function(){
        app.doCalc();
    },
    init:function(){
        this.btn.addEventListener("click",app.handleClick,false);
    }
}

app.init();

```

* Finally we can use webpack to resolve the dependencies and generate a single js file for us. In the Command Prompt enter the following:

```
node_modules\.bin\webpack js\app.js js\bundle.js
```

* Change the *src* attribute in the ```<script>``` element in your HTML page to point at bundle.js.
* Test the application still works. 
