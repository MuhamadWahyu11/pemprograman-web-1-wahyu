// transaction.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Logika transaksi atau pemrosesan formulir di sini
        // Misalnya, mengirim data ke server atau memvalidasi input

        // Jika transaksi berhasil, tampilkan pesan sukses
        successMessage.classList.remove('hidden');
    });
});
