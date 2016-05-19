function printWorld() {
    console.log('World');
}

function printDone() {
    console.log('Done');
}

setTimeout(printWorld, 0);
setTimeout(printDone, 5000);

console.log('Hello');