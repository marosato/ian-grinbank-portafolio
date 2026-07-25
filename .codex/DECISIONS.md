# Registro de decisiones

Este registro reconstruye decisiones observables. Cuando el motivo no está documentado, se evita atribuir intención.

## D-001 — Sitio estático sin toolchain

**Estado:** vigente por evidencia del repositorio.

**Evidencia:** solo existen HTML, CSS, JavaScript nativo y recursos; no hay manifiestos, framework ni scripts de build.

**Consecuencia:** ejecución y despliegue simples; validación, reutilización y automatización dependen de disciplina manual.

**Motivo original:** **Pendiente de confirmar**.

## D-002 — Página única con navegación por anclas

**Estado:** vigente.

**Evidencia:** todas las secciones viven en `index.html` y la navegación usa hashes.

**Consecuencia:** recorrido lineal y ausencia de routing; cada sección depende de IDs estables.

## D-003 — Contenido y datos hardcodeados

**Estado:** vigente.

**Evidencia:** marcas, trabajos, servicios, enlaces y contacto están escritos directamente en HTML.

**Consecuencia:** fácil de desplegar, pero cada actualización requiere editar código y verificar manualmente consistencia.

## D-004 — CSS nativo con temas por custom properties

**Estado:** vigente.

**Evidencia:** variables en `:root` y sobrescritura bajo `body.dark-mode`.

**Consecuencia:** no hay dependencia de UI; el tema se cambia con una clase en `<body>`.

## D-005 — Preferencia de tema local y explícita

**Estado:** vigente.

**Evidencia:** clave `ian-theme` en `localStorage`; solo `dark` activa modo oscuro y el toggle persiste `dark`/`light`.

**Consecuencia:** la preferencia sobrevive recargas en el mismo origen/navegador, pero no usa inicialmente `prefers-color-scheme`.

## D-006 — Videos alojados fuera del repositorio

**Estado:** vigente.

**Evidencia:** los siete trabajos enlazan a Google Drive y sus miniaturas usan el endpoint de thumbnails.

**Consecuencia:** repositorio liviano y sin reproductor propio; disponibilidad y permisos quedan en manos de Google Drive.

**Motivo y permanencia futura:** **Pendiente de confirmar**.

## D-007 — Logos mixtos, locales y remotos

**Estado:** vigente.

**Evidencia:** Cartas Coleccionables usa un JPEG local; Griller y Prina cargan logos desde sus sitios.

**Consecuencia:** tratamiento visual uniforme mediante `.brand-logo`, pero dos tarjetas pueden perder su logo si cambia el host externo.

## D-008 — Imagen social absoluta y versionada por query string

**Estado:** vigente desde los últimos tres commits.

**Evidencia:** `social-preview.jpg` es 1200 × 630; metadatos apuntan a `...?v=3`.

**Consecuencia:** formato apropiado para preview grande y cache-busting manual. La URL queda acoplada al dominio declarado.

## D-009 — Animaciones de aparición y tilt sin biblioteca

**Estado:** vigente.

**Evidencia:** `IntersectionObserver`, pointer events, variables CSS y transiciones.

**Consecuencia:** interacción liviana; faltan fallback explícito y adaptación a movimiento reducido.

## D-010 — Documentación persistente en `.codex`

**Estado:** adoptada el 2026-07-25 por solicitud explícita.

**Evidencia:** los nueve documentos de esta carpeta.

**Consecuencia:** futuras instancias deben validar memoria contra código/Git y mantenerla al día. Esta decisión no cambia la aplicación.

## D-011 — Manrope como tipografía provisional

**Estado:** vigente desde la actualización visual del 2026-07-25.

**Evidencia:** carga desde Google Fonts y token `--font-main` en `styles.css`.

**Consecuencia:** identidad sans serif contemporánea y reemplazo centralizado cuando el cliente defina la familia final.

## D-012 — Datos repetitivos centralizados en JavaScript

**Estado:** vigente.

**Evidencia:** arrays `brands`, `projects` y `services`, con funciones `brandCard`, `projectCard` y `serviceCard`.

**Consecuencia:** actualizar una pieza no requiere duplicar la estructura HTML.

## D-013 — Reproducción diferida y desacoplada con respaldo

**Estado:** vigente.

**Evidencia:** cada proyecto declara un objeto `media`. Con los archivos alojados en Drive se usa `/preview`; el modal también conserva un `<video>` nativo oculto para futuras fuentes directas. La URL se elimina al cerrar y cada proyecto mantiene un enlace de respaldo.

**Consecuencia:** no se descargan siete videos al inicio y la fuente puede reemplazarse por proyecto sin reescribir el modal.

## D-014 — Tema oscuro inicial con preferencia persistente

**Estado:** vigente.

**Evidencia:** `body.dark-mode` está presente en el HTML inicial y `app.js` respeta el valor guardado en `localStorage`.

**Consecuencia:** la primera carga evita un destello claro y comienza en oscuro; una selección manual posterior continúa teniendo prioridad.

## D-015 — Detalle progresivo y composiciones diferenciadas

**Estado:** vigente.

**Evidencia:** el Perfil usa pestañas verticales que actualizan un panel único a la derecha y Servicios una matriz de tarjetas 2 × 2 que pasa a una columna en móvil.

**Consecuencia:** se amplía la información profesional sin mostrarla toda simultáneamente, el contenido cambia en el área indicada por el cliente y se evita repetir la misma estructura visual entre secciones.

## D-019 — Navegación interna con easing propio

**Estado:** vigente.

**Evidencia:** `animateNavigation` interpola el scroll durante 850 ms con easing cúbico y se desactiva cuando existe `prefers-reduced-motion`.

**Consecuencia:** los enlaces principales tienen una transición más gradual sin ignorar preferencias de accesibilidad.

## D-020 — Nombres de marca como enlaces primarios

**Estado:** vigente.

**Evidencia:** `brandCard` selecciona “Sitio web” cuando existe y usa el primer enlace disponible —Instagram para Cartas Coleccionables— como respaldo.

**Consecuencia:** el nombre funciona como acceso oficial sin mostrar URLs, mientras los enlaces inferiores permanecen visibles como botones secundarios.

## D-016 — Navegación circular dentro del modal

**Estado:** vigente.

**Evidencia:** `activeProjectIndex`, `loadModalProject`, botones anterior/siguiente y eventos `ArrowLeft`/`ArrowRight` en `app.js`.

**Consecuencia:** se pueden recorrer los siete trabajos sin cerrar el modal; cada cambio limpia la fuente anterior y carga la nueva con autoplay.

## D-017 — Iconos del modal como SVG inline

**Estado:** vigente.

**Evidencia:** los botones `.modal-nav` contienen SVG con `stroke: currentColor`.

**Consecuencia:** forma, color y fondo pueden modificarse desde CSS sin introducir archivos gráficos ni artefactos alrededor del icono.

## D-018 — Contacto guiado sin backend

**Estado:** vigente.

**Evidencia:** cuatro botones `data-contact-topic` actualizan la vista previa y las URLs de WhatsApp y correo mediante `updateContactTopic`.

**Consecuencia:** la persona visitante recibe un punto de partida específico sin enviar datos al sitio ni incorporar formularios, servicios externos o dependencias.
