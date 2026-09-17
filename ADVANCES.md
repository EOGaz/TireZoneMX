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

---

## Next Planned Advances
- [ ] Conectar formulario con backend o API de correo (EmailJS / SendGrid).
- [ ] Agregar buscador/filtrador dinámico por medida de llanta en tiempo real.
