# 🌐 GitHub Pages + Forpsi Domain Beállítási Útmutató (Bimval)

Ez a beállítás teljesen **INGYENES**, és ingyenes SSL (HTTPS) tanúsítványt is biztosít a `bimval.hu` domainhez.

---

## 🛠️ 1. LÉPÉS: Kód feltöltése GitHub-ra

1. Lépj be a [GitHub.com](https://github.com) oldalra és hozz létre egy új **Public (nyilvános)** repository-t (pl. `bimval-weboldal`).
2. Nyiss meg egy terminált ebben a mappában (`c:\Users\peti-\OneDrive\pydev - home\Weblap`), majd futtasd a következő parancsokat (helyettesítsd a saját GitHub felhasználóneveddel):

```bash
git init
git add .
git commit -m "Bimval landing page inicializálás"
git branch -M main
git remote add origin https://github.com/FELHASZNALONEV/bimval-weboldal.git
git push -u origin main
```

---

## ⚙️ 2. LÉPÉS: GitHub Pages bekapcsolása

1. A GitHub repository oldalán kattints a **Settings** (Beállítások) fülemle.
2. A bal oldali menüben válaszd a **Pages** menüpontot.
3. A **Build and deployment** szekcióban:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` és `/ (root)`
   - Kattints a **Save** gombra.
4. A **Custom domain** mezőbe írd be: `bimval.hu`, majd kattints a **Save** gombra. 
   *(Megjegyzés: A mappában lévő `CNAME` fájl automatikusan beállítja ezt).*
5. Pipáld be az **Enforce HTTPS** opciót (amint a DNS rekordok frissültek a Forpsinál, ez aktívvá válik).

---

## 🔗 3. LÉPÉS: Forpsi DNS Rekordok Beállítása (Domain összekötése)

Lépj be a Forpsi vezérlőpultjába (**[admin.forpsi.hu](https://admin.forpsi.hu)**), válaszd ki a `bimval.hu` domain-t, majd keresd meg a **DNS Rekordok Kezelése (DNS Rekordok)** menüpontot.

Add hozzá az alábbi rekordokat:

### 1. **A Rekordok** (A fő domainhez: `bimval.hu`):
Hozz létre 4 darab **A** típusú rekordot a következő IP címekkel (a host/név mező maradjon üresen vagy `@` karakter):

| Típus | Név / Host | Érték / IP Cím |
| :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

### 2. **CNAME Rekord** (A `www.bimval.hu` aldomainhez):
Hozz létre egy **CNAME** rekordot:

| Típus | Név / Host | Érték / Cél |
| :--- | :--- | :--- |
| **CNAME** | `www` | `FELHASZNALONEV.github.io.` |

*(A `FELHASZNALONEV` helyére a saját GitHub felhasználónevedet írd!)*

---

## ⏳ Frissülés és Végeredmény

- A DNS rekordok frissülése általában **15-60 percet** vesz igénybe.
- Amint lezajlott a frissülés, a `https://bimval.hu` és a `https://www.bimval.hu` cím is automatikusan és biztonságosan (HTTPS/SSL) a GitHub Pages-en tárolt új Bimval landing page-re fog mutatni!
