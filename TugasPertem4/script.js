// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    // Method untuk mencatat transaksi penyewaan kendaraan
    catatTransaksi() {
        return `${this.nama} menyewa kendaraan ${this.kendaraanDisewa}`;
    }
}


// Array untuk menyimpan data pelanggan
const daftarPelanggan = [];


// Mengambil elemen dari HTML
const formPelanggan = document.getElementById("formPelanggan");
const tabelPelanggan = document.getElementById("daftarPelanggan");


// Event ketika form disubmit
formPelanggan.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mengambil data dari form
    const nama = document.getElementById("nama").value;
    const nomorTelepon = document.getElementById("nomorTelepon").value;
    const kendaraan = document.getElementById("kendaraan").value;

    // Membuat object dari class Pelanggan
    const pelangganBaru = new Pelanggan(
        nama,
        nomorTelepon,
        kendaraan
    );

    // Mencatat transaksi penyewaan
    pelangganBaru.catatTransaksi();

    // Menambahkan pelanggan ke dalam array
    daftarPelanggan.push(pelangganBaru);

    // Menampilkan data pelanggan
    tampilkanPelanggan();

    // Mengosongkan form
    formPelanggan.reset();
});


// Function untuk menampilkan daftar pelanggan
function tampilkanPelanggan() {

    // Mengosongkan isi tabel terlebih dahulu
    tabelPelanggan.innerHTML = "";

    // Menampilkan semua data pelanggan
    daftarPelanggan.forEach(function(pelanggan, index) {

        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>${index + 1}</td>
            <td>${pelanggan.nama}</td>
            <td>${pelanggan.nomorTelepon}</td>
            <td>${pelanggan.kendaraanDisewa}</td>
        `;

        tabelPelanggan.appendChild(baris);
    });
}