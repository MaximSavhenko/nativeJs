//фУНКЦИИ - ЭТО блок кода который можно выполнять многократно

let a = 5
let b = 3

// let c

// c = a + b

// console.log(c)

// a = 8
// b = 12

// c = a + b
// console.log(c)

// Оптимизация кода выше с помощью функции

function summ(a, b) {
  const c = a + b
  console.log(c)
}

summ(a, b)

a = 8
b = 12

summ(a, b)

// Функция может быть -
// 1. Иминованой
// 2. Присвоена переменной
// 3. Анонимной
// 4. Аргументом при вызове другой функции
// 5. Значением свойства (метода) объекта

// Так же , функция это ОБЪЕКТ

function myFn(a, b) {
  // Параметры
  let c
  a = a + 1
  c = a + b
  return c // return возвращает результат и заканчивает работу функции, если не указать эту инструкцию, функция по умолчанию вернет undefined
}

myFn(10, 3) // Аргументы

const result = myFn(10, 3)

console.log(result)

// Передача значения по ссылке, функция при вызове принимает объект в виде фргумента
// В нутри функции не рекомендуется мутировать внешние объекты ()

const personOne = {
  name: 'Alex',
  age: 25,
}

function increasePersonAge(person) {
  person.age += 1
  return person
}

increasePersonAge(personOne)

console.log(personOne.age)

// Если надо работать с объектом переданым в нутрь функции , то лучше создать копию объекта как ниже в примере

const myPerson = {
  name: 'Max',
  age: 33,
}

function increaseMyAge(person) {
  const updatePerson = Object.assign({}, person)
  updatePerson.age += 1
  return updatePerson // инсайд, как работает ретурн , принимает параметр , проводим с ним работу , возвращаем уже изменный параметр с помщью ретурн , и функция становится обычной переменной с информацией , с которой можно работать
}

const updateMyPerson = increaseMyAge(myPerson)
console.log(myPerson.age)
console.log(updateMyPerson.age)

// КОЛБЭК ФУНКЦИЯ - это функция которя вызывается в нутри другой функции

function anotherFunction() {
  console.log('CallBack Function')
}

function fuWithCallback(calbackFunction) {
  calbackFunction()
}

fuWithCallback(anotherFunction)

//2 пример , c сет тайм аут

function printMyName() {
  console.log('Max')
}

setTimeout(printMyName, 1000)

// Правила работы с функциями 
  // 1. Называть функции исходя из их задач
  // 2. Одна функция должна выполнять 1 задачу
  // 3. Не рекомендуется изменять внешние относительно функции переменные


