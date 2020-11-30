var text = "Domo arigato"
console.log("Before defining function");

function useless(ninjaCallback) {
    console.log("In useless function");
    return ninjaCallback();
}

function getText() {
    console.log("In getText function");
    return text;
}

console.log("Before making all the calls");

assert(useless(getText) === text,
    "The useless function works! " + text);

console.log("After the call have been made");