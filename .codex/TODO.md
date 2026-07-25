# Tareas y deuda técnica

Nada de esta lista fue implementado durante la sesión de documentación. Las prioridades son recomendaciones técnicas, no compromisos confirmados.

## Próxima tarea recomendada

- [ ] Realizar una revisión manual integral en navegador, escritorio y móvil, documentando capturas, consola, accesibilidad básica y estado de todos los enlaces externos. Es la mejor siguiente acción porque no hay pruebas ni registro de QA.

## Problemas detectados en el código

- [x] Corregir navegación activa incluyendo `#inicio`.
- [x] Corregir visibilidad al entrar mediante hash.
- [x] Agregar fallback para `.reveal` y `IntersectionObserver`.
- [x] Respetar `prefers-reduced-motion`.
- [x] Incorporar menú móvil accesible.

## Mantenibilidad

- [x] Eliminar selectores CSS sin HTML asociado de la versión anterior.
- [ ] Decidir si los tres QR no utilizados deben integrarse o retirarse. No borrar sin confirmar su propósito.
- [ ] Revisar y simplificar `.gitignore`, que contiene entradas para stacks ausentes. No es un error funcional, pero puede inducir a diagnósticos incorrectos.
- [x] Separar el JavaScript de interacción y datos en `app.js`.
- [ ] Definir una estrategia mínima de validación automatizada (por ejemplo, HTML/enlaces) solo si el mantenimiento futuro lo justifica.

## Robustez externa

- [x] Verificar las siete fuentes mediante solicitudes parciales HTTP; respondieron `206` y `video/mp4` el 2026-07-25.
- [ ] Migrar los siete videos desde el preview embebido de Google Drive a fuentes MP4 directas fiables o a un proveedor con API para controlar el volumen inicial al 15 %. El `<video>` nativo ya configura `volume = 0.15`, pero Drive no expone ese control al documento padre. El 2026-07-25 se probaron `drive.usercontent.google.com/download` y `drive.google.com/uc?export=download`: ambos fallaron en reproducción nativa y activaron el fallback. Los siete archivos suman 192.880.454 bytes (183,9 MiB), por lo que versionarlos directamente en este repositorio no es una solución recomendable.
- [ ] Confirmar que los logos remotos de Griller y Prina permitan hotlinking estable; considerar copias locales solo con autorización y derechos claros.
- [ ] Verificar vigencia de webs, redes, correo y WhatsApp.
- [ ] Confirmar que la URL de Vercel observada sea la canónica y documentar el flujo de despliegue antes de cambiar metadatos sociales.

## SEO, accesibilidad y producto

- [ ] Ejecutar auditorías de accesibilidad, SEO y rendimiento; no existen resultados versionados.
- [ ] Evaluar favicon, canonical link, datos estructurados y política de robots/sitemap. Su necesidad es **Pendiente de confirmar**.
- [ ] Confirmar requisitos legales, privacidad y analytics antes de agregar rastreo o banners.
- [ ] Confirmar contenido, afirmación de experiencia, marcas, descripciones y derechos de los recursos con Ian o la persona responsable.
- [ ] Reemplazar el logo actual de Prina por la versión azul cuando el cliente entregue el asset.
- [ ] Reemplazar el JPEG de Cartas Coleccionables por el SVG oficial cuando el cliente lo entregue.
- [ ] Reemplazar la fotografía de perfil cuando Ian entregue la selección formal.

## Pendiente de confirmar con la persona mantenedora

- [ ] Objetivo de conversión principal del portafolio.
- [ ] Navegadores y dispositivos soportados.
- [ ] Flujo de despliegue, propiedad del proyecto Vercel y dominio definitivo.
- [ ] Licencia del repositorio y derechos sobre retratos, logos, QR, videos y copy.
- [ ] Si existe un backlog, feedback de clientes o errores reportados fuera de Git.
