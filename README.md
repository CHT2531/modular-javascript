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
    * *doubleItApp* - should contain the remaining functions. It should co-ordinate activity between the other modules and run the app. 
    * Modify the HTML page to load all the files . 
    * Test the app still works.

3. Now think about how you can use ES2015 *import* and *export* statements to handle your module loading. 
    * This will only work if the files are on a web server e.g. *http-server*. make sure you have a web server up and running. 
    * Change the *script* elements to specify that you want to use modules e.g. 
    ```html
    <script type="module" src="js/simpleMath.js"></script>
    ```
    * Use the *import* and *export* statements to load specifc functions from your modules. See https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_named_exports for an example. 

4. 

Have a go using webpack. Here are some instructions to get you going:
* Enter the following to make the practical folder a Node.js project
```
npm init-y
```
* Enter the following to install webpack
```
npm install webpack webpack-cli --save-dev
```
* We can use webpack to resolve the dependencies and generate a single js file for us. There are a number of ways we can do this. One approach is to use a configuration file. Create the following file and save it as *webpack.config.js* in the root of your practical work folder. 
```
const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './js')
  }
};
```

* In the Command Prompt enter the following:

```
npx webpack --config webpack.config.js
```
* Have a look at *main.js* the file that webpack has generated for us. 
* Now you should only need a single *script* element in you HTML page that points to *main.js*.
* Test the application still works. 
