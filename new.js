// Deklarasi elemen DOM
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Toggle antara form login dan registrasi
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle form login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Validasi input
    if (!username || !password) {
        alert('Username dan password tidak boleh kosong!');
        return;
    }

    // Kirim data ke backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Tampilkan pesan respons dari backend
        if (data === 'Login successful') {
            // Redirect ke halaman lain setelah login berhasil
            window.location.href = '/dashboard'; // Ganti dengan halaman tujuan Anda
        }
    })
    .catch(error => console.error('Error:', error));
});

// Handle form registrasi
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    // Validasi input
    if (!username || !password) {
        alert('Username dan password tidak boleh kosong!');
        return;
    }

    // Kirim data ke backend
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Tampilkan pesan respons dari backend
        if (data === 'User  registered successfully') {
            // Otomatis pindah ke form login setelah registrasi berhasil
            container.classList.remove('active');
        }
    })
    .catch(error => console.error('Error:', error));
});