# Tugas Angular Routing

Proyek latihan berdasarkan materi presentasi **5 – Angular Routing**. Proyek berisi dua halaman:
- `/login` — formulir Sign In.
- `/dashboard` — halaman dashboard.
- URL `/` diarahkan ke `/login`.
- URL yang tidak dikenal diarahkan kembali ke `/login`.

Tampilan dibuat dengan CSS lokal agar proyek dapat langsung dicoba tanpa mengunduh theme. Ini bukan salinan persis theme AdminLTE 4 dari slide; bila dosen meminta theme aslinya, unduh AdminLTE 4 lalu integrasikan aset CSS/JS sesuai instruksi presentasi.

## Menjalankan di MacBook

Pastikan Terminal berada di folder yang memiliki `package.json`, lalu jalankan:

```bash
npm install
npm start
```

Buka alamat yang ditampilkan Angular CLI, biasanya `http://localhost:4200`.

## Cara mencoba routing

1. Halaman awal akan membuka Login.
2. Isi email dan password apa saja, lalu klik **Sign In**.
3. Aplikasi berpindah ke Dashboard.
4. Klik **Keluar** atau menu **Login** untuk kembali ke halaman Login.

## Catatan
- File `package.json` disertakan; jangan jalankan `npm start` dari folder induk yang salah.
- `node_modules` tidak disertakan dalam ZIP. Folder tersebut dibuat oleh `npm install`.
- Presentasi menyebut nama project dengan format `angular{NIM Anda}`. Ganti nama folder/proyek bila diwajibkan dosen.
