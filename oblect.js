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

// Доступ к значениям свойств

console.log(studentParameters.age)
console.log(studentParameters.height)

// Изменение значения свойств объекта

studentParameters.age = 25
console.log(studentParameters)

// Добавление новых свойств объекста

studentParameters.city = 'Kharkiv'
console.log(studentParameters)

// Удаление свойств объекта

delete studentParameters.summ
console.log(studentParameters)

// Доступ к значениям свойст с помошью квадратных скобок , используется только тогда когда название значения свойства является переменной.

const job = 'studentsMainJob'

studentParameters[job] = 'CNC machine operator'
console.table(studentParameters)

// Вложенные объекты, и как можно получить доступ

const myCity = {
  city: 'Kharkiv',
  info: {
    isPopular: true,
    country: 'Ucraine',
  },
}

console.log(myCity.info.isPopular)

delete myCity.info.isPopular

console.log(myCity)

// Использование переменных (Сокращеный формат, сокращеные свойства лучше записывать в начале списка свойств)

const name = 'Max'
const postQty = 50

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}

console.log(userProfile);
