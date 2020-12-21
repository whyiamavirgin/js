// ! Массивы

const cars = ['Мазда', 'Форд','БМВ','Мерседес']
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

// Method
cars.push('Рено') // Добавляет элемент в конец массива

cars.unshift('Волга') // Добавляет элемент в начало массива

const firstCar = cars.shift() // Удаляет первый элемент в массиве. Так же, он возвращает этот элемент
const lastCar = cars.pop() // Удаляет последний элемент в массиве. Так же, он возвращает этот элемент
console.log(firstCar)
console.log(lastCar)
console.log(cars)

console.log(cars.reverse())
console.log(cars)

// const index = cars.indexOf('БМВ')

// cars[index] = 'Porsche'
// console.log(cars)

let findedPerson

for (const person of people ) {
    // console.log(person)
    if (person.budget === 3500) {
        findedPerson = person
    }
}

console.log(findedPerson)

// находит определенного человека из массива people
const index = people.findIndex(function(person) {
    return person.budget === 3500
})
console.log(people[index])

// то же самое, что и выше, но удобнее
const person = people.find(function(person) {
    return person.budget === 3500
})
console.log(person)
// Упрощенная версия функции выше
const person2 = people.find(person2 => person2.budget === 1700) // см. app4.js -> стрелочные функции
console.log(person2)

// Если нет того, кого мы ищем
const person3 = people.find(person3 => person3.budget === 17002) // будет undefined
console.log(person3) 

console.log(' ')

// Есть ли такой элемент в массиве 

console.log(cars.includes('Мазда1')) // true/false

console.log(' ')

// Массив cars в верхнем регистре 
const upperCaseCars = cars.map(car => { // метод map всегда возвращает новый массив
    return car.toUpperCase()
})
console.log(upperCaseCars)

console.log(' ')

// каждый элемент массива fib возвести в квадрат
const pow2Fib = fib.map(num => num ** 2)
console.log(pow2Fib)

console.log(' ')

// другая запись этой же функции

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2Fib1 = fib.map(pow2).map(sqrt) // TODO также можно юзать как параметр в последнем 'map' - Math.sqrt . т.е. -> map(Math.sqrt)
console.log(pow2Fib1)

const pow2Fib2 = fib.map(pow2)
const filteredNumbers = pow2Fib2.filter(num => { // метод filter() - фильтрует по заданной функции и записывает все в новый массив
    return num > 20 // если номер в массиве больше 20-ти, то он остается
})
console.log(filteredNumbers)

// Задача 1

const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('') 
// Метод split() разбивает строку по буквам и складывает это все в массив. Метод reverse() "переворачивает" этот массив. Метод join() делает из этого массива строку.
console.log(reverseText)

// Задача 2 
// TODO просуммировать бюджет людей из массива people2, чей бюджет больше 2к 

const people2 = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people.filter(person4 => person4.budget > 2000).reduce((acc, person4) => {
    acc += person4.budget
    return acc 
}, 0)

console.log(allBudget)