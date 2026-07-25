# Registro de decisiones

Este registro reconstruye decisiones observables. Cuando el motivo no está documentado, se evita atribuir intención.

## D-001 — Sitio estático sin toolchain

**Estado:** vigente por evidencia del repositorio.

**Evidencia:** solo existen HTML, CSS, JavaScript inline y recursos; no hay manifiestos, framework ni scripts.

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
