
// soal 2

//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let result= '';
  for (let huruf = 32; huruf <= 126; huruf++) {
    //American Standard Code for Information Interchange(ASCII)
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) === huruf) {
        result += str[i];
        // console.log (huruf ,str[i])
      }
    }
  }
  return result;
}
    

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
