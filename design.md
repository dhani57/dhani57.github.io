# design.md — Fiasco UI (Design System Extract)

> Sumber: screenshot beranda & section "Selected works" milik **Fiasco** (brand & digital agency).
> Catatan: nilai HEX, ukuran, dan spacing adalah **estimasi visual** dari gambar, bukan dari CSS asli. Item bertanda **(inferred)** tidak tampak di screenshot dan diturunkan agar konsisten dengan bahasa visualnya.

---

## 1. Prinsip Desain

1. **Editorial & minimal** — banyak ruang kosong, hierarki dibangun dari tipografi, bukan dekorasi.
2. **Flat** — tanpa shadow, tanpa border tebal, tanpa gradient pada UI. Warna hidup hanya datang dari gambar/proyek.
3. **Kontras font** — sans geometris *light* untuk headline, serif untuk pernyataan & judul proyek (italic sebagai aksen), mono/kecil untuk metadata.
4. **Sudut tegas** — gambar dan blok konten bersudut 0; hanya chip/filter yang membulat penuh.
5. **Konten adalah hero** — UI netral (off-white / near-black) supaya karya yang berwarna menonjol.

---

## 2. Color Palette

### 2.1 Neutral (UI inti)

| Token | HEX | Penggunaan |
|---|---|---|
| `--color-bg` | `#F8F8F5` | Background halaman (off-white hangat) |
| `--color-surface` | `#F8F8F5` | Card & section (menyatu dengan background) |
| `--color-surface-muted` | `#EEEEE9` | Chip/tag, background elemen sekunder |
| `--color-surface-inverse` | `#161616` | Blok hero gelap, area media/video |
| `--color-surface-media` | `#0D0D0D` | Placeholder gambar/video gelap |
| `--color-border-subtle` | `#E4E4DE` | Garis tipis / outline frame (jarang dipakai) |

### 2.2 Teks

| Token | HEX | Penggunaan |
|---|---|---|
| `--color-text-primary` | `#111111` | Headline, logo, nav, judul |
| `--color-text-secondary` | `#555555` | Deskripsi proyek, body kecil |
| `--color-text-tertiary` | `#8A8A85` | Meta, label sangat kecil |
| `--color-text-inverse` | `#FFFFFF` | Teks di atas surface gelap |
| `--color-text-inverse-muted` | `#CFCFCB` | Filter tidak aktif di atas gelap |

### 2.3 Interactive State

| Token | HEX | Penggunaan |
|---|---|---|
| `--color-chip-bg` | `#EDEDE8` | Chip aktif / tombol pill |
| `--color-chip-bg-hover` | `#E2E2DC` | Hover chip (inferred) |
| `--color-chip-text` | `#111111` | Teks chip aktif |
| `--color-focus-ring` | `#111111` | Focus outline 2px (inferred) |

### 2.4 Accent (hanya dari konten/imagery, **bukan** token UI)

| Token | HEX | Catatan |
|---|---|---|
| `--accent-orange` | `#FF7A45` | Muncul di visual proyek (Pigment) |
| `--accent-cyan` | `#1FD3E6` | Muncul di visual proyek (Pigment) |
| `--accent-green` | `#3E9B4F` | Muncul di visual proyek (Britt Festival) |
| `--accent-sky` | `#8CC4E8` | Langit pada visual proyek |

> Aturan: jangan gunakan warna accent untuk teks, tombol, atau background UI. Biarkan hanya hidup di dalam gambar.

---

## 3. Tipografi

### 3.1 Font Family

| Token | Peran | Karakter (teridentifikasi) | Rekomendasi (open-source) |
|---|---|---|---|
| `--font-sans` | Logo, nav, headline, body | Grotesk geometris, headline weight light | **Hanken Grotesk** / Inter Tight / Instrument Sans |
| `--font-serif` | Statement, judul proyek, aksen italic | Serif transisional, kontras sedang | **Newsreader** / Instrument Serif / Source Serif 4 |
| `--font-mono` | Tag kecil, jam (UK time) | Mono ringan, ukuran kecil | **Geist Mono** / JetBrains Mono |

