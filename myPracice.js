

// let p  = new Promise((resolve, reject) => {

// let a = 1+3;


// if (a ==2) {
//     resolve(`success`)
    
// }else {
//     reject(`failed`)
// }

// })

// p.then((message) => {

//     console.log(`this is the message then - ${message}`);
// }).catch((message) => {

//     console.log(`this is the message then - ${message}`);
// }) 



// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
//     })

//     const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')

//     })
    
//     const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
//     })

//     Promise.race([recordVideoOne, recordVideoThree, recordVideoTwo]).then((messages) => {

//         console.log(messages);
//     })


const items = [
{name: 'Bike', price: 100},
{name: 'TV', price: 200},
{name: 'Album', price: 10},
{name: 'Book', price: 5},
{name: 'Phone', price: 500},
{name: 'Computer', price: 1000},
{name: 'Keyboard', price: 25 }
]



const listOfItems = [{name: 'Bike', price: 300},{name: 'TV', price: 150}, {name: 'Car', price: 13000}, ]


//filter 
const filtered = items.filter(x => {
    return x.price<=100;
} )

//map 
const maped = items.map(x => {
    return x.name+= "_maped";
} )

//find

const found = listOfItems.find((x) => {
    return x.name === 'TV'
} )



//foreach

let arr1 = [];
listOfItems.forEach(element => {
arr1.push(element.name);
} )


//some

const hasCheap = items.some( x => {
return x.price < 5;

})


//every 

const nothingCheap = items.every( x => {
return x.price > 4;

})


//reduce 

const total = items.reduce((currentTotal, item) => {


return item.price + currentTotal;
//starting value for total (0)
}, 0 )

