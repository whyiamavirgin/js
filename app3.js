// ! 3 Часть - Строки

const name = 'Тим'
const age = 17 

const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
const outputNew = `Привет, меня зовут ${name} и мой возраст ${age} лет.` // Удобный и новый способ 
const ternOutput = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет`

console.log(output)
console.log(outputNew)
console.log(ternOutput)

const output2 = `
    <div>This is div</div>
    <p>This is p</p>

`
// * ``
// TODO Такие кавычки очень удобные и сохраняют все пробелы, отступы и переносы строк

console.log(output2)

// ! Методы

const name2 = 'Timofey'
console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(name2.charAt(2))
console.log(name2.indexOf('fey'))
console.log(name2.indexOf('aaaaaaaaaa')) // когда метод indexOf() не находит в строке заданный параметр, выводится "-1"
console.log(name2.startsWith('Tim')) // true/false
console.log(name2.endsWith('ffff')) // true/false
console.log(name2.toLowerCase().startsWith('Tim')) // можно ообэединять методы
console.log(name2.repeat(3)) // повторяет текст заданное кол-во раз

const string = '           password             '
// все пробелы сохраняются
// чтобы очистить пробелы, используется метод 'trim()'
console.log(string.trim())
console.log(string.trimLeft()) // очищает пробелы только слева
console.log(string.trimRight()) // очищает пробелы только справа

function logPerson(s, name3, age2) {
    console.log(s, name3, age2)
    if (age2 < 0 ) {
        age2 = 'Еще не родился'
    }
    return `${s[0]}${name3}${s[1]}${age2}${s[2]}`
}

const personName = 'Timofey'
const personAge = 17
const personAge2 = -17
const personName2 = 'Maksim'

// новый синтаксис передачи параметров в функцию
const output4 = logPerson`Имя: ${personName}, Возраст: ${personAge} !`
const output5 = logPerson`Имя: ${personName2}, Возраст: ${personAge2} !`

console.log(output4)
console.log(output5)

// ! 4 Часть - app4.js