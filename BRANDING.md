# App Accelerator — Brand Design System

Dieses Dokument definiert das vollstaendige visuelle System der App Accelerator Marke.
Es dient als Single Source of Truth fuer alle Plattformen: Web, Social Media, Kursplattform, E-Mails und Print.

---

## 1. Markenidentitaet

**Name:** App Accelerator
**Claim:** Werde der Entwickler, den KI nicht ersetzen kann.
**Tonalitaet:** Klar, direkt, professionell. Kein Hype, keine leeren Versprechen. Technisch kompetent, aber zugaenglich.
**Zielgruppe:** Entwickler, Tech-Interessierte, Gruender — die KI als Werkzeug nutzen wollen, nicht als Ersatz.

---

## 2. Logo & Favicon

### Logo
- **Datei:** `/public/images/logo.png`
- **Darstellung:** Logo-Icon + Wortmarke "App Accelerator"
- **Wortmarke:** "App" in Slate-900, "Accelerator" in Violet-600 (`#7C3AED`)
- **Schrift:** Outfit, Semibold (600), Letter-Spacing `-0.02em`
- **Mindesthoehe:** `2rem` (32px)
- **Abstand:** Logo-Icon mit `gap-2` (0.5rem) zur Wortmarke
- **Hintergrund:** Immer auf Weiss oder sehr hellem Hintergrund verwenden

### Favicon
- **Datei:** `/public/favicon.svg`
- **Form:** Kreis (r=14, viewBox 32x32)
- **Farbe:** Violet-600 (`#7C3AED`)

---

## 3. Farbpalette

### Primaerfarben

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Slate-900 | `#0f172a` | `slate-900` | Hauptfarbe fuer Text, Buttons, Dark UI |
| White | `#ffffff` | `white` | Hintergruende, Button-Text auf Dark |

### Markenakzent

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Violet-600 | `#7C3AED` | `violet-600` | Markenakzent: Logo-Wortmarke, Pricing-Titel |
| Violet-200 | `#ddd6fe` | `violet-200` | Hero-Unterstrich-Highlight |
| Violet-100 | `#ede9fe` | `violet-100` | Text-Marker-Highlight |

> Violet wird **ausschliesslich** als dezenter Akzent eingesetzt — nie fuer Buttons, Hintergruende oder grosse Flaechen.

### Neutrale Farben (Slate-Skala)

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Slate-50 | `#f8fafc` | `slate-50` | Dezente Section-Hintergruende, Badge-Fuellungen |
| Slate-100 | `#f1f5f9` | `slate-100` | Badge-Hintergruende, Icon-Container |
| Slate-200 | `#e2e8f0` | `slate-200` | Leichte Borders, Trennlinien |
| Slate-300 | `#cbd5e1` | `slate-300` | Aufzaehlungspunkte, Outline-Button-Borders |
| Slate-400 | `#94a3b8` | `slate-400` | Icons, Hinweistext, Chevrons |
| Slate-500 | `#64748b` | `slate-500` | Beschreibungstexte, Subtitles |
| Slate-600 | `#475569` | `slate-600` | Sekundaerer Bodytext, Nav-Links |
| Slate-700 | `#334155` | `slate-700` | Bodytext in Listen, Feature-Text |
| Slate-800 | `#1e293b` | `slate-800` | Ueberschriften in Cards, Hover-Buttons |
| Slate-900 | `#0f172a` | `slate-900` | Hauptueberschriften, CTAs, Primaerbuttons |

### Sonderfarbe (Border)

| Name | Hex | Verwendung |
|------|-----|------------|
| Border-Gray | `#EEEEEE` | Standard-Kartenrand, Section-Trenner |

### Semantische Farben

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Green-500 | `#22c55e` | `green-500` | Checkmarks, Erfolg |
| Amber-50 | `#fffbeb` | `amber-50` | Launch-Badge-Hintergrund |
| Amber-200 | `#fde68a` | `amber-200` | Launch-Badge-Border |
| Amber-700 | `#b45309` | `amber-700` | Spar-Badge-Text |
| Amber-800 | `#92400e` | `amber-800` | Launch-Badge-Text |

