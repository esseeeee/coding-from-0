// ==================task 1(method.split)====================
// pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    let array_tanggal = input[3].split('/');
// split=memecah bagian '/'
    console.log(input);
    if (array_tanggal[1] === "05") console.log("Mei");
    console.log([array_tanggal[0], array_tanggal[1], array_tanggal[2]].join('-'));
    console.log(input[1].slice(0, 15));
}

console.log (dataHandling(input));
