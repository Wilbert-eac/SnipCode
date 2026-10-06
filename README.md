# ⚡ SnipCode — Generador y Editor de Snippets de Código Estilizados

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <strong>Transforma tu código en capturas visuales de alta resolución listas para Twitter / X, LinkedIn, Instagram o documentación técnica en segundos.</strong>
</p>

---

## ✨ Características Principales

### 💻 1. Editor con Resaltado de Sintaxis en Tiempo Real
- **Soporte Multi-lenguaje:** TypeScript, JavaScript, Python, Rust, Go, CSS/Tailwind, HTML5, SQL, JSON, Bash, C++, Java, etc.
- **Tipografías de Desarrollo Reales:** `JetBrains Mono`, `Fira Code`, `Source Code Pro`, `Space Grotesk` con ligaduras activadas.
- **Resaltado Interactivo de Líneas:** Haz clic en los números de línea para destacar fragmentos clave de código.
- **Control Total:** Tamaño de fuente ajustable (12px - 24px), interlineado configurable, sangría con `Tab` e información de líneas/caracteres.

### 🎨 2. Fondos Vibrantes, Mesh & Gradientes 3D
- **+12 Degradados Modernos:** Hyper Sunset, Deep Aurora, Velvet Orchid, Cyber Matrix, Midnight Tokyo, Emerald Glade, Synthwave '84, etc.
- **Patrones Texturizados:** Puntos (*Dots Matrix*), Cuadrícula (*Grid*), Isométrico y Circuitos Tech.
- **Formatos de Redes Sociales:**
  - Auto (Ajustado al contenido)
  - `16:9` (Twitter / X y LinkedIn)
  - `1:1` (Instagram Post)
  - `4:5` (Instagram Retrato)
  - `9:16` (Stories / Reels / TikTok)
- Control de Padding interactivo (0 a 128px) y radio de redondeo de esquinas.

### 🪟 3. Estilos de Ventana & Sombras 3D
- **Controles de Ventana:** macOS Traffic Lights (🔴 🟡 🟢), Windows 11 Glass, Glass Tabs, Terminal Retro y Minimalista.
- **Efectos de Sombra y Profundidad:** Suave, Media, Profunda, **3D Flotante** y **Resplandor Neón (Glow)**.
- **Borde Cristalino (Border Glow):** Reflejo de luz dinámico alrededor de la ventana de código.
- Barra de título con nombre de archivo editable.

### 👤 4. Branding & Tarjeta de Autor
- Firma personalizable al pie con tu Nombre, `@usuario` (Twitter/GitHub) y avatar.
- Insignia de estadísticas de código y marca de agua SnipCode.

### ⚡ 5. Exportación Ultra Rápida
- 📋 **Copiar Imagen al Portapapeles (PNG):** Pega directamente con `Ctrl+V` en redes sociales, Discord o Slack sin guardar archivos.
- 💾 **Descargar PNG de Alta Resolución:** Opciones de escala `1x SD`, `2x HD` y `3x 4K Retina`.
- 📐 **Descargar SVG:** Gráficos vectoriales nítidos para diseño web.
- 🔗 **Compartir Enlace:** Guarda todo el estado y snippet en el URL Hash para compartirlo al instante.
- 🎉 **Celebración con Confetti** al exportar.

---

## ⌨️ Atajos de Teclado (Shortcuts)

| Atajo | Acción |
| :--- | :--- |
| `Ctrl + S` / `Cmd + S` | Descargar imagen PNG en alta resolución |
| `Alt + C` / `Ctrl + Shift + C` | Copiar imagen PNG al portapapeles |
| `Alt + R` | Generar estilo y paleta aleatoria sorpresa |
| `Alt + P` | Abrir galería de plantillas / presets |
| `Tab` | Indentar 2 espacios dentro del editor de código |
| `Clic en línea` | Resaltar o alternar línea destacada |
| `Esc` | Cerrar modales y menús |

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js** >= 18.0.0
- **npm**, **pnpm** o **yarn**

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/snipcode.git
   cd snipcode
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en [http://localhost:5173](http://localhost:5173).

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Resaltado de Sintaxis:** [Prism.js](https://prismjs.com/)
- **Renderizado de Imagen:** [html-to-image](https://github.com/bubkoo/html-to-image)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Micro-animaciones:** [canvas-confetti](https://github.com/catdad/canvas-confetti)

---

## 📦 Despliegue Rápido

### En Vercel o Netlify
Simplemente importa el repositorio en tu cuenta de Vercel o Netlify. Los comandos de compilación se detectan automáticamente:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
