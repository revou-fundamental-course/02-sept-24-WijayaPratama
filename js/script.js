// fungsi Luas Segitiga
function Lsegitiga(event) {
  event.preventDefault();

  let A = document.getElementById("panjangAlas").value;
  let T = document.getElementById("Tinggi").value;
  let tampil = document.getElementById("result");

  if (A !== "" && T !== "") {
    let alas = parseFloat(A);
    let tinggi = parseFloat(T);

    let hasil = 0.5 * alas * tinggi;
    tampil.innerHTML = `
          Hasil Perhitungan <br>
          L = 1/2 x a x t <br>
          L = 1/2 x ${alas} x ${tinggi} <br>
          L = ${hasil}
      `;
    tampil.style.display = "block";
  } else {
    tampil.innerHTML = "Masukkan angka";
    tampil.style.display = "block";
  }
}

// fungsi Luas jajargenjang

function Ljajargenjang(event) {
  event.preventDefault();

  let A = document.getElementById("panjangAlas").value;
  let T = document.getElementById("Tinggi").value;
  let tampil = document.getElementById("result");

  if (A !== "" && T !== "") {
    let alas = parseFloat(A);
    let tinggi = parseFloat(T);

    let hasil = alas * tinggi;
    tampil.innerHTML = `
          Hasil Perhitungan <br>
          L =  a x t <br>
          L = ${alas} x ${tinggi} <br>
          L = ${hasil}
      `;
    tampil.style.display = "block";
  } else {
    tampil.innerHTML = "Masukkan angka";
    tampil.style.display = "block";
  }
}

// fungsi Keliling segitiga

function Ksegitiga(event) {
  event.preventDefault();

  let A = document.getElementById("A").value;
  let B = document.getElementById("B").value;
  let C = document.getElementById("C").value;
  let tampil = document.getElementById("resultKsegitiga");

  if (A !== "" && B !== "" && C !== "") {
    let hasil = parseFloat(A) + parseFloat(B) + parseFloat(C);
    tampil.innerHTML = `
          Hasil Perhitungan <br>
          K = a + b + c <br>
          K = ${A} + ${B} + ${C} <br>
          K = ${hasil}
      `;
    tampil.style.display = "block";
  } else {
    tampil.innerHTML = "Masukkan angka";
    tampil.style.display = "block";
  }
}

// fungsi Keliling Jajargenjang

function Kjajargenjang(event) {
  event.preventDefault();

  let A = document.getElementById("A").value;
  let B = document.getElementById("B").value;
  let tampil = document.getElementById("resultKsegitiga");

  if (A !== "" && B !== "") {
    let hasil = 2 * (parseFloat(A) + parseFloat(B));
    tampil.innerHTML = `
          Hasil Perhitungan <br>
          K = 2 * (a + b) <br>
          K = 2 * (${A} + ${B}) <br>
          K = ${hasil}
      `;
    tampil.style.display = "block";
  } else {
    tampil.innerHTML = "Masukkan angka";
    tampil.style.display = "block";
  }
}

// fungsi reset
function Reset(event) {
  event.preventDefault();
  // LUAS SEGITIGA
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("panjangAlas").value = "";
  document.getElementById("Tinggi").value = "";
  // KELILING SEGITIGA
  document.getElementById("resultKsegitiga").innerHTML = "";
  document.getElementById("resultKsegitiga").style.display = "none";
  document.getElementById("A").value = "";
  document.getElementById("B").value = "";
  document.getElementById("C").value = "";
}

function btnLsegitiga(event) {
  event.preventDefault();
  document.querySelector(".main-Ksegitiga").classList.add("hidden");
  document.querySelector(".main-Lsegitiga").classList.remove("hidden");
}

function btnKsegitiga(event) {
  event.preventDefault();
  document.querySelector(".main-Lsegitiga").classList.add("hidden");
  document.querySelector(".main-Ksegitiga").classList.remove("hidden");
}
