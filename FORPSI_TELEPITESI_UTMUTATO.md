# 🚀 Forpsi Tárhely Feltöltési Útmutató (Bimval Landing Page)

Ez a leírás lépésről lépésre bemutatja, hogyan töltheti fel az elkészült **Bimval** landing page-et a Forpsi weboldal tárhelyére.

---

## 📁 A projekthez tartozó fájlok
A projekt mappájában megtalálja a kész **`forpsi_landing_page.zip`** fájlt, amit egyben feltölthet vagy kicsomagolhat.

Az alábbi mappa- és fájlstruktúrának kell a Forpsi szerverére kerülnie:

```text
/www (vagy gyökérmappa)
 ├── index.html                  (Főoldal)
 ├── css/
 │   └── style.css              (Modern sötét mód & válaszkész stílus)
 ├── js/
 │   └── app.js                 (Interaktivitás, modal, űrlap)
 └── assets/
     └── logo.png               (A Bimval logó)
```

---

## 🛠️ 1. Feltöltési Módszer: FileZilla / FTP (Ajánlott)

1. **FTP Kliens indítása**: Nyissa meg a [FileZilla](https://filezilla-project.org/) programot.
2. **Csatlakozás a Forpsi szerverhez**:
   - **Kiszolgáló (Host)**: `ftp.domainneved.hu` (vagy a Forpsi által e-mailben küldött FTP szerver cím)
   - **Felhasználónév**: Az Ön Forpsi FTP felhasználóneve
   - **Jelszó**: Az FTP fiókhoz tartozó jelszó
   - **Port**: `21`
3. **Navigálás a célmappába**:
   - A jobb oldali (távoli szerver) ablakban lépjen be a **`www`** (vagy `wwwroot` / `public_html`) mappába.
   *(Megjegyzés: Ha a Forpsi alapértelmezett `index.php` vagy `index.html` helykitöltő fájlja ott van, azt törölheti vagy átnevezheti).*
4. **Fájlok másolása**:
   - A bal oldali (helyi számítógép) ablakban jelölje ki az `index.html` fájlt, valamint a `css`, `js` és `assets` mappákat.
   - Húzza át őket a jobb oldali ablakba.
5. **Kész!**: Nyissa meg a böngészőben a domain nevét (pl. `https://bimval.hu`).

---

## 🌐 2. Feltöltési Módszer: Forpsi WebAdmin / WebFTP (Böngészőből)

1. Lépjen be a Forpsi vezérlőpultjára: **[admin.forpsi.hu](https://admin.forpsi.hu)**
2. Válassza ki a regisztrált domain nevét / tárhely szolgáltatását.
3. Kattintson a **Webtárhely** -> **Fájlkezelő** (vagy WebFTP) menüpontra.
4. Lépjen be a **`www`** könyvtárba.
5. Töltse fel a **`forpsi_landing_page.zip`** fájlt, majd a WebFTP felületen válassza a **"Kicsomagolás" (Unzip)** opciót!
6. Ellenőrizze, hogy az `index.html` közvetlenül a `www` mappában legyen.

---

## ✨ Weboldal jellemzői & Tesztelés

- **Modern sötét design (Luxury Navy & Gold)**: A Bimval logó arany-kék színvilágához igazítva.
- **Dinamikus elemek**:
  - Reszponzív, mobilra és asztali gépre optimalizált elrendezés.
  - "Értesítést kérek" interaktív űrlap visszajelzéssel.
  - "Elérhetőségek" modal ablak.
  - SEO és Social Share (OpenGraph) meta adatok előkészítve.
