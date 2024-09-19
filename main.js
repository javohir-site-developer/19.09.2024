function secondname(name) {
  console.log("salom " + name);
}

secondname("Javohir");

function firstname(number) {
  return number / 10;
}
let son = 100;
let result = firstname(son);

console.log(result);

//1 Massivda elementlarni chiqarish
let errey = [10, 20, 30, 40, 50];

for (let car = 0; car < errey.length; car++) {
  console.log(errey[car]);
}

//2 juft sonni chiqarish
for (let number = 1; number <= 50; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
// 3 kvadrat
for (let btoa = 1; btoa <= 10; btoa++) {
  console.log(btoa + " ning kvadrati = " + btoa * btoa);
}
//4  teskari chiqarish
for (let i = 20; i >= 1; i--) {
  console.log(i);
}
//5 sonni eng kattassini  topish
let numbers = [3, 7, 2, 10, 6];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Eng katta son: " + max);

//6 matnda nechta a harf bor ligi

let text = "assalamu alaykum";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") {
    count++;
  }
}
console.log('"a" harfi soni: ' + count);

//7 urtacha qiymatni chiqarish

let numberses = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log("O'rtacha qiymat: " + average);
