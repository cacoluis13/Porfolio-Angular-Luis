# 📌 Personal Portfolio - Angular Project

## 📖 Descripción

Este es un proyecto de portafolio personal desarrollado en Angular. Su objetivo es presentar información sobre mí, mis habilidades, estudios y proyectos de una manera dinámica e interactiva. También incluye un formulario de contacto funcional con validaciones.

El proyecto sigue las mejores prácticas de desarrollo en Angular, utilizando componentes reutilizables y el módulo de enrutamiento para mejorar la organización y la experiencia del usuario.

## 🚀 Características Principales

- **Arquitectura Modular**: Desarrollo basado en componentes para facilitar la reutilización y el mantenimiento.
- **Sistema de Enrutamiento**: Navegación entre secciones usando Angular Router.
- **Diseño Responsivo**: Adaptado para diferentes dispositivos y tamaños de pantalla.
- **Validaciones en Formularios**: Uso de Angular Forms para validaciones en el formulario de contacto.
- **Componentes Reutilizables**: Implementación de elementos como tarjetas de proyectos, barra de navegación y pie de página.
- **Código Estructurado y Escalable**: Organización adecuada del código para facilitar futuras mejoras y expansiones.

## 📁 Estructura del Proyecto

El proyecto está estructurado en varios componentes, cada uno con su propia responsabilidad.

### 🔹 Componentes Principales

- **HomeComponent**: Página principal con presentación personal, una breve biografía y una imagen representativa.
- **PortfolioComponent**: Sección que muestra los proyectos desarrollados con imágenes, descripciones y enlaces a repositorios o demostraciones en vivo.
- **ContactComponent**: Formulario de contacto con validaciones para capturar información del usuario.

### 🔹 Componentes Reutilizables

- **NavbarComponent**: Barra de navegación con enlaces a las distintas secciones del sitio.
- **FooterComponent**: Pie de página con información de contacto y redes sociales.
- **ProjectCardComponent**: Tarjeta reutilizable que muestra información sobre un proyecto en particular.

## 🛠️ Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo del proyecto.
- **TypeScript**: Lenguaje utilizado para la lógica de la aplicación.
- **Bootstrap / Tailwind CSS**: Frameworks de estilos para mejorar la presentación.
- **Angular Forms**: Implementación de formularios reactivos con validaciones.
- **Angular Router**: Módulo para la navegación entre páginas.

## 🔗 Configuración del Enrutamiento

El sistema de enrutamiento está configurado en `app-routing.module.ts` de la siguiente manera:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

# PorfolioAngularLuis

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
