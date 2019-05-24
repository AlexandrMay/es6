const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value
    saveForm(title, text, description)
})

//Spread

//function saveForm(data){
//  const formData = {
//    date: new Date().toLocaleDateString(),
//  ...data
//}
// console.log('Form data: ', formData)
//}


//Rest

function saveForm(...args){
    const[title, text, description] = args
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }
    console.log('Form data: ', formData)
}

//Strings

const createLink = ({path, name})=>{
    return `<a target = "_blank" href="${path}">${name}</a>`
}

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://www.google.com.ua/', name: 'Google'})}</li>`

const yandex = `<li>${createLink({path: 'https://ya.ru', name: 'Yandex'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)

ul.insertAdjacentHTML('afterbegin', yandex)

const strToLog = `
Hello
World
    I am
        New tab
`
console.log(strToLog)