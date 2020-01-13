const palinCek = (kata) => {
    kata = kata.toLowerCase();
    return kata == kata.split(' ').reverse().join(' ');
}

let test = "Oyo Oyo";
console.log(`Is ${test} a palindrome ? ${palinCek(test)}`);