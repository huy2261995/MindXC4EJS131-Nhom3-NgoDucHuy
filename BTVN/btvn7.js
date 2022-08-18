// Bài 1
let x = 0;
for (i = 100; i >= 0; i--) {
  x = Math.sqrt(x) + i;
}
console.log("Ket Qua 1", x);

//Bài 2
let y = 0;
for (i = 0; i <= 10000; i++) {
  if (Math.sqrt(i) % 1 == 0) {
    y += i + " ";
  }
}
console.log("Ket Qua 2", y);
