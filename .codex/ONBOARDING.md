# Onboarding

## Qué es este proyecto

Portafolio audiovisual en español argentino de Ian Grinbank, presentado como editor de video, creador de contenido y analista de marketing. Es un sitio estático de una sola página con información profesional, marcas, siete trabajos enlazados, servicios y vías de contacto.

## Puesta en contexto rápida

- Entrada única: `index.html`.
- Estilos: `styles.css`.
- JavaScript: bloque inline al final de `index.html`.
- Recursos locales: `assets/`.
- No hay backend, base de datos, API propia ni sistema de autenticación.
- No hay `package.json`, lockfile, framework, bundler, TypeScript, pruebas ni scripts.
- No hay archivos `.env` ni ejemplos de variables de entorno.
- No hay `README.md` ni otra documentación anterior a `.codex/`.
- El navegador es el único runtime requerido por el código.

## Cómo ejecutarlo localmente

El código no define un comando oficial. Puede abrirse `index.html` directamente en un navegador. Para reproducir mejor un hosting web y evitar diferencias del esquema `file:`, puede servirse la raíz con cualquier servidor HTTP estático disponible, pero el repositorio no prescribe uno.

**Pendiente de confirmar:** comando o herramienta local preferida por la persona mantenedora.

## Recorrido del repositorio

```text
.
├── .codex/                   Memoria persistente para futuras instancias de Codex
├── assets/
│   ├── ian-daniel-grinbank.png
│   ├── logo-cartas-coleccionables.jpg
│   ├── qr-cartas-coleccionables.jpeg
│   ├── qr-griller.jpeg
│   ├── qr-prina-argentina.jpeg
│   └── social-preview.jpg
├── .gitignore
├── index.html
└── styles.css
```

## Flujo de trabajo antes de editar

1. Leer toda la memoria de `.codex/`.
2. Ejecutar `git status --short --branch`.
3. Confirmar rama y `HEAD`.
4. Leer completos `index.html` y `styles.css`; son pequeños y están fuertemente acoplados por clases.
5. Revisar que cualquier cambio mantenga enlaces internos, estilos responsive, modo oscuro y accesibilidad.
6. Probar al menos anchos de escritorio, tableta y móvil si se altera presentación o interacción.
7. Revisar consola del navegador y enlaces locales.
8. Actualizar la memoria persistente con hechos, no con suposiciones.

## Git observado

- Remoto: `origin` → `https://github.com/marosato/ian-grinbank-portafolio.git`.
- Rama observada: `main`, siguiendo `origin/main`.
- `HEAD` auditado: `8cb8c15` (`Update social preview metadata`).
- Estado inicial de esta auditoría: limpio, `main...origin/main`.
- Todo el historial visible consta de 11 commits del 2026-07-24.
- Autora y committer de esos commits: Macarena Rosato.

## Despliegue

El HTML declara `https://ian-grinbank-portafolio.vercel.app/` en Open Graph y usa esa misma base para la imagen social. La URL respondió y mostró el portafolio durante la validación del 2026-07-25. `.gitignore` ignora `.vercel`, pero no existe configuración de Vercel versionada.

**Pendiente de confirmar:** que esa URL sea el entorno canónico, quién administra Vercel y cuál es el flujo exacto de despliegue.

## Validación disponible

No existen scripts automatizados. La validación actual debe ser manual:

- carga de HTML y CSS;
- consola sin errores;
- navegación por anclas;
- modo claro/oscuro y persistencia en `localStorage`;
- animaciones al hacer scroll;
- efecto tilt con puntero;
- visualización responsive;
- carga de imágenes locales y remotas;
- apertura de enlaces de Google Drive, redes, correo y WhatsApp;
- metadatos Open Graph/Twitter.
