# Arquitectura

## Modelo general

Aplicación web estática de una sola página, sin compilación ni capa de servidor.

```text
Navegador
  ├── index.html
  │   ├── estructura y contenido
  │   ├── metadatos sociales/SEO
  │   └── JavaScript inline de interacción
  ├── styles.css
  │   ├── tokens de color claro/oscuro
  │   ├── layout y componentes
  │   ├── estados interactivos
  │   └── responsive
  ├── assets locales
  └── recursos y destinos externos
      ├── logos de griller.com.ar y prina.net
      ├── miniaturas y videos de Google Drive
      ├── redes sociales y sitios de marcas
      └── WhatsApp y correo
```

## Componentes del documento

`index.html` concentra:

- `<head>`: charset, viewport, título, descripción, Open Graph, Twitter Card y stylesheet.
- `<header>`: marca, navegación y toggle de tema.
- `<main>`:
  - `#inicio`;
  - `#sobre-mi`;
  - `#proyectos`;
  - `#portfolio`;
  - `#servicios`;
  - `#contacto`.
- `<footer>`.
- `<script>` inline.

No hay enrutamiento; las rutas internas son IDs de sección.

## Capa de presentación

`styles.css` define un sistema visual mediante variables:

- modo claro en `:root`;
- sobrescritura oscura en `body.dark-mode`;
- tipografía serif del sistema para títulos y sans-serif del sistema para cuerpo;
- layout principal con CSS Grid/Flexbox;
- componentes recurrentes: botones, tarjetas, tags y enlaces;
- breakpoints:
  - `max-width: 980px`: navegación oculta y layouts a una columna;
  - `max-width: 640px`: ajustes de padding, marca, botones y servicios.

No se descargan fuentes ni bibliotecas CSS.

## Capa de comportamiento

El script no exporta módulos y se ejecuta después del DOM:

1. Crea un `IntersectionObserver` y agrega `is-visible` a `.reveal`.
2. Reúne enlaces `.nav a`, resuelve sus secciones y calcula el activo en cada scroll.
3. Lee `localStorage["ian-theme"]`; aplica `dark-mode` si vale `dark`.
4. Mantiene `aria-pressed` y `aria-label` del botón de tema.
5. Persiste el tema al hacer clic.
6. Aplica variables CSS de rotación al hero ante movimiento/salida del puntero.

## Datos y estado

No hay modelo de datos separado. El contenido está hardcodeado en HTML.

El único estado persistente del cliente es la preferencia de tema en `localStorage`. No sale del dispositivo ni se sincroniza.

## Integraciones externas

No existen SDKs ni llamadas `fetch`. La integración se limita a URLs:

- `<img>` remoto para logos y miniaturas;
- `<a>` para Google Drive, webs, redes, WhatsApp y `mailto:`;
- URLs absolutas en metadatos sociales.

Esto reduce complejidad, pero hace que parte de la presentación y del portafolio dependa de disponibilidad, permisos y políticas de terceros.

## Build, configuración y entornos

- Build: ninguno.
- Gestor de paquetes: ninguno.
- Variables de entorno: ninguna.
- Configuración runtime: ninguna.
- Configuración de hosting versionada: ninguna.
- Tests/CI: ninguno.

El `.gitignore` parece genérico y contempla herramientas que el proyecto no usa. No es evidencia de que esas herramientas formen parte del stack.

## Límites arquitectónicos que deben preservarse

Hasta que una decisión explícita diga lo contrario:

- mantener el proyecto desplegable como archivos estáticos;
- evitar introducir dependencias para cambios que HTML/CSS/JS nativo resuelvan con claridad;
- conservar la semántica y accesibilidad existentes;
- no duplicar contenido entre HTML y JavaScript sin necesidad;
- tratar recursos externos como dependencias susceptibles a rotura;
- si cambia la URL canónica, actualizar en conjunto `og:url`, `og:image`, `og:image:secure_url` y `twitter:image`.
