# Prompts para tu sitio personal en Google Stitch

Single page, **minimal elegante**, posicionamiento **boutique/premium**, foco en propuesta de valor y proceso (todavía sin portafolio extenso). Objetivo: que un dueño de negocio te vea como la persona indicada y agende una llamada.

---

## 0. Antes de pegar el prompt: completá estos datos

Reemplazá en la copy:

- `[TU NOMBRE]` y, si querés, una marca personal (ej. "[Nombre] · Estudio web").
- `[CIUDAD]` (ej. Maldonado / Uruguay).
- `[AÑOS o trayectoria breve]` — sin detalles largos (ej. "más de X años creando productos digitales").
- `[WHATSAPP]`, `[EMAIL]`, `[@instagram]`.
- Link de agenda (Calendly/Cal.com) si tenés.

> Tip de posicionamiento boutique: mantené **una sola** llamada a la acción repetida ("Agendá una llamada"), y sumá una línea de escasez ("Tomo pocos proyectos por mes") para subir el valor percibido.

---

## 1. PROMPT MAESTRO (pegá esto en Stitch)

> Está en inglés a propósito: Stitch genera mejor el diseño en inglés. Los textos van en español (entre comillas) para que los respete.

```
Design a single-page personal website for a freelance web designer & developer. Style: minimal, elegant, premium, lots of whitespace, calm and confident. Mobile-first, fully responsive.

Visual direction:
- Palette: ivory/off-white background (#FAFAF7), near-black text (#1A1A1A), ONE refined accent color (deep forest green #234A3A) used sparingly for links, buttons and small details. No gradients, no clutter.
- Typography: an elegant serif for headings (like Fraunces or Playfair Display) paired with a clean modern sans-serif for body (like Inter). Large, airy headings. Generous line spacing.
- Layout: wide margins, thin hairline dividers, subtle fade-in on scroll, restrained micro-interactions. Premium editorial feel, like a high-end studio. No stock-photo clutter.

Sections, in order (single scrolling page):

1) HERO — full height, centered or left-aligned. Big serif headline, short subheadline, one primary button "Agendá una llamada". Small label above the headline like "Diseño y desarrollo web · [CIUDAD]".
   Headline: "Sitios web que hacen que tu negocio se vea tan bueno como es."
   Subheadline: "Diseño y desarrollo a medida para negocios que quieren destacar online. Pocos proyectos, mucho detalle."

2) VALUE / WHY — short section. A one-line problem statement and 3 concise value cards with small icons.
   Intro: "Tu próximo cliente te busca en Google antes de entrar. Si no tenés una web que transmita confianza, lo perdés."
   Card 1 — "Diseño a medida": "Nada de plantillas genéricas. Una web pensada para tu marca y tu cliente."
   Card 2 — "Rápido y sin vueltas": "Procesos ágiles: tu sitio funcionando en días, no en meses."
   Card 3 — "Pensado para vender": "Botón de WhatsApp, reservas y todo lo que convierte una visita en un cliente."

3) APPROACH / BOUTIQUE — a calm, text-led section that signals premium and personal service.
   Title: "Trabajo boutique, atención personal."
   Text: "Tomo pocos proyectos por mes para dedicarle a cada uno el detalle que merece. Trabajás directo conmigo, de principio a fin."

4) PROCESS — 4 numbered steps, horizontal on desktop, stacked on mobile.
   Step 1 "Charlamos": "Entiendo tu negocio y qué necesitás transmitir."
   Step 2 "Diseño a medida": "Te muestro una maqueta real antes de avanzar."
   Step 3 "Desarrollo": "Construyo el sitio, rápido y prolijo, optimizado para celular."
   Step 4 "Lanzamiento": "Tu web online, con dominio propio y todo listo para usar."

5) WORK / CONCEPTS — an elegant gallery grid of 3 placeholder website mockups framed as "Conceptos". Caption above: "Algunos conceptos". (I will replace these with real mockups.)

6) ABOUT — brief, one short paragraph with a small portrait placeholder on the side.
   Title: "Sobre mí"
   Text: "Soy Marco. +5 años ayudando a marcas a tener una presencia digital que esté a la altura. Me obsesiona el detalle y que cada sitio sea simple, rápido y efectivo."

7) FINAL CTA — full-width calm band with one line and the button again.
   Line: "¿Listos para que tu negocio se vea profesional online?"
   Button: "Agendá una llamada"
   Small text under button: "Tomo pocos proyectos por mes."

8) FOOTER — minimal: name, info@tortolanistudio.com, +541161386615, https://www.linkedin.com/in/marco-tortolani/, and a back-to-top link.

Tone of all copy: confident, warm, professional, Uruguayan Spanish (use "vos"). Keep it concise. Avoid corporate buzzwords.
```

---

## 2. Prompts de refinamiento (usalos después, uno por vez)

Stitch trabaja iterando. Una vez generado el sitio, pedí ajustes así:

**Pulir el hero:**

```
Make the hero more dramatic: bigger serif headline (one strong line), more vertical whitespace, and a subtle thin underline animation on the primary button on hover. Keep it minimal and elegant.
```

**Más sensación premium:**

```
Increase the premium feel: add more whitespace between sections, use thin hairline dividers, reduce the number of visible elements per screen, and add a slow fade-in as the user scrolls.
```

**Sección de proceso más elegante:**

```
Redesign the "Proceso" section as 4 minimal numbered steps with large light-gray numbers (01–04), a short title and one line each. Horizontal on desktop, stacked on mobile.
```

**Versión mobile:**

```
Optimize for mobile: single column, large tap targets, sticky WhatsApp/Contact button at the bottom, and make the hero headline scale down gracefully.
```

**Cambiar el acento de color (si querés probar):**

```
Try the accent color as a warm terracotta (#B5532F) instead of green, keep everything else the same. Show me the version.
```

---

## 3. Variantes de titular para el hero (elegí la que más te guste)

- "Sitios web que hacen que tu negocio se vea tan bueno como es."
- "Tu negocio merece una web a su altura."
- "Diseño webs que venden, no que solo se ven lindas."
- "Presencia online profesional, sin complicarte."

---

## 4. Cuando termines en Stitch

1. Exportá el código y pasámelo: lo afino y lo dejamos listo.
2. Deploy gratis en **Vercel** o **Netlify** con un dominio propio (ej. `tunombre.com` o `tunombre.uy`).
3. Ese link es tu "carta de presentación": va en tu firma de email, tu bio de Instagram y en los mensajes a los 30 prospectos.

> Doble beneficio: cuando hagas las maquetas de los prospectos, sumalas a la sección "Conceptos" de tu propio sitio. Tu portafolio se llena solo mientras prospectás.
