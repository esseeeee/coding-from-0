//1.lets form a sentece ada (+ ' ' buat spasi)

let word = 'JavaScript';
let second = 'is';
let third = 'fun';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

let kalimat = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;
console.log(kalimat);

//2.index accessing 1by1 (manual)

let word2 = 'wow JavaScript is so cool';
let firstWord = word2[0] + word2[1] + word2[2];
let secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[14] + word2[14] + word2[14] + word2[14];
let thirdWord = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log('first word: ' + firstWord);
console.log('sec word: ' + secondWord);
console.log('third word: ' + thirdWord);
console.log('fourth word: ' + fourthWord);
console.log('fifth word: ' + fifthWord);


//3.breaking Sentence (Again) using Substring(dimulai dri 0, mencari index awal dan akhir)

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 25);

console.log('first word: ' + exampleFirstWord3);
console.log('sec word: ' + exampleSecondWord3);
console.log('third word: ' + exampleThirdWord3);
console.log('fourth word: ' + exampleFourthWord3);
console.log('fifth word: ' + exampleFifthWord3);

//4.breaking sentence (yet Again) and Count Each Length

let word4 = 'wow JavaScript is so cool';
let firstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

let firstWordLength = firstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

//.panjang /jumlah karakter