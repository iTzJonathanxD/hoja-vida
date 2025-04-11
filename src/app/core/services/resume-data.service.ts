import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ResumeDataService {
  profile = {
    name: "Jonathan Steven Marin Guerrero",
    title: "Desarrollador",
    age: 22,
    birthDate: "24 DE JUNIO 2002",
    location: "Ecuador, Manta Si vivienda",
    phone: "0979550132",
    email: "Marinjonathan07@gmail.com",
    github: "https://github.com/iTzJonathanxD",
    photoUrl: "", 
    description:
      "Desarrollador con una fuerte capacidad de aprendizaje y un enfoque orientado a la resolución de desafíos tecnológicos. Mi objetivo es aportar soluciones innovadoras y eficientes, mientras sigo creciendo profesionalmente y contribuyo al éxito de proyectos de alto impacto.",
  }

  educationItems = [
    {
      level: "Educación Superior",
      institution: "Universidad Laica Eloy Alfaro de Manabí",
      degree: "Ingeniería en Tecnología de la Información",
      period: "Cursando 7° semestre",
      icon: "mortarboard-fill",
    },
    {
      level: "Bachillerato",
      institution: "U.E. Siglo XXI Olga Patricia Acebo Álvarez",
      degree: "Bachillerato en Ciencias",
      period: "2° a 3° de Bachillerato",
      icon: "award-fill",
    },
    {
      level: "Educación Básica Superior",
      institution: "U.E. Emilio Bowen Roggiero",
      degree: "Educación Básica Superior",
      period: "9° grado a 1° de Bachillerato",
      icon: "book-fill",
    },
    {
      level: "Educación Básica",
      institution: "U.E. Oswaldo Álvarez Barba Fe y Alegría #2",
      degree: "Educación Básica",
      period: "1° a 8° grado",
      icon: "pencil-fill",
    },
  ]

  experiences = [
    {
      title: "Gestor de Equipos y Desarrollador Fullstack",
      company: "Ministerio de Producción, Comercio Exterior, Inversiones y Pesca (MPCEIP)",
      period: "",
      responsibilities: [
        "Gestión de equipos y creación de reportes en Excel y PDF para el área de TICS.",
        "Desarrollo del backend utilizando JavaScript con autenticación basada en tokens, y frontend dinámico desarrollado en Angular.",
        "Configuración del servidor en Ubuntu 20.04 para el entorno web, integrando Nginx como proxy inverso para unir el backend y el frontend.",
        "Implementación de sesiones persistentes utilizando screen, permitiendo que los procesos del backend y frontend permanezcan activos incluso después de cerrar la terminal.",
        "Creación de un script automatizado en Bash (.sh) para inicializar los servicios de backend y frontend de manera eficiente.",
        "Administración de la base de datos MongoDB para garantizar la integridad y disponibilidad de los datos.",
      ],
    },
    {
      title: "Líder del Proyecto de Implementación del Sistema de Gestión Académica",
      company: "Proyecto del E-DIAC ULEAM",
      period: "",
      responsibilities: [
        "Supervisión de la implementación del sitio web.",
        "Corrección de errores y optimización de funcionalidades.",
      ],
    },
  ]

  projects = [
    {
      title: "Sistema de Gestión Académica",
      description: "Plataforma para la gestión de información académica y seguimiento de estudiantes.",
      technologies: ["Angular", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://github.com/iTzJonathanxD",
    },
    {
      title: "Aplicación de Gestión de Inventario",
      description: "Sistema para el control y seguimiento de inventario con reportes en tiempo real.",
      technologies: ["React", "Express", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://github.com/iTzJonathanxD",
    },
    {
      title: "Portal de Noticias",
      description: "Sitio web de noticias con sistema de gestión de contenido personalizado.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://github.com/iTzJonathanxD",
    },
    {
      title: "API para Plataforma de Aula Virtual",
      description: "API RESTful para la integración de una plataforma de aula virtual procesamiento de pagos con validaciones IA.",
      technologies: ["NestJS", "TypeScript", "MongoDB"],
      imageUrl: "https://i.ibb.co/zVxdm37w/image.png",
      projectUrl: "https://github.com/iTzJonathanxD/backend-classroom_nova",
    },
  ]

  technicalSkills = [
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "Angular", percentage: 85 },
    { name: "NodeJS", percentage: 80 },
    { name: "NestJS", percentage: 75 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "MySQL", percentage: 80 },
    { name: "MongoDB", percentage: 85 },
    { name: "Git/GitHub", percentage: 85 },
    { name: "Docker", percentage: 70 },
    { name: "APIs", percentage: 85 },
    { name: "Bootstrap", percentage: 90 },
  ]

  softSkills = [
    { name: "Empático", percentage: 90 },
    { name: "Proactivo", percentage: 95 },
    { name: "Aprendizaje rápido", percentage: 95 },
    { name: "Resolución de Problemas", percentage: 90 },
    { name: "Capacidad de Adaptación", percentage: 85 },
  ]

  constructor() {}

  updateProfilePhoto(photoUrl: string): void {
    this.profile.photoUrl = photoUrl
  }
}
