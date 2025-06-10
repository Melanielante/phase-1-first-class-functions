function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
function WEdnesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

// pulling all five-mile runs into their own function

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

// same for lifting weights and swimming
function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps()  {
    console.log("Swim 40 laps");
}
function Monday() {
    runFiveMiles();
    liftWeights();
}

//function that takes the second activity as a parameter
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
function Monday() {
    exerciseRoutine(liftWeights);
}
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
Monday();

exerciseRoutine(function() {
    console.log("Stretch! Work that core!");
});
//rewriting the above using arrow function
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
});
//OR 
exerciseRoutine(() => console.log("Stretch! Work that core"));

function receivesAFunction(spy) {
    console.log(spy());
}
receivesAFunction(function() {return 'damn'});

function returnsANamedFunction() {
    function fn() {
        console.log("function");
    }
    return fn;
}
function returnsAnAnonymousFunction()  {
    return function() {
        console.log("returns an anonymous function");
    }
}