for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 2000)
}

const HEX = '#FFAABB'

const arr = [1, 2]

const obj ={a: 1}

arr.unshift(4)

obj.d = 2

document.querySelector('h1').style.color = HEX

console.log(arr, obj)
