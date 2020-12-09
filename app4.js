// ! 4 Часть - Функции


// * Function Expression
// Когда функцию складываем в переменную 

const greet2 = function greet2(name) {
    console.log('Привет2 - ', name)
}

greet('Lena')
greet2('Lena')

// ! Различия между FD и FE
// К FD мы можем обращаться до инициализации самой функции, а в случае с FE, выводится ошибка

// * Function Declaration
// Обычная, всемилюбимая функция

function greet(name) {
    console.log('Привет - ', name)
}


console.log(typeof greet) // В JS нет типа данных "function" // ! Функции являются объектами
console.dir(greet)

// ! Анонимные функции

let counter = 0
const interval = setInterval(function() { // Есть еще setTimeout
    if (counter === 1) {
        clearInterval(interval) // clearTimeout()
    } else {
        console.log(++counter)
    }
}, 1000)

// ! Стрелочные функции

function greet3(name) {
    console.log('Привет - ', name)
}

const arrow = (name) =>  {
    console.log('Привет - ', name)
}

const arrow2 = name => {console.log('Привет - ', name)}

arrow('Tim')
arrow2('Timofey')

const pow2 = num => num ** 2 // Возводит в степень // ! ЭТО ТОЖЕ ФУНКЦИЯ

console.log(pow2(5))

// ! Параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b

console.log(sum(41))
console.log(sum())
console.log(sum(10, 5))

function sumAll(...all) { // все числа записываются в массив 'all'. неограниченное кол-во чисел
    console.log(all)
    let result = 0
    for (let num2 of all) {
        result += num2
    }
    return result
}

const res = sumAll(1,2,3,4,5)
console.log(res)

// ! Замыкания 

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Timofey')
// console.log(logWithLastName)
console.log(logWithLastName('Adamiya'))
console.log(logWithLastName('Izmailov'))

// ! Конец 
// Следующий урок - массивы
// ! 5 часть - app5.js