```css
--font-sans:  "Hanken Grotesk", "Inter Tight", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-serif: "Newsreader", "Source Serif 4", Georgia, "Times New Roman", serif;
--font-mono:  "Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

### 3.2 Skala Tipografi

Ukuran bersifat fluid (`clamp`) mengikuti lebar viewport karena headline pada desain asli terlihat proporsional terhadap lebar layar (~4.8vw).

| Token | Font | Size | Weight | Line-height | Letter-spacing | Penggunaan |
|---|---|---|---|---|---|---|
| `display` | sans | `clamp(2.5rem, 4.8vw, 5.5rem)` | 300 | 1.0 | -0.02em | Headline hero (terpusat) |
| `statement` | serif | `clamp(1.25rem, 2.1vw, 2.25rem)` | 400 | 1.25 | -0.005em | Kalimat pernyataan section "Selected works" |
| `logo` | sans | `1.75rem` | 700 | 1.0 | -0.04em | Wordmark "Fiasco" |
| `nav` | sans | `0.875rem` (14px) | 400 | 1.2 | 0 | Menu navigasi, filter chip |
| `body-sm` | sans | `0.8125rem` (13px) | 400 | 1.45 | 0 | Deskripsi proyek |
| `title-italic` | serif *italic* | `0.8125rem` (13px) | 400 | 1.3 | 0 | Judul proyek (mis. *Pigment*) |
| `eyebrow` | serif *italic* | `0.75rem` (12px) | 400 | 1.2 | 0 | Label section ("Selected works") |
| `tag` | mono | `0.625rem` (10px) | 400 | 1.2 | 0.01em | Tag kategori (Technology, Brand & Digital) |
| `meta` | sans | `0.75rem` (12px) | 400 | 1.2 | 0 | Jam / lokasi (10:39 UK) — superscript untuk "UK" |

### 3.3 Aturan Tipografi

- Headline hero **selalu light (300)**, rata tengah, maks. 3 baris, lebar maks ±18 ch per sisi.
- Aksen italic serif boleh disisipkan **di dalam** judul/visual (mis. "*vivid*", "*agentic AI*") — maks. 1–2 kata per kalimat.
- Hindari weight > 400 selain pada logo.
- Teks all-caps tidak digunakan.

---

## 4. Spacing Scale

Basis **4px**. Gunakan hanya token berikut.

| Token | Nilai | Contoh penggunaan |
|---|---|---|
| `--space-0` | 0 | — |
| `--space-1` | 4px | Jarak ikon ↔ label tag |
| `--space-2` | 8px | Jarak antar tag, padding vertikal tag |
| `--space-3` | 12px | Padding chip (horizontal), gap deskripsi |
| `--space-4` | 16px | Padding vertikal nav, gap antar item nav |
| `--space-5` | 24px | Padding horizontal halaman (mobile), gap judul ↔ deskripsi |
| `--space-6` | 32px | Gap antar elemen dalam section |
| `--space-7` | 48px | Jarak headline ↔ blok media |
| `--space-8` | 64px | Gap antar kolom card (grid) |
| `--space-9` | 96px | Padding vertikal section |
| `--space-10` | 128px | Jarak antar section besar |

### Layout

| Token | Nilai | Catatan |
|---|---|---|
| `--page-gutter` | `clamp(1rem, 2.5vw, 2rem)` | Margin kiri-kanan halaman (logo & nav menempel gutter) |
| `--container-max` | `1440px` | Lebar maksimum konten |
| Grid card | 12 kolom, gap `64px` | Dua card per baris dengan **lebar tidak sama** (≈ 58% / 42%) — asimetris, tinggi media berbeda |
| Header | tinggi ≈ 56–64px | Logo kiri, nav + jam kanan |

---

## 5. Radius

| Token | Nilai | Penggunaan |
|---|---|---|
| `--radius-none` | `0` | **Default**: gambar, video, card, blok hero |
| `--radius-xs` | `4px` | Tag kategori |
| `--radius-md` | `12px` | Frame/container luar (jika diperlukan) |
| `--radius-pill` | `999px` | Filter chip / tombol pill |

> Aturan: media tidak pernah membulat. Kebulatan hanya untuk elemen interaktif kecil.

---

## 6. Elevation / Shadow

Desain ini **flat**. Hierarki dibuat lewat kontras tone (terang ↔ gelap) dan jarak, bukan bayangan.

| Level | Token | Nilai | Penggunaan |
|---|---|---|---|
| 0 | `--elevation-0` | `none` | Semua card, nav, section (default) |
| 1 | `--elevation-1` **(inferred)** | `0 1px 0 rgba(17,17,17,0.06)` | Garis pemisah halus / header sticky saat scroll |
| 2 | `--elevation-2` **(inferred)** | `0 8px 24px rgba(17,17,17,0.12)` | Hanya untuk overlay (dropdown, modal) bila dibutuhkan |

> Jangan pakai shadow pada card proyek maupun tombol.

---

## 7. Komponen Utama

### 7.1 Button — Pill / Filter Chip

Terlihat pada filter **Technology · Climate · Culture** di atas hero gelap.

| Properti | Aktif (selected) | Tidak aktif | Hover |
|---|---|---|---|
| Background | `--color-chip-bg` `#EDEDE8` | transparent | `--color-chip-bg-hover` / `rgba(255,255,255,0.1)` di atas gelap |
| Teks | `#111111` | `#FFFFFF` (di atas gelap) | sama dengan state dasar |
| Font | `nav` (14px / 400) | `nav` | — |
| Padding | `6px 12px` (`space-2` × `space-3`) | sama | — |
| Radius | `--radius-pill` | `--radius-pill` | — |
| Border | none | none | — |
| Shadow | none | none | none |
| Transisi | `background-color 160ms ease` | — | — |

