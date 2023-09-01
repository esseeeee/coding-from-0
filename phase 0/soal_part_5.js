// ========================task 1=============================
let nama = "esse", job = "ksatria";

if (nama === "") {
    console.log("isi nama oi");
}

if (job === "") {
  console.log("pilih peran untuk masuk game");
}

let job1 ="ksatria";
let job2 ="tabib";
let job3 ="mage";

 if (job === "ksatria" && nama ==="esse") {
  console.log ("halo kstria",nama,",kamu dapat menyerang dengan senjatamu!");
}

else if (job === "tabib" && nama ==="esse") {
  console.log ("halo tabib",nama,",kamu akan membantu temanmu yang terluka");
}

else if (job === "mage" && nama ==="esse") {
  console.log ("halo mage",nama,",ciptakan keajaiban yang membantu kemenanganmu!");
}

else {
  console.log ("mending jadi pedagang");
}

// ===================task 2===================================

let tanggal = 33;
let bulan = 7;
let tahun = 2023;
let txt = '';

switch (bulan){
    case 1:
        txt = 'Januari';
        break;
    case 2:
        txt = 'Februari';
        break;
    case 3:
        txt = 'Maret';
        break;
    case 4:
        txt = 'April';
        break;
    case 5:
        txt = 'Mei';
        break;
    case 6:
        txt = 'Juni';
        break;
    case 7:
        txt = 'Juli';
        break;
    case 8:
        txt = 'Agustus';
        break;
    case 9:
        txt = 'September';
        break;
    case 10:
        txt = 'Oktober';
        break;
    case 11:
        txt = 'November';
        break;
    case 12:
        txt = 'Desember';
        break;
    default:
        break;
}

if (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan >= 1 && bulan <= 12) {
    console.log(`${tanggal} ${txt} ${tahun}`);
} else {
    console.log('masukkan tanggal, bulan, dan tahun (1900-2200) yang valid.');
}