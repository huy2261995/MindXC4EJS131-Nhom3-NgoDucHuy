//BT Mentor
let text = "Hôm nay ngày thứ 7";

// hôm nay Ngày thứ 7
let text1 = text.charAt(0).toLowerCase();
let text2 = text.charAt(8).toUpperCase(); 
let text3 = text.slice(1, 8); 
let text4 = text.slice(9, 18); 
let cau1 = text1.concat(text3, text2, text4);
console.log(cau1);

// hômnay ngày thứ 8
let text5 = text.slice(1, 3);
let text6 = text.slice(4, 17);
let cau2 = text1.concat(text5, text6, "8");
console.log(cau2);


//BT Thầy Hiếu
// Dùng charAt in ra ký tự "y" trong chuỗi sau:
let greeting = "Hello. My name is John";
console.log(greeting.charAt(8));

// Dùng slice in ra chuỗi mới với giá trị "is upon us" từ chuỗi sau:
let str1 = "the morning is upon us.";
console.log(str1.slice(12, 22));

//Dùng concat in ra chuỗi mới với giá trị "Hello World" từ các chuỗi sau:
let str2 = "Hello";
let str3 = "World";
console.log(str2.concat(" ",str3)); 