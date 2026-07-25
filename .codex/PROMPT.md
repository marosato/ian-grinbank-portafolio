# Instrucción de arranque para Codex

Este repositorio usa `.codex/` como memoria persistente y versionable del proyecto.

Antes de proponer o realizar cualquier cambio, toda nueva instancia de Codex debe:

1. Leer **todos** los archivos de `.codex/`.
2. Ejecutar `git status --short --branch` e identificar la rama y el remoto actuales.
3. Revisar los commits recientes y el historial relevante para la tarea.
4. Volver a inspeccionar los archivos del proyecto afectados por la tarea.
5. Contrastar esta documentación con el código y con Git. El código y el estado actual de Git prevalecen si la memoria quedó desactualizada.
6. No asumir que existe información de conversaciones anteriores.
7. No presentar inferencias como hechos. Usar la etiqueta **Pendiente de confirmar** cuando algo no pueda verificarse mediante el repositorio, Git o documentación explícita.
8. Preservar el alcance y las restricciones registradas en `RULES.md`.
9. Actualizar, al terminar una tarea que cambie el proyecto, al menos `PROJECT_MEMORY.md`, `TODO.md`, `CHANGELOG_AI.md` y `SESSION_SUMMARY.md` cuando corresponda.

Orden de lectura recomendado:

1. `PROMPT.md`
2. `ONBOARDING.md`
3. `PROJECT_MEMORY.md`
4. `ARCHITECTURE.md`
5. `DECISIONS.md`
6. `TODO.md`
7. `RULES.md`
8. `CHANGELOG_AI.md`
9. `SESSION_SUMMARY.md`

Estado base previo al rediseño actual: rama `main`, commit `a538f3e`, auditado el 2026-07-25. La rama de trabajo es `codex/portfolio-visual-update`; confirmar siempre que siga vigente.
