const fizzBazz = (num) => {

    if (num % 2 == 0 && num % 3 == 0) {
        return 'Fizz Bazz';
    } else if (num % 2 == 0) {
        return 'Fizz';
    } else if (num % 3 == 0) {
        return 'Bazz';
    } else {
        return num;
    }
}

export default fizzBazz;