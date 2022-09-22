// function bookingNoti() {
//   let a = document.getElementById("Fullname").value;
//   let b = document.getElementById("NumberPeople").value;
//   let c = document.getElementById("PhoneNumber").value;
//   let d = document.getElementById("DateTime").value;
//   if (a == "" || b == "" || c == "" || d == "") {
//     alert("Please fill all information to book");
//   } else {
//     alert(
//       "Thanks " +
//         a +
//         " for your reservation \nYour booking information:\nFull name: " +
//         a +
//         "\nNumber of people: " +
//         b +
//         "\nPhone number: " +
//         c +
//         "\nDate and time: " +
//         d +
//         "\nWe are always ready to serve you.!"
//     );
//   }
// }
// Get the modal
let modal = document.getElementById("myModal");
let modalnothing = document.getElementById("myModalnothing");
// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  let a = document.getElementById("Fullname").value;
  let b = document.getElementById("NumberPeople").value;
  let c = document.getElementById("PhoneNumber").value;
  let d = document.getElementById("DateTime").value;
  if (a == "" || b == "" || c == "" || d == "") {
    modalnothing.style.display = "block";
  } else {
    modal.style.display = "block";
  }
};

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
  modal.style.display = "none";
};
span2.onclick = function () {
  modalnothing.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalnothing.style.display = "none";
  }
};