### CSS-Variablen

```css
:root {
  --background: 0 0% 100%;
  --foreground: 220 10% 20%;
  --card: 0 0% 98%;
  --card-foreground: 220 10% 20%;
  --primary: 222 47% 11%;        /* slate-900 */
  --primary-foreground: 0 0% 100%;
  --secondary: 220 15% 90%;
  --secondary-foreground: 220 10% 20%;
  --muted: 220 15% 90%;
  --muted-foreground: 220 10% 45%;
  --accent: 220 15% 90%;
  --accent-foreground: 220 10% 20%;
  --destructive: 0 62% 50%;
  --border: 220 15% 85%;
  --input: 220 15% 85%;
  --ring: 222 47% 11%;
  --radius: 0.5rem;
}
```

---

## 4. Typografie

### Schriftfamilien

| Einsatz | Font | Import |
|---------|------|--------|
| Ueberschriften (h1–h6) | **Outfit** | Google Fonts, Weights: 300–900 |
| Fliesstext & UI | **Inter** | Google Fonts, Weights: 300–700 |

### Globale Einstellungen

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.03em;
}

body {
  font-family: 'Inter', sans-serif;
  font-feature-settings: "cv11", "ss01";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Schriftgroessen-Hierarchie

| Element | Mobile | Desktop | Tailwind | Weight | Farbe |
|---------|--------|---------|----------|--------|-------|
| H1 (Hero) | 2.25rem (36px) | 3.25rem (52px) | `text-4xl md:text-5xl lg:text-[3.25rem]` | Bold (700) | slate-900 |
| H2 (Section) | 1.875rem (30px) | 2.25rem (36px) | `text-3xl md:text-4xl` | Bold (700) | slate-900 |
| H3 (Card) | 1.25rem (20px) | 1.5rem (24px) | `text-xl md:text-2xl` | Semibold (600) | slate-900 |
| Subtitle | 1rem (16px) | 1.125rem (18px) | `text-base md:text-lg` | Normal (400) | slate-500 |
| Body | 0.875rem (14px) | 1rem (16px) | `text-sm md:text-base` | Normal (400) | slate-700 |
| Small / Label | 0.75rem (12px) | 0.75rem (12px) | `text-xs` | Medium (500) | slate-500 |
| Badge-Text | 0.75rem (12px) | 0.75rem (12px) | `text-xs` | Medium (500) | slate-500 |

### Zeilenhoehen

| Einsatz | Wert | Tailwind |
|---------|------|----------|
| Ueberschriften | 1.15 | `leading-[1.15]` |
| Fliesstext | 1.625 | `leading-relaxed` |

### Text-Highlights

```css
/* Marker-Highlight fuer Fliesstext-Betonung */
.highlight-marker {
  background: linear-gradient(to top, #ede9fe 35%, transparent 35%);
  padding: 0 0.05em;
  border-radius: 2px;
}

/* Hero-Highlight fuer Headline-Betonung */
.hero-highlight {
  font-style: italic;
  position: relative;
  display: inline;
  background: linear-gradient(to top, #ddd6fe 28%, transparent 28%);
  padding: 0 0.08em;
}
```

---

## 5. Spacing & Layout

### Seitenstruktur

| Eigenschaft | Wert |
|-------------|------|
| Max-Width (Hero, breit) | `max-w-6xl` (72rem / 1152px) |
| Max-Width (Standard) | `max-w-5xl` (64rem / 1024px) |
| Max-Width (Content) | `max-w-3xl` (48rem / 768px) |
| Max-Width (Schmal, Pricing) | `max-w-lg` (32rem / 512px) |
| Seitenrand horizontal | `px-6` (1.5rem / 24px) |
| Zentrierung | `mx-auto` |

### Section-Spacing

| Kontext | Mobile | Desktop | Tailwind |
|---------|--------|---------|----------|
| Standard-Section | 5rem (80px) | 7rem (112px) | `py-20 md:py-28` |
| Kompakte Section | 2.5rem (40px) | 3.5rem (56px) | `py-10 md:py-14` |
| Section-Trenner | — | — | `border-t border-[#EEEEEE]` |

### Komponenten-Spacing

| Kontext | Wert | Tailwind |
|---------|------|----------|
| Heading → Subtitle | 0.75rem | `mb-3` |
| Subtitle → Content | 3rem | `mb-12` |
| Card-Padding (Standard) | 1rem | `p-4` |
| Card-Padding (Gross) | 1.75rem | `p-7` |
| Listen-Abstand | 0.75rem | `space-y-3` |
| Button-Gruppen | 0.75rem | `gap-3` |
| Icon → Text | 1rem | `gap-4` |

### Breakpoints

| Name | Breite | Tailwind-Prefix |
|------|--------|-----------------|
| Mobile | < 640px | (Default) |
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1400px | `2xl:` (Custom) |

---

## 6. Border Radius

| Einsatz | Wert | Tailwind |
|---------|------|----------|
| Buttons (CTA) | Voll gerundet | `rounded-full` |
| Badges / Pills | Voll gerundet | `rounded-full` |
| Avatare | Voll gerundet | `rounded-full` |
| Karten (gross) | 1rem (16px) | `rounded-2xl` |
| Karten (standard) | 0.75rem (12px) | `rounded-xl` |
| Icon-Container | 0.5rem (8px) | `rounded-lg` |
| Bilder | 1rem (16px) | `rounded-2xl` |
| Logo | 0.5rem (8px) | `rounded-lg` |

### CSS-Variablen

```css
--radius: 0.5rem;       /* 8px — Basis */
--radius-lg: 0.5rem;    /* 8px */
--radius-md: 0.375rem;  /* 6px */
--radius-sm: 0.25rem;   /* 4px */
```

---

## 7. Schatten & Tiefe

Die Marke bevorzugt **Borders statt Schatten** fuer ein flaches, cleanes Erscheinungsbild.

| Einsatz | Methode |
|---------|---------|
| Karten | `border border-[#EEEEEE]` — kein Schatten |
| Video-Container | `border border-slate-200 shadow-sm` — minimaler Schatten |
| Navbar (gescrollt) | `bg-white/70 backdrop-blur-xl border-b border-[#EEEEEE]` |
| Mobile-Menue | `bg-white/90 backdrop-blur-xl` |
| Mobile-Bottom-CTA | `bg-white/90 backdrop-blur-xl border-t border-slate-200/50` |

> Kein `shadow-md` oder groesser. Die Seite lebt von Weissraum und feinen Borders.

---

## 8. Buttons

### Primaer-Button (CTA)

```
Hintergrund:   bg-slate-900
Hover:         bg-slate-800
Text:          text-white, text-base, font-medium
Padding:       px-8 py-4
Radius:        rounded-full
Icon:          ArrowRight (ml-2, w-5 h-5)
Transition:    transition-colors duration-200
```

Beispiel-Klasse:
```
bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-base font-medium rounded-full transition-colors duration-200
```

### Sekundaer-Button (Outline)

```
Border:        border-slate-300
Text:          text-slate-700, text-base, font-medium
Hover:         hover:bg-slate-50
Padding:       px-6 py-4
Radius:        rounded-full
Icon:          ArrowDown (ml-2, w-4 h-4)
Transition:    transition-colors duration-200
```

### Navbar-Button

```
Desktop:       bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 text-sm font-medium rounded-full
Mobile:        bg-slate-900 text-white py-3 rounded-full font-medium (volle Breite)
Sticky-Mobile: w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-full text-sm font-medium
```

### Button-Groessen (shadcn/ui CVA)

| Groesse | Hoehe | Padding | Tailwind |
|---------|-------|---------|----------|
| `sm` | 2.25rem (36px) | `px-3` | `h-9 rounded-md px-3` |
| `default` | 2.5rem (40px) | `px-4 py-2` | `h-10 px-4 py-2` |
| `lg` | 2.75rem (44px) | `px-8` | `h-11 rounded-md px-8` |
| `icon` | 2.5rem (40px) | — | `h-10 w-10` |

### Fokus & Barrierefreiheit

```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
disabled:pointer-events-none
disabled:opacity-50
```

> Buttons sind **nie** violett. Immer Slate-900 auf Weiss.

---

## 9. Komponenten

### Section-Header

Jede Section beginnt mit diesem Muster:

```jsx
{/* 1. Badge/Pill */}
<div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
  <Icon className="w-3 h-3 text-slate-400" />
  <span className="text-xs font-medium text-slate-500">Label</span>
</div>

{/* 2. Ueberschrift */}
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
  Titel der Section
</h2>

{/* 3. Untertitel */}
<p className="text-base text-slate-500 max-w-xl mx-auto">
  Beschreibungstext
</p>
```

### Standard-Karte

```jsx
<div className="bg-white rounded-xl border border-[#EEEEEE] p-4">
  {/* Inhalt */}
</div>
```

### Accordion-Karte

```jsx
<div className="rounded-xl border border-[#EEEEEE] bg-white overflow-hidden">
  <button className="flex items-center gap-4 p-4 w-full text-left">
    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-900">
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-slate-900">Titel</h3>
      <p className="text-xs text-slate-500 mt-0.5">Untertitel</p>
    </div>
    <ChevronDown className="w-4 h-4 text-slate-400" />
  </button>
  {/* Expandable Content */}
</div>
```

### Badge / Pill

```jsx
{/* Section-Label */}
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#EEEEEE]">
  <span className="text-xs font-medium text-slate-500">Label</span>
</div>

{/* Zaehler-Badge */}
<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
  12 Agenten
</span>

{/* Feature-Badge (Herzstueck/Bonus) */}
<span className="inline-flex items-center gap-1 text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
  <Star className="w-3 h-3" />
  Bonus
</span>

{/* Launch-Badge */}
<div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
  <span className="text-xs font-semibold text-amber-800">Launch-Preis</span>
</div>
```

### Review-Karte

```jsx
<div className="bg-white rounded-xl border border-[#EEEEEE] p-5">
  <Quote className="w-4 h-4 text-slate-200 mb-3" />
  <p className="text-sm text-slate-600 leading-relaxed mb-4">Zitat</p>
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
      <span className="text-[10px] font-medium text-white">MK</span>
    </div>
    <span className="text-sm font-medium text-slate-800">Name</span>
  </div>
</div>
```

### Checkmark-Liste

```jsx
<li className="flex items-start gap-2.5">
  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
  <span className="text-slate-700 text-sm">Feature-Text</span>
</li>
```

### Stat-Karte

```jsx
<div className="bg-white rounded-xl border border-slate-200/80 p-4 text-center">
  <p className="text-2xl font-bold text-slate-900">25</p>
  <p className="text-xs text-slate-500 mt-1">Agenten</p>
</div>
```

---

## 10. Icons

### Bibliothek

**Lucide React** — konsistente, minimale Liniensymbole.

### Groessen

| Groesse | Klasse | Einsatz |
|---------|--------|---------|
| XS | `w-3 h-3` | In Badges, kleine Indikatoren |
| SM | `w-4 h-4` | In Buttons, Listen, Chevrons |
| MD | `w-5 h-5` | CTA-Buttons, Feature-Icons |
| LG | `w-6 h-6` | Hamburger-Menue, grosse Icons |
| XL | `w-10 h-10` | Feature-Karten |

### Farben

| Kontext | Farbe |
|---------|-------|
| Standard | `text-slate-400` |
| In dunklem Container | `text-white` |
| Aktiv / Hervorgehoben | `text-slate-600` |
| Erfolg | `text-green-500` |
| Dekorativ / Zitat | `text-slate-200` |

---

## 11. Animationen & Transitions

### Framer Motion — Standardwerte

**Eingangsanimation (Scroll-triggered):**
```js
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
```

**Gestaffelte Animation (Wort fuer Wort, Karte fuer Karte):**
```js
initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{
  delay: 0.3 + index * 0.07,
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1]    // Custom Ease-Out
}}
```

**Scale-Eingang (Badges, kleine Elemente):**
```js
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.4, delay: 0.1 }}
```

**Accordion (Expand/Collapse):**
```js
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.2, ease: "easeInOut" }}
```

### CSS-Transitions

| Kontext | Klasse |
|---------|--------|
| Farbwechsel (Standard) | `transition-colors duration-200` |
| Navbar-Scroll | `transition-all duration-300` |

### Easing

| Name | Wert | Einsatz |
|------|------|---------|
| Custom Ease-Out | `[0.25, 0.1, 0.25, 1]` | Hauptanimationen |
| Ease-In-Out | `"easeInOut"` | Accordions |

### CSS Keyframes

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.96); filter: blur(4px); }
  to   { opacity: 1; transform: scale(1);    filter: blur(0); }
}
```

Utility-Klassen: `.animate-fade-in-up`, `.animate-fade-in-scale`

---

## 12. Navigation

### Desktop-Navbar

```
Hoehe:         h-16 (4rem / 64px)
Position:      fixed top-0, z-50
Hintergrund:   transparent → bg-white/70 backdrop-blur-xl (nach Scroll)
Border:        keine → border-b border-[#EEEEEE] (nach Scroll)
Max-Width:     max-w-5xl, mx-auto, px-6
```

### Nav-Links

```
Schrift:       text-sm
Farbe:         text-slate-600
Hover:         text-slate-900
Transition:    transition-colors
Abstand:       gap-6
```

### Mobile

```
Hamburger:     w-6 h-6 text-slate-900, md:hidden
Menue:         bg-white/90 backdrop-blur-xl border-b border-slate-200/50
Sticky-CTA:    fixed bottom-0, nur sichtbar nach Scroll, md:hidden
```

---

## 13. Responsive-Muster

### Haeufige Patterns

| Pattern | Mobile | Desktop |
|---------|--------|---------|
| Section-Padding | `py-20` | `md:py-28` |
| Headline | `text-3xl` | `md:text-4xl` |
| Hero-Headline | `text-4xl` | `lg:text-[3.25rem]` |
| Grid 2→4 Spalten | `grid-cols-2` | `md:grid-cols-4` |
| Stack → Row | `flex-col` | `md:flex-row` oder `lg:flex-row` |
| Sichtbarkeit | `hidden` | `md:block` oder `md:flex` |
| Nur Mobile | (sichtbar) | `md:hidden` |
| Zeilenumbruch | Fliessend | `<br className="hidden md:block" />` |

### Mobile-Besonderheiten

- **Sticky-CTA:** Fixierter Button am unteren Rand (erscheint nach Scroll)
- **Horizontales Scrollen:** Review-Karten als `overflow-x-auto` mit `scrollbar-hide`
- **Snap-Scrolling:** `snap-x snap-mandatory` fuer Karussells

---

## 14. Abstaende zwischen Sections

Jede Section wird durch `border-t border-[#EEEEEE]` vom vorherigen Bereich getrennt. Kein visueller Spacer — die Trennung erfolgt rein durch die feine Linie und das Section-Padding.

**Alternierende Hintergruende (optional):**
- Standard: `bg-white`
- Alternierend: `bg-slate-50/50` (halbtransparentes Slate-50)

---

## 15. Do's und Don'ts

### Do's
- Slate-900 fuer primaere Aktionen und Ueberschriften
- Violet nur als Akzent: Logo-Wortmarke, Highlight-Unterstrich, Pricing-Titel
- Weissraum grosszuegig einsetzen
- Borders statt Schatten fuer Kartenraender
- Outfit fuer Ueberschriften, Inter fuer alles andere
- `rounded-full` fuer Buttons und Badges
- `rounded-xl` oder `rounded-2xl` fuer Karten
- Animationen subtil und einmalig (`viewport: { once: true }`)

### Don'ts
- Violet nicht fuer Buttons, Hintergruende oder grosse Flaechen
- Keine schweren Schatten (`shadow-lg`, `shadow-xl`)
- Keine bunten Hintergruende fuer Karten (kein Pink, Emerald, Amber etc.)
- Keine Schriftgroessen unter `text-xs` (0.75rem)
- Keine Animationen die sich wiederholen oder ablenken
- Kein Dark Mode im Hauptprodukt (CSS-Variablen existieren, werden aber nicht aktiv genutzt)
- Keine Emojis in UI-Texten
