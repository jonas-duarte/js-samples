const str = "str"
const num = 1
const symbol = Symbol("symbol")

const example = {
    [str]: "str",
    [num]: 1,
    [symbol]: "symbol",
    func: function() {
        return "func"
    }
}

console.log(Object.keys(example)) // ["str", "1", "func"]
console.log(Object.values(example)) // ["str", 1, [Function: func]]
console.log(Object.getOwnPropertySymbols(example)) // [Symbol(symbol)]
console.log(Object.getOwnPropertyNames(example)) // ["str", "1", "func"]
console.log(Object.entries(example)) // [["str", "str"], ["1", 1], ["func", [Function: func]]]
console.log(Object.fromEntries(Object.entries(example))) // {str: "str", 1: 1, func: [Function: func]}

console.log("...................................")

console.log(example.propertyIsEnumerable(str)) // true
console.log(example.propertyIsEnumerable(num)) // true
console.log(example.propertyIsEnumerable(symbol)) // true
console.log(example.propertyIsEnumerable("func")) // true

console.log("...................................")

Object.defineProperty(example, "str", {enumerable: false})
console.log(Object.keys(example)) // ["1", "func"]
console.log(Object.values(example)) // [ 1, [Function: func]]
console.log(example.propertyIsEnumerable(str)) // false

