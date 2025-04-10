// script.js
document.getElementById('startButton').addEventListener('click', function() {
    // Animasi Pindah Halaman (Contoh sederhana: fade out)
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease-out';
  
    // Tunggu animasi selesai sebelum pindah halaman
    setTimeout(() => {
      window.location.href = 'menu.html';
    }, 500); // 500ms = 0.5 detik
  });
  
  // Tambahkan ini di awal script.js untuk efek fade-in saat halaman load
  document.addEventListener('DOMContentLoaded', () => {
      document.body.style.opacity = 0;
      requestAnimationFrame(() => { // Memastikan style diterapkan sebelum transisi
           document.body.style.transition = 'opacity 0.5s ease-in';
           document.body.style.opacity = 1;
      });
  });