// Number
console.log(Number("0")) // 0
console.log(Number("500")) // 500
console.log(Number("abc")) // NaN
console.log(Number("")) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(NaN)) // NaN
console.log(Number(Infinity)) // Infinity
console.log(Number(-Infinity)) // -Infinity
console.log(Number("0.1")) // 0.1
console.log(Number("0.1e2")) // 10
console.log(Number("0.1e-2")) // 0.001
console.log(Number("0,1")) // NaN

// String
console.log(String(42)) // "42"
console.log(String(true)) // "true"
console.log(String(false)) // "false"
console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"

// Boolean
console.log(Boolean(42)) // true
console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean("foo")) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

// BigInt
console.log(BigInt(42)) // 42n
console.log(BigInt(0)) // 0n
console.log(BigInt("")) // 0n

// Symbol
console.log(Symbol("foo")) // Symbol(foo)
console.log(Symbol("foo") === Symbol("foo")) // false

// Null
console.log(null) // null

// Undefined
console.log(undefined) // undefined

