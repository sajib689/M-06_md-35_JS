const first = {a: 2};
const second = {a: 2};
const third = second
if (second === third) {
    console.log('same')
} else{
    console.log('different')
}

function compare(first, second) { 
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        return true;
    } else{
        return false;
    }
}
console.log(compare)
compare()