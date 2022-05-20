const obj = {}

const example = Symbol('example')
obj[example] = 'example'

console.log(example) // Symbol(example)
console.log(obj[example]) // example
console.log(obj) // { [Symbol(example)]: 'example' }
console.log(obj.example) // undefined
console.log(obj.hasOwnProperty(example)) // false
console.log(obj.hasOwnProperty('example')) // true

const example2 = Symbol('example')
obj[example2] = 'example2'

console.log(obj) // { [Symbol(example)]: 'example', [Symbol(example2)]: 'example2' }
console.log(obj[example2]) // example2
console.log(obj[example]) // example
console.log(obj.example) // undefined

console.log(Object.keys(obj)) // [] -> symbols are not enumerable

