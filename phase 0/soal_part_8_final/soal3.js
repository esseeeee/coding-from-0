/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  let kandang =[];
  let hasil =[];

  for (let i =0 ;i < animals.length ;i++) {
    if (i ==0) {
      kandang.push(animals[i]);
    }
    else if (animals[i][0] == kandang[0][0]) {
      kandang.push(animals[i]);
    }
    else {
      hasil.push(kandang)
      kandang = [animals[i]]
    }
  console.log(animals[i][0] , kandang[i])
  }
  hasil.push(kandang)
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]