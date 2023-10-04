/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  tarif = 2000;
  hasil =[];

  for (let i=0;i<arrPenumpang.length;i++) {
    let penumpang = arrPenumpang[i][0];
    let berangkat = arrPenumpang[i][1];
    let tujuan = arrPenumpang[i][2];
    // console.log(penumpang,berangkat,tujuan)

    let naikDariIndex = rute.indexOf(berangkat)
    let tujuanIndex = rute.indexOf(tujuan);
    // console.log(berangkat,tujuan)
    let jarak = Math.abs(tujuanIndex - naikDariIndex);
    let bayar = jarak * tarif;
    // console.log(tujuanIndex,naikDariIndex)

    hasil.push({
      penumpang: penumpang,
      naikDari: berangkat,
      tujuan: tujuan,
      bayar: bayar,
    });
  }
  return hasil
  
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
