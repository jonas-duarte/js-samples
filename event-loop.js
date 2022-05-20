setTimeout(() => console.log("002-setTimeout")) // setTimeout runs in the event loop
setImmediate(() => console.log("002-setImmediate")) // setImmediate runs in the event loop
process.nextTick(() => console.log("001-nextTick")) // nextTick is a special function that runs before the event loop

console.log("000-main") // main runs before the event loop tasks