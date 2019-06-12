/*setTimeout(function() {
alert('Hello timeout')
}, 2000)*/


/*let counter = 0
var interval = setInterval(function() {
    console.log(counter++)
    if(counter === 10){
        clearInterval(interval)
    }
}, 1000)*/



//промисы

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        console.log('Server: requesting list of users in db')
        console.log('.....')
        resolve()
    }, 1000)
})

promise.then(function(){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        var users = [
            {uid: 'id1', name: 'Name1'},
            {uid: 'id2', name: 'Name2'}
        ]
        console.log('DB: preparing users list', users)
        console.log('.....')
        resolve(users)
    }, 500)
})
})
.then(function(dbUsers){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Server: transforming data for client')
        console.log('.....')
        var users = dbUsers.map(function(user){
            return {
                id: user.uid,
                fistName: user.name,
                timestamp: Date.now()
            }
        })
        resolve(users)
    }, 500)
})
})
.then(function(users){
    setTimeout(function(){
        console.log('Client: receiving and displaying data', users)
    }, 1000)
})
.catch(function(error){
    console.log(error)
})
/*.finally(function(){
    console.log('finally')
})*/

//Промисы

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, ms)
    })
}

sleep(1500).then(function(){
    console.log('1500')
})

sleep(3000).then(function(){
    console.log('3000')
})

//all - ждет самый долгий, потом выполняется, содержит массив датыпромисов
Promise.all([sleep(1500), sleep(3000)]).then(function(){
    console.log('all')
})
//race - ждет самый быстрый, потом выполняется, содержит только дату первого
Promise.race([sleep(1500), sleep(3000)]).then(function(){
    console.log('race')
})

