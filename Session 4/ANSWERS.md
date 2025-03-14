1 - What are the three states of a Promise
    Pending Status
    Fulfilled Status
    Rejected Status

2 - How does the async keyword affect a function's return value?
    When we use async in a function it is always return a promise. so after promise resolved or failed we can determine the value  

3 - Explain the purpose of the await keyword.
    adding await in front of a function call that returns a promise pauses the execution of the async function block until the promise is resolved or rejected. this ensures the following lines in the block will run after the promise is completed (rejected or resolved).

4 - What is a callback function and how is it used in asynchronous operations?
    A function that is passed as an argument (parameter) to other function.
    ```
    const fs = require('fs');

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file", err);
            return;
        }
        console.log("File content:", data);
    });
    ```

    // fs.readFile is original function call and it has below callback which run after file read success or error
    ```
     (err, data) => {
        if (err) {
            console.error("Error reading file", err);
            return;
        }
        console.log("File content:", data);
    }

    ```
5 - Describe the role of the event loop in JavaScript.

    As Javascript is Single threaded event loop ensures the call stack is non blocking 

6 - Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.


    ```
    function delayedGreeting(name, callback) {
        setTimeout(() => {
            callback(`Hello, ${name}!`);
        }, 2000);
    }

    function displayMessage(message) {
        console.log(message);
    }

    delayedGreeting("Thamindu", displayMessage);
    ```