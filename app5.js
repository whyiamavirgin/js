// ! Массивы

const cars = ['Мазда', 'Форд','БМВ','Мерседес']
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

// Задача 1

const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('') 
// Метод split() разбивает строку по буквам и складывает это все в массив. Метод reverse() "переворачивает" этот массив. Метод join() делает из этого массива строку.
console.log(reverseText)