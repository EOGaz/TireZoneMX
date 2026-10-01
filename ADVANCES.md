# TireZoneMX Landing Page - Log & Advances

## Project Overview
Prototipo de Landing Page para la empresa de llantas **TireZoneMX**. Diseñada con una estética moderna fluida que alterna secciones en gris oscuro (`#18181b` / `#09090b`) y blanco (`#FFFFFF`) para romper la monotonía visual y resaltar cada sección de forma orgánica.

---

## Technical Stack Installed
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (`@tailwindcss/vite`), Custom CSS tokens (`src/index.css`)
- **Icons**: `lucide-react`
- **Marquee Animation**: CSS Infinite Keyframe animation for brands

---

## Completed Advances (Log)
- [x] **Hero Banner Full-Screen con Gradientes Integrados**:
  - La imagen Off-Road abarca toda la pantalla sin segmentaciones ni cortes tipo presentación.
  - Gradiente progresivo a gris oscuro hacia los bordes y el menú superior.
  - Título y slogan integrados armónicamente en la parte superior sin tapar el vehículo.
  - Botones principales ubicados limpiamente en la parte inferior sobre un banner traslúcido.
  - Removidas referencias explícitas al modelo del vehículo.
- [x] **Alternancia Dinámica de Fondos por Sección**:
  1. *Hero Banner*: Imagen Full Screen + Gradientes de gris oscuro.
  2. *Carrusel de Marcas*: Fondo gris oscuro (`#18181b`) con logos en rectángulos blancos redondeados.
  3. *Sobre Nosotros*: Fondo blanco luminoso (`#FFFFFF`) con tarjetas limpias y acentos rojos.
  4. *Tipos de Llantas*: Fondo gris oscuro industrial (`#09090b`) para destacar la potencia agrícola e industrial.
  5. *Contacto*: Fondo gris oscuro profundo con tarjetas de formulario integradas.
- [x] **Logos de Marcas**: Rectángulos blancos con sombras suaves flotando en el carrusel infinito (*Maxxis, Continental, Firestone, BKT, Sailun, etc.*).
- [x] **Formulario de Contacto en la Parte Inferior**: Todos los campos originales conservados (*Nombre*, *Medidas*, *Empresa*, *Marcas*, *Correo*, *Comentarios*).
- [x] **Compilación y Servidor Local**: Proyecto compilado y ejecutándose en `http://localhost:5173`.

- [x] **Rediseño "Grafito Industrial" (octubre 2026)**, investigado y votado con inspo:
  - Paleta clara tipo suizo (`#f3f3ef`) con bloques oscuros, rojo `#d71920` solo en acciones, tipografía Inter Tight / Inter / JetBrains Mono (sin cursivas).
  - Hero fijo con Raptor R derrapando en arena (`public/hero-raptor-r.jpg`, generada con IA) y barra "Cotiza por medida".
  - Marcas a color sin bordes, catálogo "Sectores con huella", sección "Lee tu medida" (decodificador), beneficios con ficha técnica y cobertura, números con llanta 3D (three.js, carga diferida), cómo funciona en tarjetas apiladas con animaciones en loop, testimonios en columnas, FAQ, contacto en 2 pasos y footer nuevo.
  - Animaciones de entrada en todas las secciones; respetan `prefers-reduced-motion`.
  - Datos de negocio en `src/data.ts`. **Placeholder por confirmar:** teléfono, años, medidas en stock, tiempos de entrega, horario y testimonios (personas ficticias).

---

## Next Planned Advances
- [ ] Conectar formulario con backend o API de correo (EmailJS / SendGrid).
- [x] Buscador por medida (barra del hero + decodificador). Falta conectarlo a un inventario real.
- [ ] Reemplazar datos y testimonios placeholder por los reales.
- [ ] Fotos propias (almacén, equipo, entregas).
