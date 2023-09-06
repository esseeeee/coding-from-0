// =======================soal 1 (data Handling)============================
// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

console.log ("")
function dataHandling (isian) {
  // pke loop
      for (let i = 0;i < isian.length; i++ ) {
          console.log(`ID: ${isian[i][0]}`);
          console.log(`Nama Lengkap: ${isian[i][1]}`);
          console.log(`Kota: ${isian[i][2]}`);
          console.log(`Tanggal Lahir: ${isian[i][3]}`);
          console.log(`Hobi: ${isian[i][4]}`);
          console.log();
      }
  }
  
  let input = [
      ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
      ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
      ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
      ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  
  
  console.log (dataHandling(input))
  // jgn lupa pnggil function ny

//   ====================soal 2()===============================
// pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull l

console.log ("")





