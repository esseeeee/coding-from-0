//==========================task 1 (mengembaliakn nilai function)
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

console.log ("")

function shotOut () {
  return  "hello  Function";
}

console.log (shotOut());

// =============================task  2()=================================
// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

console.log ("")

function calculate (nub1,nub2) {

  return nub1 * nub2 ;
}
  let nub1 = 1
  let nub2 =2
  let hasil = calculate(nub1, nub2);
   

console.log (hasil);

// ==========================task 3(proses sentece)===================================
// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

console.log ("")

function prossesSentence (name, age, address, hobby) {
  let sentence = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan hobi saya adalah ${hobby}.`;
  return sentence;
}
let name = "agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "turu";

let full = prossesSentence(name,age,address,hobby);
console.log (full);
