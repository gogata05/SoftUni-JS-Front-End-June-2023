function solve(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}
solve(6);//We have a perfect number!
solve(28);//We have a perfect number!
solve(1236498);//It's not so perfect.

