function pasanganTerbesar(num) {
    let besar = 0;
    let strNum = num.toString();
  
    for (let i = 0; i < strNum.length - 1; i++) {
      const pair = parseInt(strNum[i] + strNum[i + 1]);
  
      if (pair > besar) {
        besar = pair;
      }
    }
    return besar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  