```css
.btn-pill {
  font: 400 0.875rem/1.2 var(--font-sans);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-inverse);
  border: 0;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.btn-pill[aria-pressed="true"] {
  background: var(--color-chip-bg);
  color: var(--color-chip-text);
}
.btn-pill:hover { background: rgba(255,255,255,0.12); }
.btn-pill[aria-pressed="true"]:hover { background: var(--color-chip-bg-hover); }
.btn-pill:focus-visible { outline: 2px solid var(--color-focus-ring); outline-offset: 2px; }
```

**Aturan:**
- Filter chip ditempatkan terpusat, sejajar horizontal, gap `space-4` (16px) — dekat tepi bawah blok media.
- Hanya **satu** chip aktif pada satu waktu (single-select).
- Tidak ada ikon pada chip filter.

#### Link navigasi (Work, Approach, Studio, Insights, Contact)
- Font `nav`, warna `--color-text-primary`, tanpa underline.
- Gap antar item `space-5` (24px).
- Hover: opacity `0.6` atau underline 1px (inferred).

### 7.2 Card — Proyek ("Selected works")

Struktur vertikal, tanpa kotak/border:

```
[ Media (rasio bebas, radius 0) ]
  space-3 (12px)
[ Judul italic serif ]
  space-1 (4px)
[ Deskripsi sans, secondary ]
  space-3 (12px)
[ Tag row ]
```

| Properti | Nilai |
|---|---|
| Background | transparan (menyatu dengan `--color-bg`) |
| Border | none |
| Radius | `--radius-none` |
| Shadow | none |
| Padding | 0 (media full-bleed ke lebar card) |
| Media | gambar/video, `object-fit: cover`, sudut tajam |
| Judul | `title-italic` — serif italic 13px, `--color-text-primary` |
| Deskripsi | `body-sm` — sans 13px, `--color-text-secondary`, line-height 1.45 |
| Tag | lihat di bawah |
| Grid | 2 kolom asimetris, gap `space-8` (64px); media punya tinggi berbeda, **rata atas** |
| Hover (inferred) | media `scale(1.02)` dalam container `overflow:hidden`, durasi 400ms |

```css
.card { display: block; background: transparent; border: 0; border-radius: 0; box-shadow: none; }
.card__media { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; border-radius: 0; }
.card__title { font: italic 400 0.8125rem/1.3 var(--font-serif); color: var(--color-text-primary); margin-top: var(--space-3); }
.card__desc  { font: 400 0.8125rem/1.45 var(--font-sans); color: var(--color-text-secondary); margin-top: var(--space-1); }
.card__tags  { display: flex; gap: var(--space-2); margin-top: var(--space-3); }
```

#### Tag (di dalam card)
| Properti | Nilai |
|---|---|
| Background | `--color-surface-muted` `#EEEEE9` |
| Teks | `tag` — mono 10px, `--color-text-primary` |
| Padding | `4px 8px` |
| Radius | `--radius-xs` (4px) |
| Ikon | glyph 8–10px di kiri label, gap `space-1` |

### 7.3 Input **(inferred — tidak ada di screenshot)**

Dibuat selaras dengan bahasa visual editorial: minimal, flat, tanpa kotak berat.

| Properti | Default | Focus | Error | Disabled |
|---|---|---|---|---|
| Background | transparent | transparent | transparent | `--color-surface-muted` |
| Border | hanya bawah, `1px solid #111111` | bawah `2px solid #111111` | bawah `1px solid #C0392B` | bawah `1px solid #E4E4DE` |
| Teks | sans 14px / 400, `#111111` | sama | sama | `--color-text-tertiary` |
| Placeholder | `--color-text-tertiary` | sama | sama | sama |
| Padding | `12px 0` | sama | sama | sama |
| Radius | `0` | `0` | `0` | `0` |
| Shadow | none | none (gunakan ring bawah) | none | none |
| Label | serif italic 12px, di atas input, gap `space-1` | sama | sama | sama |
| Helper/error | sans 12px, `--color-text-secondary` / `#C0392B` | — | — | — |

```css
.input {
  width: 100%;
  font: 400 0.875rem/1.4 var(--font-sans);
  color: var(--color-text-primary);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--color-text-primary);
  border-radius: 0;
  padding: 12px 0;
  outline: none;
}
.input::placeholder { color: var(--color-text-tertiary); }
.input:focus { border-bottom-width: 2px; padding-bottom: 11px; }
.input[aria-invalid="true"] { border-bottom-color: #C0392B; }
.input:disabled { background: var(--color-surface-muted); color: var(--color-text-tertiary); border-bottom-color: var(--color-border-subtle); }
```

