function numberOneTriangle(n) {
  if (n > 10) {
    console.log("nhap i tu 1-10");
  } else {
    for (let i = 0; i < n; i++) {
      if (i > 10) {
        console.log("Vui long nhap so tu 1-10");
      } else {
        let output = "";
        for (let j = 0; j < n - i; j++) output += " ";
        for (let k = 0; k <= i; k++) output += "* ";
        console.log(output);
      }
    }
  }
}
numberOneTriangle(11);
