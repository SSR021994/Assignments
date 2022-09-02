// // Remove Duplicate no. from array?
// const arr = [1,3,5,7,9,11,3,9];

// function removeDuplicates(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!res.includes(arr[i])) {
//             res.push(arr[i]);
//         } else{           
//             console.log(arr[i]);
//         }
//     }
//     console.log(res);
// }
// removeDuplicates(arr);

// // Remove even and odd elements in an array?
// const arr2 = [5, 8, 12, 9, 5445, 66, 38, 0, 6598];

// function evenElement(arr) {
//     const even = [];
//     const odd = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     console.log('odd no.--->>>', odd);
//     console.log('even no.--->>>', even);
// }
// evenElement(arr2);

// Remove Uppercase Element and Lower case element in different array?
// const names = ['A', 'B', 'h', 'Z', 'K', 'p', 'i', 'o', 'Y'];

// function letter(arr) {
//     const uppercase = [];
//     const lowercase = [];
//     arr.forEach(element => {
//         if (element == element.toUpperCase()) {
//             uppercase.push(element)
//         } else {
//             lowercase.push(element);
//         }
//     });
//     console.log(uppercase);
//     console.log(lowercase);
// }
// letter(names);

// Assignment Task? 
// const pic = ['Shubham', 'singh', 'rathore', 'This', 'is', 'my', 'Assignment'];
// function checkFirstChar(arr){
//     const upperCase = [];
//     const lowerCase = [];
//     arr.forEach(element => {
//        if(element[0] == element.charAt(0).toUpperCase()) {
//         upperCase.push(element);
//          }else {
            
//         }
// });
//     console.log(upperCase);
    
// }
// checkFirstChar(pic);

// Problem 1: Checking Sum Zero 
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> Input
// [-4, -4] -> Output
 
// function getSumPairZero(array) {
//        for(let number of array){
//         for(let i = 1; i < array.length; i++){
//             if(number + array[i] === 0){
//                 return [number, array[i]];
//             }
//         }
//        }
// }
// const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// Second Method to solve this problem.

// function findSumZero(array) {
//      let left = 0;
//      let right = array.length - 1;

//      while(left < right){
//     sum = array[left] + array[right];
//     if(sum === 0){
//         return [array[left], array[right]];
//     }else if (sum > 0){
//     right--;
//     }else{
//         left++;
//     }
//     }
//     }
//     const result = findSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
//      console.log(result);

    //  String Anagram.
    // 'hello' -> 'llheo'
    // 'shubh' -> 'hhubs'

    // condition
    // length check (for both strings)
    // String 'hello'
    // {h:1, e:0, l:2, o:1}

    function isAnagram(string1,string2){
        if(string1.length !== string2.length){
            return false;
        }
        let count = {}
        for(let letter of string1){
            count[letter] = (count[letter] || 0) + 1 ;
            console.log(count[letter]);
        }
        console.log(count);
        for(let item of string2){
          if (!count[item]) {
            return false;
          }
          count[item] -=1;
    }
    return true;
}
    const check = isAnagram('hello', 'llleo');
    console.log(check);