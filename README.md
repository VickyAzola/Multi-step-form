# Multi Step Form

## Tabla de Contenidos

- [Multi Step Form](#multi-step-form)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Instalación](#instalación)
  - [Autores](#autores)

## Descripción

Multi Step Form es una aplicación web interactiva que guía al usuario a través de un formulario dividido en varios pasos para recopilar su información personal, elegir un plan, agregar complementos y revisar el resumen final antes de confirmar.

La interfaz está diseñada para ofrecer una experiencia clara y ordenada, con navegación por pasos, selección de planes con facturación mensual o anual, extras opcionales y una pantalla final de confirmación.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura base del proyecto.
- **CSS / Tailwind CSS**: Para los estilos, layout responsivo y estados visuales.
- **TypeScript**: Para tipado fuerte y mejor mantenimiento del código.
- **React**: Para la construcción de componentes y el manejo de la interfaz.
- **Vite**: Para el entorno de desarrollo y build del proyecto.
- **Zustand**: Para manejar el estado global del formulario.
- **i18next / react-i18next**: Para la internacionalización y cambio de idioma.
- **Fontsource Ubuntu**: Para la tipografía principal del proyecto.

## Funcionalidades

- Formulario dividido en **4 pasos**.
- Validación de datos en el primer paso.
- Selección de plan entre:
  - Arcade
  - Advanced
  - Pro
- Cambio entre **facturación mensual y anual**.
- Selección de **extras opcionales**.
- Vista de **resumen final** antes de confirmar.
- Pantalla de **agradecimiento** al completar el formulario.
- Soporte de idioma **español / inglés**.
- Diseño responsivo para escritorio y móvil.

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   ```

2. **Navegar al directorio del proyecto**:
   ```bash
   cd multi-step-form-yo/vite-project
   ```

3. **Instalar las dependencias**:
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. Abre el enlace `Local` que aparece en la terminal.

## Autores

- **Desarrollador**: Victoria Azola Silva
- **Diseño base**: Inspirado en un challenge de de Frontend Mentor
