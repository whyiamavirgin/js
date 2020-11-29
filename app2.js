// ! 2 Часть

// ! Числа 

// ! 1 Блок - Number

const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // 10 возводится в 3-ю степень 
console.log(num)
console.log(float)
console.log(pow)

console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53) - 1) // Math.pow(x,y) - возводит число x в степень y
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('1/0', 1/0)
console.log(Number.NaN) // Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(Number.isNaN(weird)) // NaN
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(42)) // true

const stringInt = '40'
const stringFloat = '40.42'

// * Все четыре записи верны и приводят строку к числу
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)
// TODO : parseInt() работает только с целыми числами

// TODO : для float-чисел используется parseFloat()
console.log(parseFloat(stringFloat) + 2)
// TODO : также, можно испольозовать "+", добавив его в начало переменной
console.log(+stringFloat + 2)

console.log(0.4 + 0.2) // 0.6000000000000001
console.log((2 / 5) + (1 / 5)) // 0.6000000000000001 
console.log(+(0.4 + 0.2).toFixed(1)) // 0.6
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6

// ! 2 Блок - BigInt
console.log(90071992547409919999999n + 9007199254740991999999n)
console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.30852532n) // * error

// console.log(10n - 4) // * error
console.log(parseInt(10n) - 4) // * 6 (Int)
console.log(10n - BigInt(4)) // * 6n (BigInt)
console.log(5n / 2n) // 2n (т.к. Int)

// ! 3 Блок - Math

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) // вычисляет квадратный корень 
console.log(Math.pow(5, 3))
console.log(Math.abs(-42)) // модуль числа
console.log(Math.max(42, 12, 23, 11, 422))
console.log(Math.min(42, 12, 23, 11, 422))
console.log(Math.floor(4.9)) // округление. Всегда округляет в меньшую сторону  
console.log(Math.ceil(4.2)) // округление. Всегда округляет в большую сторону 
console.log(Math.round(4.5)) // округляет к ближайшему целому
console.log(Math.trunc(4.9)) // удаляет десетичную часть
console.log(Math.random())

// ! 4 Блок - Примеры

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))

// ! 3 Часть - app3.js