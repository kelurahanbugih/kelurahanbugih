# Spesifikasi Fitur Sistem Informasi Pelayanan Kelurahan Bugih

Dokumen ini berisi daftar fitur untuk aplikasi web sistem informasi dan pelayanan surat menyurat Kelurahan Bugih.

## 1. Fitur Umum (Informasi Publik)
Fitur ini dapat diakses oleh siapa saja tanpa login, bertujuan memberikan informasi transparan mengenai kelurahan.
*   **Beranda (Home)**: Tampilan utama dengan berita terkini atau pengumuman penting.
*   **Profil Kelurahan**: Menampilkan Sejarah, Visi, dan Misi Kelurahan Bugih.
*   **Struktur Organisasi**: Halaman visual (bagan) yang menampilkan struktur pejabat dan staf kelurahan.
*   **Informasi Layanan**: Daftar persyaratan untuk setiap jenis pengurusan surat.

## 2. Fitur User (Pelayanan Masyarakat)
Fokus pada kemudahan warga dalam mengajukan permohonan surat secara mandiri.

### A. Pengajuan Surat (Input Data)
Formulir digital untuk mengajukan surat dengan validasi input sederhana (HTML5/JS).
*   **Input Data Pemohon**: NIK, Nama Lengkap, Alamat, No. HP.
*   **Formulir Khusus (Sesuai Jenis Surat)**:
    1.  **Surat Keterangan Tidak Mampu (SKTM)**:
        *   Input: Penghasilan rata-rata, Jumlah tanggungan, Keperluan (Beasiswa/Kesehatan).
    2.  **Surat Keterangan Domisili**:
        *   Input: Alamat Asal (sesuai KTP), Alamat Domisili Sekarang, Status Tempat Tinggal.
    3.  **Surat Keterangan Usaha**:
        *   Input: Nama Usaha, Jenis Usaha, Alamat Lokasi Usaha, Lama Berdiri.
    4.  **Surat Keterangan Belum Menikah**:
        *   Input: Status perkawinan (Jejaka/Perawan/Duda/Janda), Pernyataan belum menikah lagi.
    5.  **Surat Keterangan Kematian (Baru)**:
        *   Input: NIK & Nama Almarhum, Tanggal & Jam Kematian, Tempat Kematian, Penyebab, Pelapor.
    6.  **Surat Keterangan Kematian (Lama)**:
        *   Input: Data Almarhum, Perkiraan Tanggal/Tahun Meninggal, Saksi-saksi.
    7.  **Surat Keterangan Beda Data**:
        *   Input: Elemen data yang salah (misal: Nama di KK beda dengan Ijazah), Data yang benar, Dasar pembetulan.
    8.  **Surat Keterangan Berkelakuan Baik**:
        *   Input: Keperluan (Melamar Kerja/Sekolah), Pernyataan tidak sedang tersangkut pidana.
    9.  **Surat Keterangan Ahli Waris**:
        *   Input: Nama Pewaris, Tanggal Meninggal, Daftar Ahli Waris (Nama, NIK, Hubungan).
    10. **Surat Keterangan Pindah Datang**:
        *   Input: NIK, Nama, Alamat Asal Lengkap, Alamat Tujuan (RT/RW Kel. Bugih), Jumlah Pengikut.
    11. **Surat Keterangan Pindah Keluar**:
        *   Input: NIK, Nama, Alamat Asal, Alamat Tujuan Lengkap, Alasan Pindah.

### B. Status & Upload (Pendukung)
*   **Upload Dokumen**: Fitur untuk input file (foto/scan syarat).
*   **Info Prosedur**: Penjelasan alur setelah formulir dikirim (misal: "Harap bawa bukti ke kantor kelurahan").

## 3. Fitur Admin (Pengelola)
Halaman khusus perangkat desa untuk memproses data.
*   **Login Admin**: Halaman login sederhana (Username/Password).
*   **Dashboard**: Ringkasan jumlah surat masuk hari ini.
*   **Manajemen Permohonan**:
    *   Tabel daftar permohonan masuk.
    *   **Verifikasi**: Tombol untuk melihat detail inputan warga.
    *   **Cetak**: Tombol untuk generate tampilan surat siap print (Print Preview).
*   **Manajemen Konten (Statis/Dinamis)**: Form sederhana untuk update teks Visi/Misi atau link gambar Struktur.
