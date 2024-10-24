

// function fizzBuzz (num) {

//     for (let i = 0; i <= num; i++) {
//         if ((i % 5 == 0) && (i % 3 == 0) ) {
//             console.log('FizzBuzz');
//         }
//         else if (i % 3 == 0) {
//             console.log('Fizz');
//         }
//         else if (i % 5 == 0 ) {
//             console.log('Buzz');
//         }
//         else {
//             console.log(i);
//         }
        
        
//     }

// }

// fizzBuzz(100)

// export default fizzBuzz;



function plusMinus(...arr) {
    const total = arr.length;
    let negativeCount = 0;
    let positiveCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < total; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        } else if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] === 0) {
            zeroCount++;
        }
    }

    const negativeRatio = (negativeCount / total).toFixed(4);
    const positiveRatio = (positiveCount / total).toFixed(4);
    const zeroRatio = (zeroCount / total).toFixed(4);

    console.log(`${negativeRatio}\n${positiveRatio}\n${zeroRatio}`);
}

plusMinus(1, 2, 5, 6, -1, -1, 0, 0, 0);

export default plusMinus;