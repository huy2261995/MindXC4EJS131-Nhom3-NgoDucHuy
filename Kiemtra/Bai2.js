function numberOneTriangle(n) {
  if (n > 10) {
    console.log("nhap i tu 1-10");
  } else {
    for (let i = 0; i < n; i++) {
      let output = "";
      for (let k = 0; k <= i; k++) output += "*";
      console.log(output);
    }
  }
}

numberOneTriangle(3);
