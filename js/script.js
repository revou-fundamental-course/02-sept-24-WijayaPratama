function Luas(event) {
  event.preventDefault();
  let A = document.getElementById("panjangAlas").value;
  let T = document.getElementById("Tinggi").value;

  let alas = parseFloat(A);
  let tinggi = parseFloat(T);

  let hasil = 0.5 * alas * tinggi;
  let tampil = document.getElementById("cara");
  tampil.innerHTML = `
        L = 1/2 x a x t <br>
        L = 1/2 x ${alas} x ${tinggi} <br>
        L = ${hasil}
    `;
  tampil.style.display = "block";
}

function Reset(event) {
  event.preventDefault();
  document.getElementById("panjangAlas").value = "";
  document.getElementById("Tinggi").value = "";
  document.getElementById("cara").style.display = "none";
}
