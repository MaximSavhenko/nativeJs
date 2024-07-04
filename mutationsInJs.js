//Мутирование копий объекта. ПРи таком копировании как приведено ниже, копируется лишь ссылка объекта , и меняем мы изначальный оригинал.
// В других случаях , напирмер , если это переменная , копируется всегда значение, и оригинальное значение не изменяется

const person = {
  name: 'Max',
  age: 33,
}

const person2 = person

person2.age = 25
person2.isAbult = true

console.log(person)
console.log(person.age)
console.log(person.isAbult)

// Избегание мутации , как создать копию объекта, и менять уже ее не затрагивая оригинальный объект, НО ЕСЛИ В ОБЪЕКТЕ ЕСТЬ ВЛОЖЕННЫЙ ОБЬЕКТ , МЫ НЕ СМОЖЕМ НА НЕГО ПОВЛИЯТ, ОН БУДЕТ ИЗМЕНЯТЬСЯ В ОРИГИНАЛЕ

const myHome = {
    cat: 'Marpha',
    monitor: '29 LG'
}

const myHome2 = Object.assign({}, myHome)

myHome2.room = 1

console.log(myHome);
console.log(myHome2);

// 2 вариант создания копий объекта, оператор спред, оператор разделения объекта на свойства, как это работает =>
// Разделили старый объект на свойства, и собрали новый объект

const myJob = {
    liderName: 'Юрий Васильевич',
    age: 40
}

const myJob2 = {...myJob}

myJob2.CompanyName = 'Teko'

console.log(myJob);
console.log(myJob2);

// Третий вариант, полная копия с вложенными объектами

const myWorkTime = {
    start: '7.00',
    end: '17.00'
}

const myWorkTime2 = JSON.parse(JSON.stringify(myWorkTime))

myWorkTime2.lunch = '12.00'

console.log(myWorkTime);
console.log(myWorkTime2);

