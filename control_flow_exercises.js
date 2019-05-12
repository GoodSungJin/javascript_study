// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
// let x = 15;

// if (x > 10 && x < 20) {
//   console.log(x);
// }


// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// let sum = '';

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// for (let i = 10; i > 0; --i) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }


// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// let i = 0;

// while (i < 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++
// }


// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// let i = 10;

// while (i > 0) {
//   --i
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }


// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
// let sum = 0;

// for (let i = 0; i < 10; i++) {
//   sum += i;
// }

// console.log(sum);


// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// let sum = 0;

// for (let i = 1; i < 20; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0) {
//     sum += i;
//   }
// }

// console.log(sum);


// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// let sum = 0;

// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0 || i % 3 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);


// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= 6; j++) {
//     if (i + j === 6) {
//       console.log([i, j]);
//     }
//   }
// }


// 11. 삼각형 출력하기 - pattern 1
// *
// **
// ***
// ****
// *****

// let sum = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += '*';
//   }
//   sum += '\n';
// }
// console.log(sum);




// 12. 삼각형 출력하기 - pattern 2
// *****
//  ****
//   ***
//    **
//     *

// let sum = '';

// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k < i; k++) {
//     sum += ' ';
//   }
//   for (let j = 1; j <= 5 - i + 1; j++) {
//     sum += '*';
//   }
//   sum += '\n';
// }
// console.log(sum);



// 13. 삼각형 출력하기 - pattern 3
// *****
// ****
// ***
// **
// *

// let sum = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i + 1; j++) {
//     sum += '*';
//   }
//   sum += '\n';
// }
// console.log(sum);


// 14. 삼각형 출력하기 - pattern 4
//     *
//    **
//   ***
//  ****
// *****

// let sum = '';

// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k < 5 - i + 1; k++) {
//     sum += ' ';
//   }
//   for (let j = 1; j <= i; j++) {
//     sum += '*';
//   }
//   sum += '\n';
// }
// console.log(sum);