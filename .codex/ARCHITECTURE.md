# Arquitectura

## Modelo general

Aplicación web estática de una sola página, sin compilación ni capa de servidor.

```text
Navegador
  ├── index.html
  │   ├── estructura y contenido
  │   ├── metadatos sociales/SEO
  │   └── contenedores para componentes renderizados
  ├── app.js
  │   ├── datos de marcas, proyectos y servicios
  │   ├── funciones de renderizado reutilizables
  │   ├── modal de video y gestión de foco
  │   └── navegación, tema, menú y animaciones
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
- modal accesible de video al final del `<body>`.
- `<script src="app.js" defer>`.

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

`app.js` no exporta módulos y se ejecuta con `defer`:

1. Renderiza marcas, siete proyectos y servicios desde estructuras de datos.
2. Crea un `IntersectionObserver` con fallback y agrega `is-visible` a `.reveal`.
3. Calcula la navegación activa incluyendo `#inicio` y habilita menú móvil.
4. Lee y persiste `localStorage["ian-theme"]`.
5. Aplica variables CSS de rotación al hero cuando el movimiento está permitido.
6. Abre un único reproductor bajo demanda, actualmente un embed `/preview` de Drive, y mantiene soporte para `<video>` nativo; gestiona Escape, backdrop, foco, scroll y fallback.

## Datos y estado

El contenido estructural está en HTML. Marcas, proyectos y servicios están centralizados como arrays de objetos en `app.js` y se renderizan mediante funciones reutilizables.

El único estado persistente del cliente es la preferencia de tema en `localStorage`. No sale del dispositivo ni se sincroniza.

## Integraciones externas

No existen SDKs ni llamadas `fetch`. La integración se limita a URLs:

- `<img>` remoto para logos y miniaturas;
- reproductor `/preview` de Google Drive con soporte preparado para fuentes MP4 nativas y enlaces de respaldo;
- `<a>` para webs, redes, WhatsApp y `mailto:`;
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
