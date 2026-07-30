# 🏗️ FAKECC S.A.C. - Sitio Web Corporativo

**Estado:** ✅ Plantilla lista (falta agregar imágenes y datos de proyectos)
**Versión:** 1.0.0
**Tecnología:** HTML5 + CSS3 + JavaScript Vanilla
**Responsive:** 100% Mobile-First (375px → 1920px)
**Estilo:** Azul Marino Profundo · Gris Plateado · Oro/Bronce Cepillado

---

## 📋 Estructura de Archivos

```
fakecc-web/
├── index.html              # Página principal (one-page)
├── css/
│   └── styles.css         # Estilos (mobile-first, variables CSS)
├── js/
│   ├── main.js            # Slider, modal, menú, formulario
│   ├── config.js          # Datos centralizados (EDITA AQUÍ)
│   └── projects.js        # Renderizado dinámico de proyectos
├── images/                # ⚠️ AGREGAR TUS FOTOS AQUÍ
│   ├── logo.png           # Logo FAKECC (pendiente)
│   ├── hero_1.jpg         # Foto slider 1 (pendiente)
│   ├── hero_2.jpg         # Foto slider 2 (pendiente)
│   └── hero_3.jpg         # Foto slider 3 (pendiente)
├── docs/
│   └── CONSTANCIA_RNP_FAKECC.pdf   # ⚠️ Subir tu constancia RNP
└── README.md              # Este archivo
```

---

## 🚀 Cómo Usar

### 1️⃣ Prueba local

No requiere dependencias ni compilación:

```bash
cd fakecc-web
python3 -m http.server 8000
# Accede a: http://localhost:8000
```

### 2️⃣ Publicar en Cloudflare Pages (GitHub)

```bash
git init
git add .
git commit -m "Sitio FAKECC v1.0"
git remote add origin https://github.com/TU_USUARIO/fakecc-web.git
git push -u origin main
```

Luego en Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
- Framework preset: `None`
- Build command: (vacío)
- Output directory: `/`

Finalmente conecta tu dominio comprado en **Custom domains**.

---

## ✏️ Checklist de Personalización

### A. Imágenes (manual, igual que en el proyecto anterior)

| Archivo | Uso | Tamaño recomendado |
|---------|-----|--------------------|
| `images/logo.png` | Header | 1000x1000px PNG sin fondo |
| `images/hero_1.jpg` | Slide 1 | 1920x1080px JPG |
| `images/hero_2.jpg` | Slide 2 | 1920x1080px JPG |
| `images/hero_3.jpg` | Slide 3 | 1920x1080px JPG |
| `images/proyecto_X.jpg` | Galería | 1200x800px JPG |

💡 Según la guía de estilo: fotografía arquitectónica de alta calidad, paleta contenida (grises, azules, tonos neutros). Nada de stock genérico.

⚠️ El logo generado por IA tiene errores de texto ("CONETRUETORA", "FAKEC C").
El sitio muestra el nombre correcto en texto HTML junto al logo, así que puedes
usar solo el isotipo (las dos "C" entrelazadas) recortado, sin el texto del logo.

### B. Constancia RNP

Sube tu PDF a `docs/CONSTANCIA_RNP_FAKECC.pdf` (los 4 botones de la sección
Registros apuntan a ese archivo).

### C. Proyectos

Abre `js/config.js` → sección `projects`. Hay 3 plantillas marcadas con
`[EDITAR]`. Rellena los datos reales y agrega los que necesites:

```javascript
{
    nombre: 'Nombre del Proyecto',
    cliente: 'Municipalidad Distrital de ...',
    ubicacion: 'Distrito, Provincia, Región',
    ano: 2025,
    descripcion: 'Descripción breve (2-3 líneas)',
    rubro: 'Obras Viales', // o Saneamiento, Edificaciones, etc.
    monto: 'S/ 150,000.00', // opcional, se oculta si es 0.00
    image: 'images/foto-proyecto.jpg' // o '[AGREGAR FOTO]'
}
```

Guarda → aparece automáticamente en la galería.

### D. Formulario (Formspree)

1. Crea cuenta en https://formspree.io/ y un nuevo formulario
2. En `js/main.js` busca `YOUR_FORM_ID` y reemplázalo con tu ID
3. Confirma tu email en Formspree

### E. Mapa

El iframe actual usa una búsqueda genérica de la dirección. Para el mapa
exacto: Google Maps → busca tu local → Compartir → Insertar mapa → copia
el iframe y reemplázalo en `index.html` (sección `map__container`).

### F. Redes sociales

En `index.html`, footer → reemplaza los `href="#"` con tus URLs reales.

---

## 🎨 Personalizar Colores

Archivo: `css/styles.css` → Variables CSS (primeras líneas)

```css
:root {
    --primary: #0A2240;       /* Azul marino profundo */
    --primary-light: #14406B; /* Azul claro */
    --silver: #C6CCD4;        /* Gris plateado */
    --silver-light: #F4F5F7;  /* Fondo plateado claro */
    --accent: #B08D57;        /* Oro / bronce cepillado */
    --accent-light: #C9A76E;  /* Bronce claro */
}
```

El degradado `--brushed-bronze` es el elemento firma del diseño (líneas
divisorias metálicas en stats, footer, títulos y hover de tarjetas).

---

## 📄 Secciones del Sitio

| Sección | Descripción |
|---------|-------------|
| **Header** | Logo + nombre con kerning amplio, navegación sticky |
| **Hero Slider** | 3 slides, eslogan "Construyendo el futuro de la inversión" |
| **Estadísticas** | 10+ años, S/ 900 Mil capacidad, 5 especialidades Cat. A, RNP 83613 |
| **Quiénes Somos** | Presentación + Modal con tabs (Presentación, Misión, Visión, Datos, RNP) |
| **Servicios** | 6 líneas: viales, edificaciones, saneamiento, riego, energía, consultoría |
| **Proyectos** | Galería dinámica desde config.js (escalable) |
| **Registros** | RNP: Ejecutor, Consultor, Proveedor de Bienes y Servicios |
| **Contacto** | Formulario Formspree + info + Google Maps |
| **Footer** | Enlaces + redes + copyright |
| **WhatsApp** | Botón flotante con mensaje pre-configurado |

---

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px+

---

## 🐛 Troubleshooting

- **Las fotos no se ven:** verifica que existan en `/images` con los nombres exactos (`hero_1.jpg`, etc.)
- **El formulario no envía:** ¿reemplazaste `YOUR_FORM_ID` y confirmaste tu email en Formspree?
- **Cambiar velocidad del slider:** en `js/main.js`, busca `6000` (milisegundos)
- **El modal no abre:** revisa la consola del navegador (F12)

---

## 🔧 Tecnologías

- HTML5 semántico + CSS3 (variables, grid, flexbox)
- JavaScript Vanilla (sin librerías)
- Google Fonts: Montserrat (títulos) + Lato (cuerpo)
- Font Awesome 6.4 | Google Maps | Formspree

---

## 📈 Próximos Pasos

- [ ] Agregar logo e imágenes reales
- [ ] Rellenar proyectos en config.js
- [ ] Subir constancia RNP a /docs
- [ ] Configurar Formspree ID
- [ ] Repositorio GitHub + Cloudflare Pages
- [ ] Conectar dominio + Google Search Console

**Versión:** 1.0.0 | **Julio 2026** | **Consultoría, Constructora e Inversiones FAKECC S.A.C.**
