// IIFE - Immediately Invoked Function Expression
// sometimes called a self-executing anonymous function

(function(){

    let name = "Get";


    function Start() {
        console.log("Application starting..");

        console.log(`This is ecmascript stuff, says ${name}`);
        Main();
    }

    function Main() {
        console.log("Application startedss.");
    }

    window.onload = Start;


})();