// Tạo nút Remove và gán function remove
function createDeleteBtn(item) {
  let s = document.createElement("span");
  s.innerHTML = "Remove";
  s.className = "deleteBtn";
  item.appendChild(s);

  let deleteBtn = document.getElementsByClassName("deleteBtn");
  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    };
  }
}
for (item of document.getElementsByTagName("li")) {
  createDeleteBtn(item);
}
// Click để add Item vào list
function addAnListItem() {
  let addInput = document.getElementById("addInput");
  if (addInput.value === "") {
    alert("Xin hãy nhập tên sách");
  } else {
    let myUL = document.querySelector("ul");
    let newBook = document.createElement("li");
    newBook.innerText = addInput.value;
    myUL.appendChild(newBook);
    createDeleteBtn(newBook);
  }
}

// Tìm khi nhập text
document.getElementById("search").onkeyup = function () {
  searchList(this.value);
};
function searchList(value) {
  for (key of document.getElementsByTagName("li")) {
    let keyTxt = removeVNese(key.innerText.toLowerCase());
    let valueTxt = removeVNese(value.toLowerCase());

    if (keyTxt.includes(valueTxt)) {
      key.style.display = "flex";
    } else {
      key.style.display = "none";
    }
  }
}

// Bỏ dấu tiếng việt
function removeVNese(str) {
  var from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
}

// Remove all list
function removeAll() {
  const list = document.getElementById("list");

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
