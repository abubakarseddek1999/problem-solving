// problem-01................................................
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide me a valid number'
    }

    else {
        const result = Math.pow(number,3);
        return result;
    }

}
console.log(cubeNumber(4));

function cubeNumber (number){
    if(typeof number !== 'number'){
        return "please provide me number"
    }
    const result =Math.pow(number,3)
    return result
}

console.log(cubeNumber("4"));