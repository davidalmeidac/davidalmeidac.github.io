import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly fullName = 'David Israel Almeida Chaves';
  readonly shortName = 'David Almeida';
  readonly title = 'Backend & Fullstack Developer';
  readonly linkedinUrl = 'https://www.linkedin.com/in/davidalmeidac/';
  readonly githubUrl = 'https://github.com/davidalmeidac';
  readonly email = 'david.almeida@cun.edu.co';
  readonly location = 'Bucaramanga, Colombia';

  readonly heroTags = ['Java 17+', 'Go', 'Angular', 'Node.js', 'AWS', 'Spring Boot'];

  readonly about = `Backend Developer con 6 años programando y 4 años enfocado en Spring Boot, sistemas escalables y arquitecturas distribuidas. Mi especialidad es el backend — APIs de alto rendimiento, microservicios, CQRS y patrones de resiliencia — con experiencia fullstack real usando Angular. Disfruto resolver problemas complejos, automatizar procesos y entregar software con calidad desde el primer día.`;

  readonly stack = [
    { category: 'Lenguajes', items: ['Java 17+', 'Go (Golang)', 'TypeScript', 'C#', 'Node.js'] },
    { category: 'Frameworks', items: ['Spring Boot', 'Spring Security', 'Express.js', '.NET Core', 'Angular', 'WebFlux'] },
    { category: 'Arquitectura', items: ['Microservicios', 'CQRS', 'Event Sourcing', 'Event-Driven', 'SOA', 'Clean Architecture'] },
    { category: 'Cloud & DevOps', items: ['AWS Lambda', 'DynamoDB', 'Step Functions', 'Docker', 'Kubernetes', 'Git'] },
    { category: 'Bases de datos', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB'] },
    { category: 'Seguridad', items: ['OAuth2', 'JWT', 'Spring Security', 'Circuit Breaker'] },
  ];

  readonly experience = [
    {
      company: 'Desseosoft',
      role: 'Desarrollador Full-Stack',
      period: 'Oct 2025 – Dic 2025',
      type: 'Contrato',
      description: 'Desarrollo fullstack con Java y Spring Boot en backend, microservicios de alta disponibilidad con patrones de resiliencia, y frontend moderno con Angular.',
      bullets: [
        'Desarrollo fullstack: frontend en Angular, backend con Java 17+ y Spring Boot.',
        'Diseño de microservicios con CQRS y Event Sourcing para desacoplamiento y trazabilidad.',
        'APIs REST seguras con OAuth2/JWT usando Spring Security.',
        'Integración con AWS: Lambda, DynamoDB, Step Functions.',
        'Alta disponibilidad del 99.9% aplicando Circuit Breaker y patrones de resiliencia.',
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'AWS', 'OAuth2', 'CQRS'],
    },
    {
      company: 'Xeroz.Tech',
      role: 'Desarrollador Backend',
      period: 'Feb 2022 – Jun 2023',
      type: 'Remoto',
      description: 'Sistema de provisionamiento automático de VPS con entrega de credenciales a usuarios, más servicios backend en Go y Node.js/Express para plataforma de hosting.',
      bullets: [
        'Sistema de generación automática de VPS y entrega de credenciales a usuarios vía panel web.',
        'APIs REST con Express.js y servicios concurrentes de alto rendimiento en Go (Golang).',
        'Integración de sistemas legacy con mensajería asíncrona (EAI).',
        'Optimización de APIs: reducción del 50% en latencia.',
        'Tests unitarios e integración con 85% de cobertura.',
      ],
      tags: ['Go', 'Node.js', 'Express', 'VPS', 'APIs REST'],
    },
    {
      company: 'Asiscomp Business Center',
      role: 'Auxiliar de Contador Público (archivo)',
      period: 'Jun 2025 – Sep 2025',
      type: 'Temporal',
      description: 'Apoyo en procesos de archivo y contabilidad en entorno empresarial.',
      bullets: [
        'Gestión y organización de archivo contable.',
        'Apoyo a contador público en tareas administrativas.',
      ],
      tags: ['Contabilidad', 'Archivo'],
    },
  ];

  readonly projects = [
    {
      name: 'Microservices CQRS System',
      description: 'Sistema distribuido de microservicios con CQRS y Event Sourcing.',
      details: 'Arquitectura de microservicios implementando Command Query Responsibility Segregation (CQRS) y Event Sourcing con Spring Boot y RabbitMQ. Incluye Circuit Breaker para resiliencia y alta disponibilidad. Cada servicio mantiene su propia base de datos siguiendo el patrón Database per Service. Diseñado para escalar horizontalmente bajo alta carga.',
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'CQRS', 'Docker'],
      url: 'https://github.com/davidalmeidac/microservices-cqrs-system',
    },
    {
      name: 'OAuth2 / JWT Secure API',
      description: 'API RESTful segura con OAuth2, JWT y programación funcional en Java 17+.',
      details: 'API REST construida con Spring Security implementando flujo completo de autenticación OAuth2 y autorización con JWT. Utiliza programación funcional de Java 17+ (records, sealed classes, lambdas) para un código más limpio y expresivo. Incluye refresh tokens, revocación y roles granulares.',
      tags: ['Java 17+', 'Spring Security', 'OAuth2', 'JWT', 'REST'],
      url: 'https://github.com/davidalmeidac/oauth2-jwt-functional-api',
    },
    {
      name: 'AWS Reactive Integration',
      description: 'Integración reactiva con AWS usando Lambda, DynamoDB y Spring WebFlux.',
      details: 'Sistema de integración reactiva no bloqueante con servicios de AWS. Usa Spring WebFlux para procesamiento reactivo, Lambda para compute sin servidor, DynamoDB como base de datos NoSQL y Step Functions para orquestación de flujos complejos. Optimizado para alta concurrencia y baja latencia en cargas variables.',
      tags: ['AWS Lambda', 'DynamoDB', 'WebFlux', 'Step Functions', 'Reactive'],
      url: 'https://github.com/davidalmeidac/aws-reactive-integration',
    },
  ];

  readonly certifications = [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Feb 2026', expires: 'Feb 2027', badge: 'AWS' },
    { name: 'Lambda Foundations', issuer: 'Amazon Web Services', date: 'Feb 2026', expires: null, badge: 'AWS' },
    { name: 'Java Spring Security: Autenticación y Seguridad Web', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
    { name: 'Backend, Arquitectura y Bases de Datos', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
    { name: 'Angular Avanzado', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
    { name: 'Introducción a los Microservicios', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
    { name: 'Java Spring', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
    { name: 'Git y GitHub', issuer: 'Platzi', date: 'Feb 2026', expires: null, badge: 'PLZ' },
  ];

  readonly languages = [
    { name: 'Español', level: 'Nativo', pct: 100 },
    { name: 'Portugués', level: 'Nativo', pct: 100 },
    { name: 'Inglés', level: 'Avanzado', pct: 85 },
  ];

  readonly stats = [
    { num: '6', label: 'Años programando' },
    { num: '4+', label: 'Años con Spring & sistemas escalables' },
    { num: '8', label: 'Certificaciones' },
    { num: '99.9%', label: 'Uptime logrado' },
  ];
}
