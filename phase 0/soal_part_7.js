//============================soal 1(banding angka)===============
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.
console.log (" ")
function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1) {
      return true;
    } else if (angka1 > angka2) {
      return false;
    } else {
      return -1;
    }
  }
  
  console.log(bandingkanAngka(5, 8));  // true
  console.log(bandingkanAngka(5, 3));  // false
  console.log(bandingkanAngka(4, 4));  // -1
  console.log(bandingkanAngka(3, 3));  // -1
  console.log(bandingkanAngka(17, 2)); // false

//   ==================task 2(balik kata)================
//Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
console.log (" ")

function balikKata (kata) {
    return kata.split("").reverse().join("");
    // split =memisahkan kata ,reverse =balik kata ,join =gabung lgi
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuSa

// =====================task 3(jam menit)==========================
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
console.log ("")

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let second = menit % 60;
    let hasil = "";
  
    if (second < 10) {
      hasil = jam + ":0" + second;
    } else {
      hasil = jam + ":" + second;
    }
  
    return hasil;
  }
  
  console.log(konversiMenit(63)); // Output: "1:03"
  console.log(konversiMenit(124)); // Output: "2:04"
  console.log(konversiMenit(53)); // Output: "0:53"
  console.log(konversiMenit(88)); // Output: "1:28"
  console.log(konversiMenit(120)); // Output: "2:00"
  
  
  //==================task 4(xoxo )==============================
  //   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
console.log (" ")

function xo(str) {
    let jumlahX = 0;
    let  jumlahO = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        jumlahX++;
      } else if (str[i] === 'o') {
        jumlahO++;
      }
    }
  
    return jumlahX === jumlahO;
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  

