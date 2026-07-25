# Changelog de trabajo asistido por IA

Este archivo registra tareas realizadas por Codex que cambian el árbol de trabajo. No sustituye al historial de Git.

## 2026-07-25 — Memoria persistente inicial

**Solicitud:** analizar completamente el repositorio y crear un sistema de memoria persistente dentro de `.codex/`.

**Acciones realizadas:**

- Se inventariaron todos los archivos versionados y ocultos relevantes.
- Se leyeron completos `.gitignore`, `index.html` y `styles.css`.
- Se confirmó la ausencia de `README.md`, documentación previa, manifiestos, lockfiles, scripts, configuración de build y ejemplos de entorno.
- Se inspeccionaron dimensiones, peso, contenido visual y referencias de los seis recursos raster.
- Se auditó el estado de Git, rama, remoto y el historial completo de 11 commits.
- Se reconstruyeron stack, arquitectura, funcionalidades, decisiones observables, riesgos, deuda y pendientes.
- Se crearon los nueve documentos de `.codex/`.

**Archivos de aplicación modificados:** ninguno.

**Dependencias modificadas:** ninguna.

**Validación:** inspección estática completa; revisión Git; verificación de referencias; `git diff`, `git diff --check` y estado final se ejecutan al cierre de la sesión.

**Commit/push:** no realizados, por instrucción explícita.

## 2026-07-25 — Revisión de consistencia y preparación de publicación

**Solicitud:** releer la memoria, corregir inconsistencias, validar el proyecto y publicar los cambios.

**Corrección documental:**

- Se eliminó el supuesto problema de mojibake del separador del hero. Una lectura UTF-8 estricta confirmó que el archivo contiene correctamente `U+2022` (`•`); la representación anterior se debía a la decodificación de salida de PowerShell.
- Se dejó de describir los IDs de Google Drive como públicos: el código demuestra que están enlazados, pero sus permisos siguen pendientes de confirmar.

**Validación:**

- Los nueve Markdown se decodifican como UTF-8 estricto.
- Integridad estática: seis IDs únicos, seis anclas internas resueltas, tres referencias locales existentes, llaves CSS balanceadas y cierre HTML presente.
- No se detectaron patrones habituales de secretos.
- La URL declarada de Vercel respondió con el título esperado.
- Cargaron los 11 elementos de imagen del DOM, incluidos logos remotos y siete miniaturas de Google Drive.
- No se observaron warnings ni errores de consola.
- El selector de tema alternó clase, label y estado ARIA correctamente.
- Los estilos responsive observados coincidieron con los breakpoints de 980 px y 640 px.
- Se reprodujo un fallo al entrar directamente a `/#contacto`: la sección quedó sin `is-visible` y la navegación activa señaló `#sobre-mi`.
- El navegador no permitió abrir el árbol local mediante `file://`; la validación visual corresponde al despliegue actualmente publicado.

**Publicación:** fusionada en `main` mediante el PR #1 y el commit de merge `a538f3e`.

## 2026-07-25 — Rediseño audiovisual y tecnológico

**Solicitud:** modernizar el portfolio, priorizar Marketing, Content Creator y Edición de video, mejorar layouts, agregar soluciones integrales y reproducir siete videos dentro del sitio.

**Implementación:**

- Rediseño responsive con Manrope provisional, escala tipográfica fluida y lenguaje visual tecnológico.
- Reescritura comercial del perfil, hero, servicios, soluciones integrales y contacto sin inventar métricas.
- Datos de marcas, proyectos y servicios centralizados en `app.js`.
- Modal accesible con reproductor Drive limpio y diferido, soporte preparado para `<video>` nativo, controles, Escape, backdrop, foco, bloqueo de scroll y fallback.
- Grillas adaptativas, última pieza expandida, menú móvil y mejoras de contraste/tamaños táctiles.
- Correcciones para hash directo, navegación activa, falta de `IntersectionObserver` y movimiento reducido.

**Assets pendientes:** logo azul de Prina, SVG oficial de Cartas Coleccionables y fotografía formal seleccionada por Ian.

**Validación:** sintaxis JavaScript, estructura HTML/CSS, referencias locales, ausencia de IDs duplicados, streaming parcial de siete MP4, seis anchos responsive sin overflow, capturas desktop/móvil, siete aperturas de modal, Escape, backdrop, foco, menú, tema, hash directo y consola sin errores.

**Ajuste posterior solicitado por el cliente:**

- El hero recuperó el título “Ian Grinbank”, el texto introductorio y los accesos “Ver trabajos”, “Enviar correo” e “Instagram”.
- Se conservaron la jerarquía profesional “Analista de Marketing • Content Creator • Edición de video” y la lista “REELS • MARCAS • EVENTOS • PANTALLAS LED”.
- Los llamados de los proyectos ahora dicen “Reproducir video”.
- El reproductor de Google Drive recibe `autoplay=1` al abrirse desde una acción del usuario.

**Segunda iteración visual y funcional:**

