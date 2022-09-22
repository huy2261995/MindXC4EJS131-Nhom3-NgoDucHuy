function soNguyenTo() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  if (a === "" || b === "") {
    alert("Bạn phải nhập số vào");
  }

  if (a > b) {
    alert("Số a phải nhỏ hơn số b");
  } else {
    for (let i = a; i <= b; i++) {
      let check = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          check = 1;
          break;
        }
      }
      if (i > 1 && check == 0) {
        let resulDiv = document.querySelector(".rsDiv");
        let result = document.createElement("p");

        result.innerHTML = i;
        resulDiv.appendChild(result);
      }
    }
  }
}
