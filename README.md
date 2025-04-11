# Hoja de Vida - Jonathan Marin

## Descripción del Proyecto

Este proyecto es una hoja de vida digital construida con Angular, diseñada para presentar de forma clara, visual y profesional toda la información relevante sobre una persona: perfil, experiencia laboral, formación académica, habilidades y proyectos realizados.

El objetivo principal es ofrecer una alternativa moderna a la hoja de vida tradicional, que pueda compartirse fácilmente y visualizarse desde cualquier dispositivo gracias a su diseño responsive.

## Configuración del Proyecto

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm (gestor de paquetes)
- ng (libreria de angular)

### Instalación

```sh
# Clonar el repositorio
git clone https://github.com/iTzJonathanxD/hoja-vida-angular.git

# Navegar al directorio del proyecto
cd hoja-vida-angular

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

```

## Arquitectura Frontend

## Tecnologías utilizadas

- **Angular** 18+
- **SCSS** para estilos
- **Modular Architecture** (core, shared, features)
- **Responsive Design** con enfoque adaptable

### Estructura del Proyecto
```

src/ 
├── app/ 
│ ├── assets/ 
│ │ └── prohto.jpg # Imagen utilizada en el portafolio 
│ ├── core/ # Elementos fundamentales del proyecto 
│ │ ├── components/ │ │ │ ├── footer/ # Componente de pie de página 
│ │ │ ├── header/ # Componente de cabecera 
│ │ │ ├── minecraft-loader/ # Animación personalizada tipo Minecraft 
│ │ │ ├── professional-loader/# Loader con estilo profesional 
│ │ │ └── sidebar/ # Barra lateral de navegación 
│ │ ├── services/ # Servicios reutilizables 
│ │ └── core.module.ts # Módulo que agrupa el núcleo del proyecto 
│ ├── features/ # Funcionalidades principales del portafolio 
│ │ ├── education/ # Sección de educación 
│ │ ├── experience/ # Sección de experiencia laboral 
│ │ ├── profile/ # Sección del perfil personal 
│ │ ├── projects/ # Proyectos realizados 
│ │ └── skills/ # Habilidades técnicas 
│ │ └── feature.module.ts # Módulo de funcionalidades 
│ ├── shared/ # Componentes reutilizables en todo el proyecto 
│ │ └── components/ 
│ │ ├── section-title/ # Títulos de secciones 
│ │ └── skill-bar/ # Barra visual de habilidades 
│ ├── app.component.html # Componente raíz (vista) 
│ ├── app.component.scss # Estilos globales del componente raíz 
│ └── app.component.ts # Lógica del componente raíz
│ └── app.component.module # Módulo principal de funcionalidades 

  
```

## Licencia
MIT
