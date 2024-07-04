const studentParameters = {
  age: 33,
  height: 175,
  birthday: '24/08/1990',
  name: 'Max',
  summ: (numb) => {
    let a = numb + studentParameters.age
    console.log(a)
  },
}

// Имена переменныйх

// PascalCase - для Типов и Кассов

// DB_PASSWORD - в основном используются для не изменяемых  переменных , известны до запуска приложения и не меняются

// camelCase - в остальных случаях , все остальные переменные

// Обьекты это ссылочный тип данных, есть основной обьект , переменная это ссылка на него

// Добавление нового ключа значения к объекту

studentParameters.сity = 'Kharkiv'

console.table(studentParameters)

// Динамическая типизация - как не надо делать

// function log() {
//   console.log('Hello World!')
// }

// log()

// log = 10 // нельзя переприсваивать функции . перезаписывать, если есть функция, лучше ее определить как const

// log()

const newLog = () => {
  console.log('Hello World!!!')
}

newLog()
