# Consultorios Lo Grau

Sitio institucional moderno para un centro médico privado en Santa Fe, construido desde cero con React, TypeScript, Vite y CSS moderno.

## Arquitectura propuesta

```txt
src/
  app/          # Ensamble de rutas simples y layout principal
  components/   # Componentes reutilizables: layout, secciones, tarjetas y contacto
  data/         # Configuración escalable de clínica y especialidades
  pages/        # Páginas institucionales por ruta
  styles/       # Sistema visual global y responsive
  utils/        # Utilidades transversales, actualmente SEO dinámico
public/         # Robots y sitemap estático
```

La estructura está pensada para sumar nuevas especialidades agregando un objeto en `src/data/site.ts` y, si hiciera falta, una vista específica.

## Rutas

- `/`: Home institucional de Consultorios Lo Grau.
- `/odontologia`: Página de Odontología con WhatsApp configurado.
- `/oftalmologia`: Página de Oftalmología preparada para sumar WhatsApp futuro.

## SEO

Incluye metadatos base, Open Graph, Schema.org `MedicalClinic`, `robots.txt` y `sitemap.xml`.
