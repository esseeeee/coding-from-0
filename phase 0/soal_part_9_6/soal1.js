function changeMe(arr) {
  // you can only write your code here!
  for (let i=0 ;i < arr.length ;i++) {
    let person = [];

    person.firstName=arr[i][0];
    person.lastName=arr[i][1];
    person.gender=arr[i][2];
    // console.log (person)
    if (arr[i][3] !== undefined) {
      let currentYear= new Date().getFullYear();
      person.age= currentYear - arr[i][3];
      // console.log (person)
    }else {
      person.age = 'Invalid Birth Year'
    }
    console.log (`${person.firstName} ${person.lastName}`)
    console.log (person)
  }
  if (arr.length == 0) {
    console.log ('""')
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""