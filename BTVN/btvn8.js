//1. Cho mảng A = [5,4,7,8,10,20,1], output -> [1,4,5,7,8,10,20] (hint: sử dụng hàm Array.sort)
const arrA = [5, 4, 7, 8, 10, 20, 1];
arrA.sort((a, b) => {
  return a - b;
});
console.log("Sắp xếp mảng A:", arrA);

//2. Cho mảng B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5]
const arrB = [1, 2, "a", {}, "b", "c", 2, 4, 5];
const arrC = [];
arrB.forEach((i) => {
  if (Number.isInteger(i)) arrC.push(i);
});
console.log("Mảng C:", arrC);

//3. Cho mảng D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng
const arrD = [1, 4, 10, 100, 50, 69, 96];
var min = Math.min.apply(null, arrD);
var max = Math.max.apply(null, arrD);

console.log("Số lớn nhất là:", max, "\n" + "Số nhỏ nhất là:", min);

// 4. Cho mảng E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift

const arrE = [1, 2, "a", "b", "c", 2, 4, 5];
arrE.unshift(arrE.pop(), arrE.pop(), arrE.pop());
console.log("Kết quả", arrE);

//5. Cho mảng F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)
const arrF = [1, 23, 41, 5, 6, 1, 14, 66, 1124, 1, 1, 55, 15, 0];
let timx = arrF.lastIndexOf(1);
console.log("Vị trí thứ 4 của số 1 trong mảng:", timx);
/*let result = arrF.findIndex(function (element, index) {
  return element == 1 && index > 4;
});*/ //Đang Tìm cách làm với findIndex
