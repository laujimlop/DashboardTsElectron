# ClarOscuro · Dashboard corporativo

Aplicación de escritorio hecha con Electron, React y TypeScript (Vite) para la
asignatura Desarrollo de Interfaces (2º DAM).

## Qué hace
- Cabecera con logo, nombre de la empresa y hora del sistema.
- Barra lateral con tres secciones; solo se pinta una a la vez en el panel central.
- **Personal:** empleados de JSONPlaceholder (`/users`) con buscador por nombre.
- **Inventario:** productos de Fake Store API (`/products?limit=6`); los de más
  de 50 $ llevan la etiqueta "Activo de Alto Valor".
- **Incidencias:** tareas de JSONPlaceholder (`/todos?_limit=8`); la tarjeta cambia
  según estén completadas o pendientes.

Los datos se cargan al pulsar el botón de cada pantalla.

## Cómo ejecutarlo
Requiere Node.js 18 o superior.

    npm install
    npm run dev

## Estructura
- `src/components/` tarjetas y componentes reutilizables (Header, Sidebar, cards)
- `src/views/` pantallas del panel central
- `src/styles/` hojas de estilo
- `src/assets/` logo
- `electron/` proceso principal de Electron

## Autora
Laura Jiménez López · 2º DAM