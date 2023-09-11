function palindrome(kata) {
    let word = "";
    for ( i = kata.length -1; i >= 0 ;i--) {
        word += kata[i];
    }
  return kata === word ? true : false;
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false