it ('Std promises ...', function() {})

//Formato comum para usar funcoes callbacks em js
// function sumNumber() {
//     let result = 1 + 1
//     if (result == 2) {
//         sucessCallback()
//     } else {
//         errorCallback()
//     }
// }

// function sucessCallback() {
//     console.log('Yeah! Number 2!')
// }

// function errorCallback() {
//     console.log('Ops! Something wrong.')
// }

// sumNumber()

//Usando promises *** Mão no codig
//A promise eh um objeto e passamos para ela uma outra funcao
//essa funcao eh anonima e recebe dois parametros, que são callbakcs
// let p = new Promise ((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Sucess')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//    // console.log('This is in the then ' + message)
//    console.log(`${'This is in the then'} ${message}`)
// }).catch((err) => {
//     console.log('This is the catch ' + message)
// })

//Curso udemy ... usando callback

// const getSomething = (callback) => {
//     setTimeout(() => {
//      //   console.log('Calma carai ...')
//         callback(12) //com call
//     }, 1000)
// } 

// const system = () => {
//     console.log('init')
//    // const something = getSomething()
//    getSomething((some) => {
//         console.log(`Something is ${some}`)
//    })
//    // console.log(`Something is ${something}`)
//     console.log('end')
// }

// system()

//Curso udemy ... usando promises

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
               resolve(13) 
        }, 1000)
    })
} 

const system = () => {
    console.log('init')
    const prom = getSomething()
    prom.then( (some) => {
        console.log(`Something is ${some}`)
    })
    console.log('end')
}

system()