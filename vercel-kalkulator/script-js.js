function hitungKeliling() {
    const jariJari = parseFloat(document.getElementById("jari-jari").value);
    
    if (isNaN(jariJari)) {
        document.getElementById("hasil").textContent = "Masukkan angka yang valid";
        return;
    }
    
    const keliling = 2 * Math.PI * jariJari;
    document.getElementById("hasil").textContent = keliling.toFixed(2) + " satuan";
}

// Menambahkan event listener untuk input agar bisa menggunakan Enter
document.getElementById("jari-jari").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        hitungKeliling();
    }
});