- El modo oscuro pasó a ser el valor inicial; una preferencia explícita guardada por la persona usuaria continúa teniendo prioridad.
- El nombre del hero ganó escala y composición en dos líneas, y la jerarquía profesional incorporó una barra vertical de acento.
- Las tres especialidades del Perfil se convirtieron en un acordeón accesible con detalle individual, estado ARIA y operación por teclado.
- Se aumentó el tamaño de la navegación principal.
- El modal de trabajos redujo su ancho máximo de 1120 px a 860 px e incorporó navegación circular anterior/siguiente mediante botones laterales y flechas del teclado.
- Servicios abandonó la lista lineal y pasó a una matriz editorial de cuatro tarjetas.

**Validación:** sintaxis JavaScript, `git diff --check`, modo oscuro inicial, ausencia de overflow en escritorio, acordeón exclusivo, rótulos ARIA, cambio real de proyecto y URL con autoplay desde el modal, cierre y devolución de foco, e inspección visual de hero, Perfil, Servicios y reproductor.

**Tercera iteración de interacción:**

- Las flechas laterales del modal ahora son SVG inline con trazo basado en `currentColor`; no dependen de imágenes rasterizadas ni de un color de fondo específico.
- Tras recibir la referencia visual correcta, los SVG se simplificaron a chevrones gruesos y redondeados, sin asta horizontal; el JPG de referencia no se incorporó al repositorio.
- El reproductor nativo preparado para fuentes directas establece el volumen inicial en `0.15`.
- El iframe actual de Google Drive no ofrece una API documentada para imponer ese nivel de volumen desde el sitio; esta limitación queda registrada como pendiente técnico.
- Contacto se convirtió en un selector guiado de cuatro necesidades. La opción elegida actualiza el mensaje de WhatsApp y el asunto/cuerpo del correo, conserva Instagram como canal alternativo y comunica un siguiente paso concreto.

**Validación:** dos SVG con trazo heredado, selector exclusivo con `aria-pressed`, actualización efectiva de URLs codificadas de WhatsApp y correo, ausencia de overflow y revisión visual de Contacto y modal.

**Título protegido y prueba de volumen:**

- El título del documento y los metadatos Open Graph/Twitter quedaron fijados en `Ian Grinbank | Portafolio` por instrucción explícita del cliente.
- Se registró que ese nombre no debe cambiarse sin una nueva indicación explícita.
- Se probaron en el `<video>` real dos variantes directas de Drive (`drive.usercontent.google.com/download` y `drive.google.com/uc?export=download`). Ambas permanecieron en `readyState = 0`, sin duración y activaron el fallback.
- Se restauró `/preview?autoplay=1`, que sí reproduce. El 15 % permanece configurado para fuentes nativas, pero no puede imponerse al iframe cross-origin de Drive.
- Los tamaños obtenidos mediante solicitudes parciales suman 192.880.454 bytes (183,9 MiB); por ese peso no se copiaron los videos al repositorio como solución improvisada.

**Navegación, Perfil y Marcas:**

- Los enlaces del menú ahora usan desplazamiento animado de 850 ms con easing cúbico; con movimiento reducido el salto continúa siendo inmediato.
- Perfil dejó de ser un acordeón: los bullets son pestañas verticales y actualizan un panel único a la derecha, con selección ARIA y navegación por flechas, Inicio y Fin.
- “Explorar trabajos” cambió a “Ver trabajos”.
- Cada nombre de marca enlaza a su sitio oficial o, cuando no existe, a Instagram.
- Los enlaces inferiores de las marcas se rediseñaron como botones compactos con SVG y estados hover/foco.

**Validación:** cambio de panel y `aria-labelledby`, selección exclusiva, URLs primarias correctas para tres marcas, seis botones sociales con SVG, ausencia de overflow y sintaxis JavaScript.

**Vista previa social versionada:**

- Se mantuvo `assets/social-preview.jpg` en 1200 × 630 como imagen horizontal de tarjeta grande.
- La URL destinada a compartir pasó a `https://ian-grinbank-portafolio.vercel.app/?v=5` para invalidar la caché anterior de WhatsApp.
- Open Graph y Twitter apuntan a `social-preview.jpg?v=5`; se agregaron canonical, `og:site_name`, `og:image:url` y `twitter:image:alt`.
- El dominio limpio continúa siendo la URL canónica del sitio.

**Acento azul, especialidad y modal móvil:**

- El sistema de acento naranja se reemplazó por `#0C6D97`; los fondos suaves derivados se ajustaron para modo claro y oscuro.
- El subtítulo naranja integrado en `assets/social-preview.jpg` se recoloreó al azul de marca sin cambiar fotografía, composición ni dimensiones (1200 × 630).
- La jerarquía profesional visible pasó a “Analista de Marketing • Content Creator • Edición de video • Solución Integral de Eventos”, con actualización equivalente en footer y metadatos descriptivos.
- En pantallas de hasta 680 px el modal usa ancho basado en viewport, alto máximo con `dvh`, layout flex y una etapa de video vertical flexible.
- Para dispositivos de hasta 480 px de alto se reduce el header y la etapa usa el alto restante, contemplando celulares en orientación horizontal.
