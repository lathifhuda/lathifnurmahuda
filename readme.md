# Creative Mind Portfolio - Refactored

Portfolio website yang elegant dan modern dengan struktur kode yang terorganisir.

## 📁 Struktur Folder

```
portfolio-refactor/
│
├── index.html              # File HTML utama
│
├── css/
│   ├── tailwind-config.css # Konfigurasi Tailwind CSS
│   └── styles.css          # Custom styles & animations
│
├── js/
│   ├── portfolio-data.js   # Data portfolio projects
│   └── main.js             # Logika JavaScript utama
│
├── assets/                 # (Optional) Gambar lokal
│   ├── images/
│   └── icons/
│
└── README.md              # Dokumentasi ini
```

## 🎯 Fitur yang Sudah Dipisahkan

### 1. **HTML (index.html)**
- Struktur HTML bersih tanpa inline styles
- Semantic HTML untuk SEO yang lebih baik
- Accessibility improvements

### 2. **CSS (css/)**
- `tailwind-config.css`: Konfigurasi Tailwind
- `styles.css`: Custom styles, animations, dan utilities

### 3. **JavaScript (js/)**
- `portfolio-data.js`: Data portfolio dalam format array
- `main.js`: Semua logika interaktif (smooth scroll, animations, dll)

## 🚀 Cara Menggunakan

1. **Buka langsung di browser:**
   ```bash
   # Cukup double-click index.html atau
   open index.html
   ```

2. **Atau gunakan local server:**
   ```bash
   # Dengan Python 3
   python -m http.server 8000
   
   # Dengan Node.js (npx)
   npx serve
   ```

3. **Akses di browser:**
   ```
   http://localhost:8000
   ```

## 📝 Cara Menambah Portfolio Project

Edit file `js/portfolio-data.js`:

```javascript
const portfolioData = [
  // ... existing projects
  {
    id: 5,
    title: "Project Baru",
    category: "Web Design / Development",
    image: "path/to/image.jpg",
    alt: "Deskripsi gambar",
    link: "https://project-url.com"
  }
];
```

## 🎨 Customization

### Ubah Warna
Edit `css/tailwind-config.css`:
```css
:root {
  --color-accent: #D4AF37;  /* Ganti dengan warna pilihanmu */
}
```

### Tambah Animasi
Edit `css/styles.css`:
```css
@keyframes customAnimation {
  /* Animasi kustom */
}
```

### Tambah Interaktivitas
Edit `js/main.js` dan tambahkan fungsi baru.

## 🔧 Dependencies

- **Tailwind CSS** (via CDN)
- **Google Fonts**: Newsreader, Material Symbols
- **Vanilla JavaScript** (No framework needed!)

## ✨ Keuntungan Struktur Ini

1. ✅ **Maintainability**: Mudah mencari dan mengubah kode
2. ✅ **Scalability**: Mudah menambah fitur baru
3. ✅ **Performance**: CSS & JS terpisah bisa di-cache browser
4. ✅ **Collaboration**: Tim bisa kerja di file berbeda
5. ✅ **Best Practices**: Mengikuti standar industri

## 🎓 Next Steps (Pengembangan Lanjutan)

- [ ] Tambahkan mobile menu hamburger
- [ ] Implementasi lazy loading untuk gambar
- [ ] Tambahkan loading state
- [ ] Buat contact form yang fungsional
- [ ] Integrasikan dengan CMS (opsional)
- [ ] Optimasi performa dengan bundler (Vite/Webpack)

## 📚 Belajar Lebih Lanjut

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Modern JavaScript](https://javascript.info/)
- [Web Accessibility](https://www.w3.org/WAI/)

---

**Dibuat dengan ❤️ untuk pembelajaran web development**
