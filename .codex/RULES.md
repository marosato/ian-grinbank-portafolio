# Reglas de trabajo

## Fuentes de verdad

1. Estado actual del código.
2. Estado e historial de Git.
3. Documentación verificable del repositorio.
4. Memoria `.codex/`, siempre contrastada contra 1–3.

Si hay contradicción, documentarla y pedir confirmación cuando afecte una decisión. No inventar requisitos ni historia.

## Antes de cambiar archivos

- Leer toda `.codex/`.
- Ejecutar `git status --short --branch`.
- Confirmar rama, `HEAD` y remoto.
- Leer completos los archivos afectados y sus referencias.
- Revisar commits relevantes.
- Marcar como **Pendiente de confirmar** cualquier dato no demostrable.

## Alcance y preservación

- No cambiar copy, datos de contacto, marcas, enlaces, imágenes o afirmaciones profesionales sin solicitud o confirmación explícita.
- No cambiar diseño, arquitectura o dependencias fuera del alcance solicitado.
- No introducir framework, build system o paquete solo por preferencia.
- Preservar el carácter estático del sitio salvo decisión explícita.
- No borrar recursos “no usados” sin confirmar su propósito.
- Mantener `lang="es-AR"` y la voz en español argentino salvo solicitud contraria.
- Mantener accesibilidad: semántica, `alt`, labels, foco visible, estados ARIA y navegación por teclado.
- Si se alteran URLs canónicas o sociales, revisar todas las etiquetas Open Graph/Twitter relacionadas.
- Tratar contenido remoto como dependencia y validar sus fallos.

## Verificación

Como no hay suite automatizada, cualquier cambio funcional/visual debe verificarse proporcionalmente:

- carga sin errores de consola;
- enlaces internos y externos;
- modo claro y oscuro;
- recarga y persistencia de tema;
- scroll/reveal/navegación activa;
- teclado y foco;
- escritorio, ≤980 px y ≤640 px;
- imágenes locales y remotas;
- ausencia de archivos inesperados o secretos.

No afirmar “todo funciona” si solo se realizó inspección estática.

## Git

- Conservar cambios ajenos y no sobrescribirlos.
- No hacer commit, push, rebase, reset destructivo ni abrir PR sin autorización correspondiente.
- Antes de entregar, ejecutar `git diff`, `git diff --check` y `git status`.
- Mantener commits futuros pequeños y con mensajes que describan el resultado.
- Nunca versionar secretos ni archivos `.env` reales.

## Mantenimiento de la memoria

Después de una tarea que cambie el estado:

- registrar hechos y fecha en `CHANGELOG_AI.md`;
- actualizar `SESSION_SUMMARY.md`;
- actualizar arquitectura/decisiones/TODO si cambiaron;
- no reescribir evidencia histórica como si siempre hubiera sido cierta;
- no guardar secretos, credenciales ni datos privados nuevos en `.codex/`;
- mantener cada afirmación rastreable a código, Git, documentación o instrucción explícita.
