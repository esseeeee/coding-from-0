function angkaPalindrome(num) {
    while (true) {
    num++;
    let strNum = num.toString();
    let temp = "";
    for (let i =strNum.length -1; i >= 0; i--) {
        temp += strNum[i]
         }
         if (parseInt(temp) == num) {
            return num
         }
       }
    }
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001