Varian **pill input** (mis. newsletter) boleh memakai `--radius-pill`, background `--color-chip-bg`, tanpa border, padding `10px 16px`.

---

## 8. Pola Section

### 8.1 Header
- Logo kiri (`logo`), nav + jam kanan, tinggi ±56–64px, background `--color-bg`, tanpa border/shadow.
- Jam lokal ditampilkan dengan superscript zona waktu ("10:39ᵁᴷ"), font `meta`.

### 8.2 Hero
- Headline `display` rata tengah di atas `--color-bg`, padding vertikal `space-8`–`space-9`.
- Di bawahnya blok media **full-width** (`--color-surface-inverse`), sudut 0, filter chip di bawah tengah.

### 8.3 Selected Works
- Eyebrow italic serif terpusat → `statement` serif terpusat (maks. 3 baris, lebar ±40ch) → jarak `space-9` → grid card 2 kolom.

---

## 9. Design Tokens (CSS Variables)

```css
:root {
  /* Color — neutral */
  --color-bg: #F8F8F5;
  --color-surface: #F8F8F5;
  --color-surface-muted: #EEEEE9;
  --color-surface-inverse: #161616;
  --color-surface-media: #0D0D0D;
  --color-border-subtle: #E4E4DE;

  /* Color — text */
  --color-text-primary: #111111;
  --color-text-secondary: #555555;
  --color-text-tertiary: #8A8A85;
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: #CFCFCB;

  /* Color — interactive */
  --color-chip-bg: #EDEDE8;
  --color-chip-bg-hover: #E2E2DC;
  --color-chip-text: #111111;
  --color-focus-ring: #111111;
  --color-error: #C0392B;

  /* Typography */
  --font-sans: "Hanken Grotesk", "Inter Tight", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-serif: "Newsreader", "Source Serif 4", Georgia, serif;
  --font-mono: "Geist Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;

  --text-display: clamp(2.5rem, 4.8vw, 5.5rem);
  --text-statement: clamp(1.25rem, 2.1vw, 2.25rem);
  --text-logo: 1.75rem;
  --text-nav: 0.875rem;
  --text-body-sm: 0.8125rem;
  --text-eyebrow: 0.75rem;
  --text-tag: 0.625rem;

  /* Spacing (4px base) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --space-9: 96px; --space-10: 128px;

  /* Radius */
  --radius-none: 0;
  --radius-xs: 4px;
  --radius-md: 12px;
  --radius-pill: 999px;

  /* Elevation */
  --elevation-0: none;
  --elevation-1: 0 1px 0 rgba(17,17,17,0.06);
  --elevation-2: 0 8px 24px rgba(17,17,17,0.12);

  /* Motion */
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --duration-fast: 160ms;
  --duration-base: 400ms;

  /* Layout */
  --page-gutter: clamp(1rem, 2.5vw, 2rem);
  --container-max: 1440px;
}
```

### Tailwind (opsional)

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        bg: "#F8F8F5",
        muted: "#EEEEE9",
        inverse: "#161616",
        ink: { DEFAULT: "#111111", 2: "#555555", 3: "#8A8A85" },
        chip: "#EDEDE8",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "Inter Tight", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Source Serif 4", "Georgia", "serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { xs: "4px", md: "12px", pill: "999px" },
      boxShadow: { none: "none" },
    },
  },
};
```

---

## 10. Do & Don't

| ✅ Do | ❌ Don't |
|---|---|
| Pakai whitespace besar & hierarki lewat ukuran/weight | Menambah border/box di sekeliling card |
| Headline sans **light**, statement serif | Memakai bold berat untuk headline |
| Media bersudut tajam, full-bleed | Membulatkan gambar/video |
| Chip pill untuk filter | Tombol berwarna cerah / gradient |
| Biarkan warna datang dari karya/imagery | Memakai accent orange/cyan untuk UI |
| Italic serif sebagai aksen kecil | Italic untuk paragraf panjang |

---

## 11. Aksesibilitas

- Kontras `--color-text-primary` (#111) pada `--color-bg` (#F8F8F5) ≈ **17:1** (AAA).
- `--color-text-secondary` (#555) pada `--color-bg` ≈ **7:1** (AA/AAA untuk teks kecil).
- Teks tag 10px sangat kecil — pertahankan minimal 10px dan jangan dipakai untuk informasi penting.
- Chip filter wajib `aria-pressed` dan `:focus-visible` yang jelas.
- Hormati `prefers-reduced-motion`: nonaktifkan scale/transform pada hover media.
