// ! 1 Блок - Переменные 

var firstName = 'Tim' // не использовать  var

// const lastName = 'Adamiya' // лучше всегда, когда переменная не меняется в дальнейшем, использовать const

const isProgrammer = true 

// TODO : let age = 17  // лучше использовать это, вместо var

//  age = false // можно менять типы данных в переменной

// * нельзя писать в начале переменной число 


// ! 2 Блок - Мутирование 

// TODO : console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// TODO : alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// TODO : const lastName = prompt('Введите фамилию') // записывает в переменную значение, введенное пользователем
// TODO : alert(firstName + ' ' + lastName) // выводит имя и фамилию 

// ! 3 Блок - Операторы

let currentYear = 2020
const birthYear = 2003

const age = currentYear - birthYear

const a = 10
const b = 5

let c = 32

console.log('Ваш возраст: ' + age)
console.log(currentYear++) // вывод : 2020 - все выполняется последовательно, т.е. - сначала выводит переменную, а затем прибавляет к ней 1 
console.log(currentYear) // вывод : 2021
console.log(++currentYear) // здесь уже сначала идет прибавление, а затем выводит измененнную переменную (2022)

// ! 4 Блок - Типы данных

const name = 'Tim'
// ! const x - так нельзя делать, потому что в константу надо записывать значение
let x
// typeof - выводит тип данных определенной переменной
console.log(typeof isProgrammer) // выводит тип данных в этой переменной
console.log(typeof name)
console.log(typeof age)
console.log(typeof x) // вывод : undefined


// ! 5 Блок - Приоритер операторов

const fullAge = 17
const myBirthYear = 2003

const isFullAge = currentYear - birthYear >= fullAge // вывод : true
console.log(isFullAge)

// ! 6 Блок - условные операторы

const courseStarus = 'pending' // ready, fail, pending

if (courseStarus === 'ready') {
    console.log('Курс уже готов и его можно проходить')
} else if (courseStarus  === 'pending') {
    console.log('Курс пока находится в процессе разработки')
} else {
    console.log('Курс не получился')
}

const isReady = true
if (isReady) { // то же самое, что и (isReady === true), т.к. в переменной isReady булево значение (true)
    console.log('Все готово!')
} else {
    console.log('Все не готово!')
}

// Тернарное выражение (тернарный оператор)

console.log('Тернарное выражение')

isReady ? console.log('Все готово!') : console.log('Все готово') // то же самое, что и вышенаписанный блок if

const num1 = 42 // number
const num2 = '42' // string

console.log(num1 == num2) // js приводит к одному типу данных (в данном случае - string) и проверяет их на значение. вывод : true

console.log(num1 === num2) // проверяет не только по значению (также не приводит к одному типу данных), но и по типу данных в переменной. число num1 != строке num2

// ! 7 Блок - Булевая логика
// * можно несколько раз использовать оператор отрицания : 
// * !true = false, !!true = true