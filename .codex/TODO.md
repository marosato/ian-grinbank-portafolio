# Tareas y deuda técnica

Nada de esta lista fue implementado durante la sesión de documentación. Las prioridades son recomendaciones técnicas, no compromisos confirmados.

## Próxima tarea recomendada

- [ ] Realizar una revisión manual integral en navegador, escritorio y móvil, documentando capturas, consola, accesibilidad básica y estado de todos los enlaces externos. Es la mejor siguiente acción porque no hay pruebas ni registro de QA.

## Problemas detectados en el código

- [ ] Revisar la navegación activa: el algoritmo parte de `#sobre-mi`, por lo que puede marcar esa opción mientras el usuario todavía está en `#inicio`.
- [ ] Corregir la entrada directa por hash a secciones con `.reveal`: en producción, `/#contacto` desplazó correctamente pero dejó la sección invisible y marcó `#sobre-mi` como navegación activa.
- [ ] Definir un fallback para `.reveal` cuando JavaScript esté deshabilitado, falle o no exista `IntersectionObserver`; hoy el CSS deja esas secciones invisibles hasta recibir `is-visible`.
- [ ] Incorporar comportamiento para `prefers-reduced-motion` o confirmar que las animaciones actuales son aceptables.
- [ ] Decidir si la navegación debe seguir oculta por completo bajo 980 px o si necesita alternativa móvil.

## Mantenibilidad

- [ ] Eliminar o justificar selectores CSS sin HTML asociado: `.editor-panel`, `.panel-dot`, `.timeline`, `.portfolio-intro`.
- [ ] Decidir si los tres QR no utilizados deben integrarse o retirarse. No borrar sin confirmar su propósito.
- [ ] Revisar y simplificar `.gitignore`, que contiene entradas para stacks ausentes. No es un error funcional, pero puede inducir a diagnósticos incorrectos.
- [ ] Considerar separar el JavaScript inline si el comportamiento crece. No es necesario para el tamaño actual.
- [ ] Definir una estrategia mínima de validación automatizada (por ejemplo, HTML/enlaces) solo si el mantenimiento futuro lo justifica.

## Robustez externa

- [ ] Confirmar que los siete archivos de Google Drive sean públicos y que sus miniaturas carguen sin sesión.
- [ ] Confirmar que los logos remotos de Griller y Prina permitan hotlinking estable; considerar copias locales solo con autorización y derechos claros.
- [ ] Verificar vigencia de webs, redes, correo y WhatsApp.
- [ ] Confirmar que la URL de Vercel observada sea la canónica y documentar el flujo de despliegue antes de cambiar metadatos sociales.

## SEO, accesibilidad y producto

- [ ] Ejecutar auditorías de accesibilidad, SEO y rendimiento; no existen resultados versionados.
- [ ] Evaluar favicon, canonical link, datos estructurados y política de robots/sitemap. Su necesidad es **Pendiente de confirmar**.
- [ ] Confirmar requisitos legales, privacidad y analytics antes de agregar rastreo o banners.
- [ ] Confirmar contenido, afirmación de experiencia, marcas, descripciones y derechos de los recursos con Ian o la persona responsable.

## Pendiente de confirmar con la persona mantenedora

- [ ] Objetivo de conversión principal del portafolio.
- [ ] Navegadores y dispositivos soportados.
- [ ] Flujo de despliegue, propiedad del proyecto Vercel y dominio definitivo.
- [ ] Licencia del repositorio y derechos sobre retratos, logos, QR, videos y copy.
- [ ] Si existe un backlog, feedback de clientes o errores reportados fuera de Git.
