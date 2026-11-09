\# SimpleArisan — Dashboard



\## Deskripsi Proyek



SimpleArisan merupakan antarmuka dashboard berbasis web yang dirancang untuk membantu admin mengelola kegiatan arisan. Dashboard ini menampilkan informasi anggota, dana terkumpul, status pembayaran, aktivitas pembayaran, serta jadwal arisan berikutnya.



Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa menggunakan framework tambahan.



\## Teknologi yang Digunakan



\- \*\*HTML5\*\* — Membuat struktur halaman menggunakan elemen semantik.

\- \*\*CSS3\*\* — Mengatur tampilan, warna, layout, dan responsivitas.

\- \*\*JavaScript\*\* — Menambahkan interaktivitas pada navigasi dan tombol.



\## Fitur Utama



1\. \*\*Sidebar Navigation\*\*

&#x20;  - Menampilkan menu Dashboard, Data Anggota, Pembayaran, Jadwal Arisan, dan Pemenang.

&#x20;  - Menu aktif berubah ketika pengguna memilih navigasi.



2\. \*\*Dashboard Header\*\*

&#x20;  - Menampilkan judul halaman dan pesan sambutan.



3\. \*\*Welcome Card\*\*

&#x20;  - Menampilkan informasi singkat SimpleArisan.

&#x20;  - Tombol Lihat Jadwal mengarahkan pengguna ke panel jadwal arisan.



4\. \*\*Statistik Arisan\*\*

&#x20;  - Total anggota.

&#x20;  - Dana terkumpul.

&#x20;  - Peserta menunggu.

&#x20;  - Anggota yang belum membayar.



5\. \*\*Aktivitas dan Jadwal\*\*

&#x20;  - Menampilkan ringkasan pembayaran anggota.

&#x20;  - Menampilkan informasi jadwal pengundian berikutnya.



\## Struktur Folder



```text

SimpleArisan/

│

├── index.html

├── style.css

├── script.js

└── README.md

```



\## Cara Menjalankan Proyek



1\. Download atau clone repository ini.

2\. Buka folder proyek menggunakan Visual Studio Code.

3\. Pastikan file HTML, CSS, dan JavaScript berada dalam folder yang sama.

4\. Buka file `index.html` menggunakan browser.

5\. Dashboard SimpleArisan siap digunakan.



\## Interaktivitas JavaScript



JavaScript digunakan untuk dua interaksi utama:



\- Mengubah menu navigasi aktif ketika tombol navigasi diklik.

\- Mengarahkan tampilan ke bagian jadwal arisan menggunakan smooth scrolling ketika tombol Lihat Jadwal diklik.



\## Responsivitas



CSS menggunakan media query untuk menyesuaikan tampilan pada perangkat dengan ukuran layar berbeda.



\- Pada layar desktop, sidebar dan konten ditampilkan berdampingan.

\- Pada layar kecil, sidebar diperkecil dan kartu statistik disusun menjadi dua kolom.

\- Panel aktivitas dan jadwal disusun menjadi satu kolom pada layar kecil.



\## Catatan



Proyek ini merupakan implementasi antarmuka dashboard untuk tugas pengembangan web menggunakan HTML, CSS, dan JavaScript. Data yang ditampilkan masih berupa data contoh (statis).

