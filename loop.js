const numbers = [12, 54, 65, 3, 58]


for( const number of numbers ) {
    console.log( number)
}

const bottle = {color: 'green', price: 50, isFinite: true, capacity: 1}

const keys = Object.keys(bottle)
console.log( keys)
for ( const key of keys ) {
    console.log(bottle[key])
}
for( const key in bottle ) {
    console.log(key)
}