
let x = 0;


// x = 4;
// x += 1; // x = x + 1;
// x -= 1; // x = x - 1;
// x *= 2;
// x %= 2;
// x **= 2;
// x /= 2;




// x = -0;

// if (x) {
//     console.log(x);  //32
// } else if ( x == 0 ){
//     console.log(x); 
// }
let y = '';
y = 'Hello'
switch (y) {
    case 'Hello':
        y = 'Hola';
        break;
    case 'Bye':
        y = 'Adios'
        break;
    default:
        
        break;
}


const evalNumber = (grade) => {
    if (grade >= 85) {
        return 'Good job!'
    } else {
        throw 'fatal error';
    }

}

try {
    const feedback = evalNumber(84);
    console.log(feedback);
} catch (error) {
    
    // doing stuff with my lil error :D
    console.error(error);
    // throw new Error('anteater')
} finally {
    console.log('Anything or you can do whatever you want here')
}

// console.log('Life goes on man!')


try {
    console.log(myVar)
    let myVar = 'Holi'
} catch (error) {
    console.error(error);
    console.log('I can continue to write code!')
}