function getAge(year){
    const current = new Date().getFullYear();
    return current - year
}

const calcAge = (year) => {
    const current = new Date().getFullYear();
    return current - year
}

const getAge1 = year => {
    const current = new Date().getFullYear();
    return current - year
}

const getAge2 = year => {
    return new Date().getFullYear() - year;
}

console.log(getAge2(1988))

const person = {
    age: 31,
    name: 'Alex',
    logNameWithTimeout() {
        setTimeout(()=>{
            console.log(this.name)
        }, 1000)
    }
}

//параметры по умолчанию

const createPost = (title, text, date = new Date().toLocaleDateString()) => {
    return {
        title: title,
        text: text,
        date: date
    }
}

const post = createPost('New title', 'New text')
console.log(post)

//работа с обьектами

const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')
console.log(ford)

const yearField = 'year'

const bmw = {
    name: 'BMW',
    [yearField]: 2018,
    ['model']: 'X5',
    logFields(){
        const {name, year, model} = this
        console.log(name, year, model)
    }
}

console.log(bmw)
bmw.logFields()

//const year = bmw.year
const {year} = bmw
console.log(year)