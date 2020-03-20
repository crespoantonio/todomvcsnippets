//Run this to start.
//This allow me to select a function randomly.
//Be advised that for be RANDOM maybe some functions don't have 
//enough data to see a change.
var randoBot = setInterval(function() {
    var theFunctions = [];
    for (var prop in rando) {
        if (typeof rando[prop] == "function") {
            theFunctions.push(prop)
        }
    }

    var randomFunctionIndex = Math.floor(Math.random() * theFunctions.length);
    rando[theFunctions[randomFunctionIndex]]()
    
}, 100);

//Use this to STOP the cases.
//clearInterval(randoBot)
