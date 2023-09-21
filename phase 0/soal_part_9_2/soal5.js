//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let aZ = {
    'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f',
    'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'k',
    'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p',
    'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u',
    'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z',
    'z': 'a'
  };

  let hasil = "";

  for (let i = 0; i < kata.length; i++) {
    const karakter = kata[i];
    hasil += aZ[karakter];
  }

  return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
