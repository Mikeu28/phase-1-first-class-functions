function swimFortyLaps() {
    console.log("I love swimming");
}

function liftWeights() {
    console.log("I love lifting");  
}

function runFiveMiles() {
    console.log("I love running");
}

function receivesAFunction(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function returnsANamedFunction() {
    return function hello () {
        console.log("return");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("return");
    }
}
