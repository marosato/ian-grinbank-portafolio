# Memoria del proyecto

## Identidad inmutable salvo instrucción explícita

El nombre y título del portafolio es `Ian Grinbank | Portafolio`. El cliente indicó expresamente que no debe modificarse salvo nueva solicitud suya.

La URL canónica es `https://ian-grinbank-portafolio.vercel.app/`. Para compartir en aplicaciones con caché de previews se usa actualmente `https://ian-grinbank-portafolio.vercel.app/?v=4`.

## Identidad y objetivo verificables

El sitio comunica los servicios y trabajos de Ian Grinbank. La jerarquía profesional definida por el cliente es “Analista de Marketing, Content Creator y Edición de video”. El contenido visible afirma más de seis años de experiencia; esa afirmación ya existía y fue ratificada en el brief, pero no hay documentación adicional que la valide de forma independiente.

El idioma del documento es `es-AR`. La propuesta central es adaptar la edición audiovisual al canal de publicación: redes, eventos, pantallas LED, producto y comunicación institucional/comercial.

## Contenido actual

La página tiene estas áreas:

- La navegación principal usa una animación de 850 ms con easing cúbico y respeta `prefers-reduced-motion`.
- “Perfil” usa tres pestañas verticales que actualizan un único panel de detalle a la derecha.

- Encabezado sticky con marca “IG”, navegación por anclas, menú móvil y selector de tema.
- Hero con retrato, presentación y accesos a trabajos, correo e Instagram.
- “Sobre mí”, con enfoque narrativo y experiencia declarada.
- “Marcas”, con Griller, Prina Argentina y Cartas Coleccionables. Sus títulos enlazan al sitio oficial cuando existe; Cartas Coleccionables enlaza a Instagram. Los accesos inferiores son botones con SVG.
- “Trabajos”, con siete piezas alojadas en Google Drive y reproducidas dentro de un modal:
  - tres de Prina Argentina;
  - cuatro de Cartas Coleccionables.
- “Servicios”, con videos para redes, contenido para marcas, contenido audiovisual para pantallas LED y eventos, y adaptaciones multicanal.
- “Soluciones integrales”, sobre planificación, coordinación de equipamiento/proveedores y contenido final.
- “Contacto”, mediante WhatsApp, correo e Instagram.
- Footer descriptivo.

## Datos y destinos incorporados en el código

- Correo: `iandanielgrinbank@gmail.com`.
- WhatsApp: `https://wa.me/5491158859986`.
- Instagram personal: `https://www.instagram.com/ian.grinbank/`.
- Griller: web e Instagram `griller.ba`.
- Prina Argentina: web, Instagram y LinkedIn.
- Cartas Coleccionables: Instagram `cartas.coleccionables`.
- Siete IDs de Google Drive centralizados en `app.js` generan miniatura, fuente MP4 directa y enlace de respaldo.

**Pendiente de confirmar:** vigencia, permisos públicos y propiedad de todos los enlaces externos y datos de contacto.

## Comportamiento implementado

- Scroll suave y compensación para el encabezado sticky.
- Navegación activa calculada según la posición vertical de las secciones.
- Aparición progresiva de secciones mediante `IntersectionObserver`.
- Modo oscuro alternado con botón accesible; guarda `dark` o `light` bajo la clave `ian-theme` de `localStorage`.
- Efecto 3D leve sobre el retrato con eventos de puntero.
- Hover/focus en enlaces, botones, tarjetas y miniaturas.
- Responsive mediante breakpoints CSS en 980 px y 640 px.
- Metadatos Open Graph y Twitter para compartir.
- Modal accesible con reproductor Drive `/preview`, carga diferida, controles, Escape, cierre por backdrop, bloqueo de scroll, foco restaurado y fallback. La abstracción mantiene soporte para `<video>` nativo futuro.
- Menú responsive accesible bajo 900 px.
- Fallback de visibilidad para `IntersectionObserver`, hash directo y movimiento reducido.

## Stack real

- HTML5 semántico.
- CSS3 nativo: custom properties, grid, flexbox, media queries, transiciones, `clamp`, `aspect-ratio`, `backdrop-filter`.
- JavaScript ES6+ nativo en `app.js`.
- Manrope provisional cargada desde Google Fonts con fallbacks de sistema y token `--font-main`.
- Recursos raster PNG/JPEG.
- Dependencias runtime externas solo por contenido: logos remotos, miniaturas/videos de Google Drive y enlaces a sitios/redes.
- Hosting observado: Vercel. La URL declarada respondió correctamente el 2026-07-25; su condición de entorno canónico y el flujo de despliegue siguen **Pendiente de confirmar**.

No hay evidencia de Next.js ni de otro framework aunque `.gitignore` contiene reglas genéricas para Next.js, Node, Yarn, TypeScript, Vercel y Wrangler.

## Recursos locales verificados

| Archivo | Dimensiones | Uso actual |
|---|---:|---|
| `ian-daniel-grinbank.png` | 928 × 1152 | Retrato del hero |
| `logo-cartas-coleccionables.jpg` | 650 × 650 | Logo de tarjeta de marca |
| `social-preview.jpg` | 1200 × 630 | Imagen Open Graph/Twitter |
| `qr-griller.jpeg` | 1080 × 1419 | Sin referencia en HTML/CSS |
| `qr-prina-argentina.jpeg` | 1080 × 1419 | Sin referencia en HTML/CSS |
| `qr-cartas-coleccionables.jpeg` | 1080 × 1419 | Sin referencia en HTML/CSS |

Los tres QR muestran accesos de Instagram para las marcas indicadas por sus nombres.

## Estado actual al 2026-07-25

- Sitio funcionalmente contenido en tres archivos de código y seis imágenes.
- Rama `main` sincronizada con `origin/main` antes de crear esta memoria.
- Último trabajo registrado: incorporación y ajuste de metadatos/imagen social.
- No había cambios locales al iniciar la auditoría.
- Esta sesión agrega únicamente documentación bajo `.codex/`.
- La actualización visual de 2026-07-25 modifica diseño y comportamiento sin agregar paquetes ni framework.

## Calidad y limitaciones verificadas

- No hay pruebas automatizadas, lint, formateador, CI ni scripts de validación.
- No hay documentación de ejecución o despliegue previa.
- Parte del contenido depende de hosts externos.
- Los QR están versionados pero no usados en la página.
- Hay selectores CSS sin elementos HTML correspondientes: `.editor-panel`, `.panel-dot`, `.timeline` y `.portfolio-intro`.
- Los componentes renderizados desde `app.js` requieren JavaScript para mostrar marcas, trabajos y servicios.
- Las fuentes de video siguen dependiendo de permisos y disponibilidad de Google Drive.
- La revisión local automatizada cubrió 1440, 1280, 1024, 768, 390 y 360 px, además del modal, menú, tema, hash y consola.

## Desconocidos

- Requisitos originales y aprobación del contenido: **Pendiente de confirmar**.
- Métricas o analytics: no existen en el código; necesidad futura **Pendiente de confirmar**.
- Política de privacidad/cookies: no está implementada; necesidad legal **Pendiente de confirmar**.
- Compatibilidad objetivo de navegadores/dispositivos: **Pendiente de confirmar**.
- Flujo de despliegue y dominios definitivos: **Pendiente de confirmar**.
- Licencia del código y derechos de uso de fotos, logos, videos y copy: **Pendiente de confirmar**.
- Backlog anterior o errores reportados por usuarios: no existe documentación; **Pendiente de confirmar**.
