# Structuring JS Application and Script Loading

* Once you have downloaded the code, run the example in a browser and check it works

At the moment the application is structured as a single huge function. Commented out at the top of the JavaScript file are a number of functions.

1. Try and restructure the code in *doCalc()* so that it calls these functions instead of doing all the work itself.
    * You might find it easier to comment out the existing *doCalc()* function and make a new one and build it up slowly.
    * Make sure that the button click calls *clickHandler()* and not *doCalc()* directly.

2. One of the advantages of splitting the code into functions is that we have separated out event handling into a separate function (this is the function *clickHandler()*).
    * Add another function *keyUpHandler()* this should be triggered whenever the use types something into the text box. *keyUpHandler* should also call *doCalc()*.  Check this works.
    * Modify *keyUpHandler* so that it only calls *doCalc* if the user has hit the enter key. See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code for some advice.  

2. Now think about how you can use ES2015 *import* and *export* statements to handle your module loading.
    * This will only work if the files are on a web server.
    * Structure the app into three modules (as separate JavaScript files):
        * *simpleMath.js* - should contain a single function *doubleIt()*
        * *validateFncs.js* - should contain a single function *isValidNum()*
        * *app.js* - Your existing file. It should contain the remaining functions. It should co-ordinate activity between the other modules and run the app.
    * Change the *script* elements to specify that you want to use modules e.g.
    ```html
    <script type="module" src="js/app.js"></script>
    ```
    * Use the *import* and *export* statements to load specific functions from your modules. See https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_named_exports for an example.
    * Test the app still works.
