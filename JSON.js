// JSON -формат обмена данными между компьютерами

const studentParameters = {
  name: 'Max',
  age: 33,
  job: 'CNC operator',
}

console.log(JSON.stringify(studentParameters)) //  трансформация объекта в JSON

const json = JSON.stringify(studentParameters)

console.log(JSON.parse(json)) // трансформация JSON в объект
