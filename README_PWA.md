# Cara Mengintegrasikan PWA di Aplikasi HARINFOOD Member

Agar aplikasi web ini dapat diinstal seperti aplikasi mobile (PWA), lakukan hal berikut:

1. **Sediakan Icon:**
   - Buat folder `icons/` di root proyek.
   - Letakkan dua file icon: `icon-192x192.png` dan `icon-512x512.png` (format PNG, background transparan lebih baik).

2. **Letakkan file berikut di root proyek:**
   - `manifest.json` (lihat contoh di repo ini)
   - `sw.js` (service worker)

3. **Tambahkan tag berikut di `<head>` file `index.html`:**
   ```html
   <link rel="manifest" href="manifest.json">
   <link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192x192.png">
   <meta name="theme-color" content="#667eea">
   ```

4. **Daftarkan Service Worker di akhir `<body>` sebelum penutup:**
   ```html
   <script>
     if ('serviceWorker' in navigator) {
       window.addEventListener('load', function() {
         navigator.serviceWorker.register('sw.js');
       });
     }
   </script>
   ```

5. **Testing:**
   - Akses lewat browser Chrome/Edge/Firefox.
   - Akan muncul prompt "Add to Home Screen" jika semua sudah benar.

**Catatan:**  
- PWA bekerja maksimal pada domain HTTPS atau `localhost` saat development.
- Untuk icon, gunakan file PNG 192x192 dan 512x512 px, agar sesuai dengan standar PWA.
