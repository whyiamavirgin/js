// ! 1 Часть

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

// ! 8 Блок - Функции

function calculateAge(year) {
    return 2020 - year
}

console.log(calculateAge(1993))
console.log(calculateAge(2019))
console.log(calculateAge(1999))

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0) {
    console.log('Человек по имени: ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Вообщето-это уже будущее!')
    }

}

logInfoAbout('Тим', 2003)
logInfoAbout('Елена', 1995)
logInfoAbout('Елена', 2222)

// ! 9 Блок - Массивы 

const cars = ['Mazda', 'Mercedes', 'Ford'] // массив
// const cars2 = new Array('Mazda', 'Mercedes', 'Ford') // ! ТАК ПИСАТЬ НЕ НАДО
console.log(cars)
console.log(cars.length) // выводит длину массива
console.log(cars[1])
console.log(cars[0])
console.log(cars[2])
cars[0] = 'Porsche' // Меняем первый элемент в массиве на новый
cars[3] = 'Mazda' // добавляем новый элемент в массив. Статический индекс (3)
cars[cars.length] = 'BMW' // Динамический индекс (с помощью lenght)
console.log(cars)

// ! 10 Блок - Циклы

const cars2 = ['Mazda', 'Mercedes', 'Ford']
cars2[cars2.length] = 'Porsche'


for (let i = 0; i < cars2.length; i++) {
    const car = cars2[i]
    console.log(car)
}

console.log(' ')

// * Новый способ прохода по массиву (for .. of ..)

for (let car2 of cars2) {
    console.log(car2)
}

// ! 11 Блок - Объекты

// * Синтаксис создания объектов

const person = {
    firstName2: 'Tim',
    lastName2: 'Adamiya',
    year: 2003,
    languages: ['Ru', 'En', 'Tu', 'De'],
    hasGF: false, 
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person)
// * Есть несколько разных способов обращения к объекту
console.log(person.firstName2)
console.log(person['lastName2']) // Второй способ обращения
const key = 'languages'
console.log(person[key]) // выводит массив languages из объекта person 

person.hasGF = true // можно изменять значения внутри объекта
console.log(person.hasGF)
person.isProgrammer2 = true // Можно добавлять новые значения
console.log(person.isProgrammer2) 

person.greet()

// ! 2 Часть - app2.js