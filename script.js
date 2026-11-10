// 1. Ambil tombol berdasarkan ID
const tombolSapa = document.getElementById(‘sapaButton’);

// 2. Periksa apakah tombol ditemukan
if (tombolSapa) {

    // 3. Tambahkan event ketika tombol diklik
    tombolSapa.addEventListener(‘click’, function() {

        // 4. Tampilkan pesan sapaan
        alert(‘Halo! Terima kasih sudah berkunjung!’);

    });

} else {
    console.error(‘Tombol dengan ID sapaButton tidak ditemukan!’);
}
