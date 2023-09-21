//soal3
function cariMedian(arr) {
  // you can only write your code here!
  const urut = arr.sort((a,b) => a - b)//pengurut
    const middle = Math.floor(urut.length / 2);//cari mid
    
    if (urut.length % 2 === 0) {
        return (urut[middle] + urut[middle -1]) / 2;
               //kanan                kiri
    }
    else {
      return urut[middle]
      }
    
    // console.log(urut[middle])
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5