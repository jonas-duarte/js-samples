console.log(42/0) // Infinity
console.log(42/-0) // -Infinity
console.log(42/Infinity) // 0
console.log(42/-Infinity) // -0
console.log(42/NaN) // NaN
console.log(42/'foo') // NaN
console.log(42/'42') // 1