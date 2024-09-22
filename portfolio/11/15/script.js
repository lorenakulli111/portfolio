"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Lorena Kulli",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//creating DOM elements 7
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

/////////////////////////////
// computing usernames 11
const createUsernames = function (user) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts); //stw
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //mdn documetation to see more methods
// //SLICE , does not mutate the original arr
// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE ,mutates the original arr
// console.log(arr.splice(2));
// console.log(arr);
// //REVERSE.mutates the original arr
// arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['f', 'g', 'h', 'i', 'j']
// console.log(arr2.reverse());
// //CONCAT,does not mutate the original arr
// const letters = arr.concat(arr2)
// console.log(letters);
// console.log([...arr, ...arr2]);
// //JOIN

// console.log(letters.join(' - '));

// //looping over arrayys 4
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement${i + 1}: you deposited ${movement}`);
//     } else {
//         console.log(`Movement${i + 1}: you withdrew ${Math.abs(movement)}`);
//     }
// }
// console.log('-----------FOREACH----------');

// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement${i + 1}: you deposited ${mov}`);
//     } else {
//         console.log(`Movement${i + 1}: you withdrew ${Math.abs(mov)}`);
//     }
// })
// //foreach with maps and sets 5
// //maps
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (key, value, map) {
//     console.log(`${key}:${value}`);

// })
// //sets
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR', 'DIN']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//     console.log(`${key}:${value}`);
// })
// //project bankist app 6
//challange 1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);
//     // dogsJulia.slice(1, 3);
//     const dogs = dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);
//     dogs.forEach(function (dog, i) {
//         if (dog >= 3) {
//             console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//         }
//     });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
//data tranfromsaton map,filter,reduce 9

// the map metthod 10
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// })
// const eurToUsd = 1.1;

// const movementUSD = movements.map(mov =>
//     mov * eurToUsd
// )

// console.log(movements);
// console.log(movementUSD);
const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement${i + 1}: you ${mov > 0 ? "deposited " : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//the filter method 12
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);
//the reduce method 13
//accumulator ,acc is like a snowball
console.log(movements);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i}:${acc}`);

  return acc + cur;
}, 100);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//coding challange 2
//[16,6,10,5,6,1,4]
const dogsAges = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = dogsAges.filter(function (age) {
  return age <= 2;
});
console.log(calcAverageHumanAge);

const humanAge = calcAverageHumanAge.map(
  (age) => ` The human age for this dog is: ${2 * age}`
);
console.log(humanAge);
//the magic of chaninng methods 15
const eurToUsd = 1.1;
//PIPELINE
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

//the find method 17
// const FirstWithdrawal = movements.find(mov => mov < 0)
// console.log(movements);
// console.log(FirstWithdrawal);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// 1 //the diff between find and filter method is that diif from fliter ,the find method only returnst the firts condition,the filter returns al the conditions that matches it
//2//filter- returs a new array,kurse ,the find method-only returns the elemnt itself ,not an array

//the findindex method
const nxenes = [
  {
    emri: "Lorena",
    id: 2,
  },
  {
    emri: "albina",
    id: 3,
  },
  {
    emri: "alketa",
    id: 1,
  },
];
//findIndex method
const nxen = nxenes[nxenes.findIndex((nx) => nx.id === 3)];
console.log(nxen);
// some and every method
const matura = nxenes.every(function (e) {
  return e.id === 3;
});
console.log(matura);
//sort methd
const a = ["lori", "ceta", "bina"];
const sorted = a.sort();
console.log(sorted);

const sortByAge = nxenes.sort(function (a, b) {
  return a.id - b.id;
});
console.log(sortByAge);

// the fill method
const x = [1, 2, 3, 4, 5, 6, 7];
const y = x.fill(9, 0, 2);
console.log(y);
// the from method
const z = x.from({ length: 7 }, () => 1);
console.log(z);
