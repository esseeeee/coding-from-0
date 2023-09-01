// ===========task 1(looping while)=========
console.log("looping maju")

let i = 5
while (i <= 8) { 
    console.log(i);
    i++
}
// i kurang dari sama dengan (i++=+1)
console.log("looping mundur")

while (i > 5) {
    console.log(i);
    i--
}
// i lbih beasr dari 5 (i--=penurunan)

//================task 2(looping for)===========

console.log("looping maju")

for (let i = 5;i <=8; i++) {
    console.log(i);
}
// versi simplenya
console.log("looping mundur")

for (let i = 8; i >=5;i--) {
    console.log(i);
}

// ==================task 3 (ganjil genap)=============

for(let i = 90;i<=100;i++) {
    if(i % 2 == 0) { 
      // i modulo 2 sama dengan 0 maka genap
      console.log(`${i} genap`)
    }
    else {
      console.log(`${i} ganjil`)
    }
  }

// =========================================task 4(counter kelipatan)====================

for(i = 1; i <= 100; i +=2 )
    if (i % 3 == 0) {
        console.log(`${i} kelipatan 3`)
    }

    console.log(' ')

for(i = 1; i <= 100; i += 5)
    if (i % 6 == 0) {
        console.log(`${i} kelipatan 6`)
    }

    console.log(' ')

for(i = 1; i <= 100; i += 9)
    if (i % 10 == 0) {
        console.log(`${i} kelipatan 10`)
    }
    // operator tambah sama dengan ( += ) untk menambah dn memasaukan nilai hasil ke variabel

    // ==================task 5(tannga)========
    console.log(' ')
    console.log(' ')

let input = 5
let star = ""

for (let i = 0; i <= 5; i++) {

    for (let j = 0; j < i; j++) {
    star += "p"
    }
    star += "\n"
    // (/n=nw line /garis baru)
}
console.log(star)