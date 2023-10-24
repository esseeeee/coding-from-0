
/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
  let vokal = {
    'a': 'b', 'A': 'B',
    'i': 'j', 'I': 'J',
    'u': 'v', 'U': 'V',
    'e': 'f', 'E': 'F',
    'o': 'p', 'O': 'P',
  };

  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    let karakter = str[i];
    // console.log(str[i])
    if (karakter in vokal) {
      hasil += vokal[karakter];
      // console.log (hasil,vokal[karakter])
    } else {
      hasil += karakter;
    }
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  //code di sini
  let hasil= '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      hasil += str[i].toUpperCase();
    } else {
      hasil+= str[i].toLowerCase();
    }
  }
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g, '');
}

function passwordGenerator (name) {
  // code di sini
  const A = changeVocals(name)
  const B = reverseWord(A)
  const C = setLowerUpperCase(B)
  const D = removeSpaces(C)
  return D
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'