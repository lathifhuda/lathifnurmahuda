# ✅ Portfolio Refactoring - Learning Checklist

Gunakan checklist ini untuk memastikan kamu paham setiap bagian!

## 📚 Pemahaman Konsep

### Level 1: Basic Understanding
- [ ] Saya paham kenapa kode perlu dipisah ke beberapa file
- [ ] Saya tahu perbedaan antara HTML, CSS, dan JavaScript
- [ ] Saya bisa menemukan di mana setiap bagian kode berada
- [ ] Saya paham konsep "Separation of Concerns"

### Level 2: File Structure
- [ ] Saya bisa menjelaskan fungsi setiap folder (css/, js/, assets/)
- [ ] Saya tahu kapan harus edit `index.html` vs `styles.css`
- [ ] Saya paham cara menambahkan CSS custom di `styles.css`
- [ ] Saya bisa menambahkan file JavaScript baru dan me-link ke HTML

### Level 3: Data Management
- [ ] Saya paham struktur object dalam `portfolio-data.js`
- [ ] Saya bisa menambah/edit portfolio item baru
- [ ] Saya tahu cara JavaScript mengambil data dan render ke HTML
- [ ] Saya paham konsep "data-driven development"

---

## 🎨 Praktik Coding

### HTML (index.html)
- [ ] Saya bisa menemukan navigation section
- [ ] Saya tahu cara menambahkan section baru
- [ ] Saya paham semantic HTML (header, section, nav, dll)
- [ ] Saya bisa mengubah teks konten tanpa break styling

### CSS (css/styles.css)
- [ ] Saya bisa menambahkan warna baru di `:root`
- [ ] Saya paham cara kerja `.gold-gradient-text`
- [ ] Saya bisa membuat animasi custom
- [ ] Saya tahu perbedaan Tailwind classes vs custom CSS

### JavaScript (js/main.js)
- [ ] Saya paham `DOMContentLoaded` event
- [ ] Saya bisa membaca fungsi `createProjectCard()`
- [ ] Saya tahu cara smooth scroll bekerja
- [ ] Saya bisa menambahkan event listener baru

---

## 🔧 Hands-On Tasks

### Task 1: Tambah Portfolio Item ⭐
```javascript
// Di portfolio-data.js, tambahkan:
{
  id: 5,
  title: "Nama Project Kamu",
  category: "Kategori Project",
  image: "URL gambar",
  alt: "Deskripsi gambar",
  link: "#"
}
```
- [ ] Task selesai, portfolio item muncul di website!

### Task 2: Ubah Warna Accent ⭐
```css
/* Di css/tailwind-config.css */
:root {
  --color-accent: #FF6B6B; /* Ubah ke warna favoritmu! */
}
```
- [ ] Task selesai, warna berubah!

### Task 3: Tambah Custom Animation ⭐⭐
```css
/* Di css/styles.css */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.slide-in { animation: slideIn 0.5s ease-out; }
```
- [ ] Task selesai, animasi berhasil ditambahkan!

### Task 4: Tambah Event Listener ⭐⭐
```javascript
// Di js/main.js
document.querySelector('.hire-me-button').addEventListener('click', () => {
  alert('Thanks for your interest!');
});
```
- [ ] Task selesai, button berfungsi!

### Task 5: Buat Section Baru ⭐⭐⭐
- [ ] Tambah HTML section di index.html
- [ ] Tambah styling khusus di styles.css
- [ ] Tambah interaktivitas di main.js
- [ ] Section baru fully functional!

---

## 🚀 Advanced Challenges

### Challenge 1: Mobile Menu ⭐⭐⭐
- [ ] Buat hamburger icon
- [ ] Toggle mobile menu on click
- [ ] Smooth animations
- [ ] Close menu when clicking outside

### Challenge 2: Form Validation ⭐⭐⭐
- [ ] Tambah contact form di HTML
- [ ] Validasi email dengan JavaScript
- [ ] Show error messages
- [ ] Success state handling

### Challenge 3: Dark/Light Mode Toggle ⭐⭐⭐⭐
- [ ] Tambah toggle button
- [ ] Switch CSS variables
- [ ] Save preference to localStorage
- [ ] Smooth color transitions

### Challenge 4: Lazy Loading Images ⭐⭐⭐⭐
- [ ] Implementasi Intersection Observer
- [ ] Load images saat terlihat di viewport
- [ ] Loading placeholder
- [ ] Error handling

---

## 🎯 Best Practices Checklist

### Code Quality
- [ ] Kode saya readable (ada comments yang jelas)
- [ ] Saya pakai nama variable/function yang descriptive
- [ ] Saya konsisten dengan indentation (2 atau 4 spaces)
- [ ] Tidak ada duplicate code (DRY principle)

### Performance
- [ ] Images dioptimasi (compressed)
- [ ] CSS & JS files di-minify untuk production
- [ ] Lazy loading untuk konten heavy
- [ ] Browser caching dimanfaatkan

### Accessibility
- [ ] Semua images punya alt text
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast ratio bagus

### Organization
- [ ] File structure logical dan konsisten
- [ ] README.md up to date
- [ ] Comments menjelaskan "why", bukan "what"
- [ ] Git commits descriptive

---

## 📊 Progress Tracker

**My Current Level:**
- [ ] 🌱 Beginner (0-25% tasks completed)
- [ ] 🌿 Intermediate (25-50% tasks completed)
- [ ] 🌳 Advanced (50-75% tasks completed)
- [ ] 🚀 Expert (75-100% tasks completed)

**Date Started:** ___________
**Date Completed:** ___________

---

## 💡 Tips untuk Sukses

1. **Jangan terburu-buru** - Pahami setiap konsep sebelum lanjut
2. **Experiment!** - Ubah-ubah kode, lihat apa yang terjadi
3. **Break things** - Cara terbaik belajar adalah dengan debugging
4. **Read the comments** - Kode sudah di-comment dengan jelas
5. **Google is your friend** - Stuck? Search for solutions!

---

**Selamat belajar! Kamu pasti bisa! 💪✨**
