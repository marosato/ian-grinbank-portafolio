# Memoria del proyecto

## Identidad y objetivo verificables

El sitio comunica los servicios y trabajos de Ian Grinbank. El contenido visible lo describe como “Editor de video, creador de contenido y analista de marketing” y afirma más de seis años de experiencia. Esa afirmación forma parte del copy del sitio; no hay documentación adicional que la valide de forma independiente.

El idioma del documento es `es-AR`. La propuesta central es adaptar la edición audiovisual al canal de publicación: redes, eventos, pantallas LED, producto y comunicación institucional/comercial.

## Contenido actual

La página tiene estas áreas:

- Encabezado sticky con marca “IG”, navegación por anclas y selector de tema.
- Hero con retrato, presentación y accesos a trabajos, correo e Instagram.
- “Sobre mí”, con enfoque narrativo y experiencia declarada.
- “Marcas”, con Griller, Prina Argentina y Cartas Coleccionables.
- “Trabajos”, con siete piezas externas alojadas en Google Drive:
  - tres de Prina Argentina;
  - cuatro de Cartas Coleccionables.
- “Servicios”, con cuatro ofertas: videos para redes, contenido para marcas, eventos/pantallas LED y versiones multicanal.
- “Contacto”, mediante WhatsApp, correo e Instagram.
- Footer descriptivo.

## Datos y destinos incorporados en el código

- Correo: `iandanielgrinbank@gmail.com`.
- WhatsApp: `https://wa.me/5491158859986`.
- Instagram personal: `https://www.instagram.com/ian.grinbank/`.
- Griller: web e Instagram `griller.ba`.
- Prina Argentina: web, Instagram y LinkedIn.
- Cartas Coleccionables: Instagram `cartas.coleccionables`.
- Siete IDs de Google Drive enlazados desde el HTML se usan tanto para la vista como para miniaturas.

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

## Stack real

- HTML5 semántico.
- CSS3 nativo: custom properties, grid, flexbox, media queries, transiciones, `clamp`, `aspect-ratio`, `backdrop-filter`.
- JavaScript ES6+ nativo embebido.
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

- Sitio funcionalmente contenido en dos archivos de texto y seis imágenes.
- Rama `main` sincronizada con `origin/main` antes de crear esta memoria.
- Último trabajo registrado: incorporación y ajuste de metadatos/imagen social.
- No había cambios locales al iniciar la auditoría.
- Esta sesión agrega únicamente documentación bajo `.codex/`.
- No se modificó lógica, diseño, arquitectura ni dependencias.

## Calidad y limitaciones verificadas

- No hay pruebas automatizadas, lint, formateador, CI ni scripts de validación.
- No hay documentación de ejecución o despliegue previa.
- Parte del contenido depende de hosts externos.
- Los QR están versionados pero no usados en la página.
- Hay selectores CSS sin elementos HTML correspondientes: `.editor-panel`, `.panel-dot`, `.timeline` y `.portfolio-intro`.
- La navegación móvil se oculta por completo a menos de 980 px; no existe menú alternativo, aunque la página sigue siendo desplazable.
- Las secciones `.reveal` parten con `opacity: 0`; no hay fallback para JavaScript deshabilitado o fallo/no soporte de `IntersectionObserver`.
- No hay tratamiento CSS de `prefers-reduced-motion`.
- La navegación activa inicia su reducción en `#sobre-mi`, por lo que puede marcar “Sobre mí” incluso mientras el hero está activo.
- En la validación del despliegue del 2026-07-25, abrir directamente `/#contacto` desplazó la página hasta esa sección, pero `#contacto.reveal` permaneció sin `is-visible` y la navegación activa marcó `#sobre-mi`.

## Desconocidos

- Requisitos originales y aprobación del contenido: **Pendiente de confirmar**.
- Métricas o analytics: no existen en el código; necesidad futura **Pendiente de confirmar**.
- Política de privacidad/cookies: no está implementada; necesidad legal **Pendiente de confirmar**.
- Compatibilidad objetivo de navegadores/dispositivos: **Pendiente de confirmar**.
- Flujo de despliegue y dominios definitivos: **Pendiente de confirmar**.
- Licencia del código y derechos de uso de fotos, logos, videos y copy: **Pendiente de confirmar**.
- Backlog anterior o errores reportados por usuarios: no existe documentación; **Pendiente de confirmar**.
