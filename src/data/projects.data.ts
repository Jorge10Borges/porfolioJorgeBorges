export const projects = [
  {
    title: 'CyberMedia',
    descriptionBreve: 'Software educativo utilizado por PDVSA para la reproducción de charlas y exposiciones con video sincronizado, subtítulos y material de apoyo distribuido a través de CD-ROM.',
    technologies: ['VB 5.0', 'VB 6.0'],
    image: '/images/projects/CiberMedia.webp',
    imagesGallery: [
      '/images/projects/gallery/cybermedia-1.webp',
      '/images/projects/gallery/cybermedia-2.webp',
      '/images/projects/gallery/cybermedia-3.webp'
    ],
    slug: 'cybermedia',
    year: '1997 - 1999',
    role: 'Desarrollador principal',
    description: 'CyberMedia fue una aplicación multimedia desarrollada alrededor del año 2000 para Petróleos de Venezuela (PDVSA), en un contexto donde el acceso a internet era extremadamente limitado —conexiones por módem, sin YouTube ni redes sociales. Ante esa realidad, PDVSA requería una forma de distribuir contenidos formativos de manera offline. CyberMedia cumplió ese propósito al ofrecer una plataforma educativa distribuida por CD-ROM que integraba video, subtítulos sincronizados y materiales de apoyo, brindando una experiencia de aprendizaje envolvente sin necesidad de conexión a la red.',
    technicalDetails: {
      lenguaje: 'Visual Basic 5.0 (posteriormente migrado a VB 6.0)',
      baseDeDatos: 'Microsoft Access',
      multimedia: 'Reproductor embebido con control de sincronización entre video y texto',
      distribucion: 'CD-ROM ejecutable para sistemas Windows',
      otrosRecursos: 'Interfaces personalizadas, optimización para ejecución desde medios físicos'
    },
    contribution: 'Diseñé y desarrollé ambos ejecutables. En el módulo editor, implementé herramientas para importar y sincronizar los elementos multimedia. Además, gestioné la integración de componentes y aseguré la sincronización precisa entre subtítulos y video.',
    featuredChallenges: 'Entre los desafíos principales estuvieron: manejar eficientemente recursos multimedia desde CD-ROM, asegurar sincronización precisa entre texto y video, y desarrollar una arquitectura modular que permitiera a diferentes equipos crear y distribuir contenido educativo con facilidad. Todo esto dentro de las limitaciones técnicas propias de la época.',
    impact: 'CyberMedia no solo fue implementado en diversas áreas formativas de PDVSA, sino que también se consolidó como una herramienta de referencia para la capacitación interna. Su diseño modular permitió la producción de múltiples exposiciones temáticas reutilizando la misma base tecnológica.',
    url: ''
  },
  {
    title: 'Lottery 95 / 2000',
    descriptionBreve: 'Sistema pionero en Venezuela para la venta de loterías bajo entorno Windows, con transmisión de datos vía modem.',
    technologies: ['VB 5.0', 'VB 6.0'],
    image: '/images/projects/Lottery.webp',
    imagesGallery: [
      '/images/projects/gallery/lottery-1.webp',
      '/images/projects/gallery/lottery-2.webp',
      '/images/projects/gallery/lottery-3.webp'
    ],
    slug: 'lottery95',
    year: '1995 - 2010',
    role: 'Desarrollador principal',
    description: 'Lottery 95 y 2000 fueron dos versiones de un sistema pionero en Venezuela para la venta de loterías en puntos de venta locales. El sistema funcionaba en entornos Windows y permitía transmitir datos de ventas a un servidor central mediante conexiones via modem. Fue uno de los primeros sistemas en automatizar este proceso en el país, sustituyendo herramientas basadas en MS-DOS.',
    technicalDetails: {
      lenguaje: 'Visual Basic 5.0 → VB 6.0',
      baseDeDatos: 'Microsoft Access (con encriptación de datos)',
      multimedia: 'Interfaz gráfica simple para operadores',
      distribucion: 'Instalación local en puntos de venta',
      otrosRecursos: 'Bibliotecas Bitware para comunicación por fax/modem, soporte de impresión de reportes'
    },
    contribution: 'Diseñé e implementé la lógica de captura de datos, transmisión segura y generación de reportes. Trabajé en la migración de VB 5.0 a VB 6.0 para mejorar rendimiento, seguridad y compatibilidad.',
    featuredChallenges: 'La protección contra accesos no autorizados a la base de datos, la integración con dispositivos de fax y la migración desde sistemas legacy basados en MS-DOS. Además, la situación económica del país representó un reto para mantener el sistema activo durante más de 15 años.',
    impact: 'Modernizó completamente la gestión de ventas de lotería en Venezuela. Se usó ampliamente durante más de una década en cientos de puntos de venta del país.',
    url: ''
  },
  {
    title: 'Inventory',
    descriptionBreve: 'Sistema de facturación e inventario desarrollado para FUDESEM. Ayudó a pequeños comerciantes a ofrecer productos de la cesta básica a precios accesibles al público.',
    technologies: ['VB 6.0'],
    image: '/images/projects/inventory.webp',
    imagesGallery: [
      '/images/projects/gallery/inventory-1.webp',
      '/images/projects/gallery/inventory-2.webp',
      '/images/projects/gallery/inventory-3.webp'
    ],
    slug: 'inventory',
    year: '2000 - 2005',
    role: 'Desarrollador principal',
    description: 'Inventory fue un sistema empresarial desarrollado para la Fundación para el Desarrollo del Estado Miranda (FUDESEM), orientado al control de inventarios y la logística de distribución dentro del plan social PROAL (Programa de Alimentos Estratégicos) en Venezuela. Su objetivo principal era gestionar productos de la cesta básica y garantizar su distribución a precios accesibles a través de los canales sociales del estado Miranda.',
    technicalDetails: {
      lenguaje: 'Visual Basic 6.0',
      baseDeDatos: 'Microsoft Access',
      multimedia: 'Sin uso',
      distribucion: 'Instalación local en puntos de venta sociales',
      otrosRecursos: 'Módulos de facturación, kardex, reportes de ventas, reportes de comprasc y reportes de stock'
    },
    contribution: 'Fui invitado directamente por FUDESEM para diseñar e implementar una solución totalmente a medida. Desarrollé el motor de inventario, módulo de facturación y reportes asociados al proceso logístico y de distribución de alimentos estratégicos.',
    featuredChallenges: 'Diseñar un sistema rápido y seguro que permitiera a FUDESEM tener un control efectivo de ventas e inventarios, además de generar reportes confiables para el gobierno estatal. También integrar funcionalidad de kardex y contabilidad en un entorno Windows con recursos limitados.',
    impact: 'El sistema ayudó a modernizar la gestión de inventarios en el FUDESEM, facilitando la distribución eficiente de alimentos esenciales bajo el programa PROAL. Mejoró la transparencia y redujo errores manuales.',
    url: ''
  },
  {
    title: 'Budget',
    descriptionBreve: 'Sistema de control del presupuesto público para la Fundación para el Desarrollo del Estado Miranda (FUDESEM).',
    technologies: ['VB 6.0'],
    image: '/images/projects/budget.webp',
    imagesGallery: [
      '/images/projects/gallery/budget-1.webp',
      '/images/projects/gallery/budget-2.webp',
      '/images/projects/gallery/budget-3.webp'
    ],
    slug: 'budget',
    year: '2005 - 2010',
    role: 'Desarrollador principal',
    description: 'Budget es un sistema diseñado para el control del presupuesto público de FUDESEM, con funcionalidad para seguimiento de gastos, asignación de fondos y reportes mensuales de ejecución presupuestaria.',
    technicalDetails: {
      lenguaje: 'Visual Basic 6.0',
      baseDeDatos: 'Microsoft Access',
      multimedia: 'Sin uso',
      distribucion: 'Aplicación local instalable',
      otrosRecursos: 'Exportación a Excel, soporte de impresión de reportes'
    },
    contribution: 'Desarrollé el motor de cálculo y reporte del presupuesto, además de la interfaz de usuario y los formularios de carga de datos.',
    featuredChallenges: 'Gestionar grandes volúmenes de datos con recursos limitados y generar reportes precisos con fechas límite establecidas por la fundación.',
    impact: 'El sistema ayudó a FUDESEM a tener mayor transparencia en el uso de fondos públicos, facilitando la toma de decisiones basada en datos históricos y proyecciones.',
    url: ''
  },
  {
    title: 'AsisCont',
    descriptionBreve: 'Sistema de control de inventarios para una empresa de distribución de hortalizas con conexión remota mediante HTTP entre dos estados de Venezuela.',
    technologies: ['VB.NET', 'MySQL'],
    image: '/images/projects/AsisCont.webp',
    imagesGallery: [
      '/images/projects/gallery/AsisCont-1.webp',
      '/images/projects/gallery/AsisCont-2.webp'
    ],
    slug: 'asiscont',
    year: '2017 - 2021',
    role: 'Desarrollador principal',
    description: 'AsisCont es un sistema de control de inventario a medida para una distribuidora de hortalizas con sede de compras en Mérida y sede de ventas en Bolívar. Fue desarrollado bajo VB.NET y MySQL, permitiendo trabajo en red local e incluso modo offline si la conexión a internet fallaba. Los datos se podían exportar a USB para sincronización posterior cuando la conexión volvía a estar disponible.',
    technicalDetails: {
      lenguaje: 'VB.NET',
      baseDeDatos: 'MySQL (en servidor web y en local)',
      multimedia: 'Sin uso',
      distribucion: 'Aplicación instalable en múltiples sedes',
      otrosRecursos: 'Módulo de facturación online/offline, sistema de sincronización automática, reportes detallados'
    },
    contribution: 'Diseñé e implementé la lógica de sincronización entre sedes remotas, además del módulo de facturación con soporte offline. Desarrollé el motor de envío automático de datos acumulados al restaurarse la conexión, garantizando integridad de registros.',
    featuredChallenges: 'Gestionar correctamente los datos en escenarios sin conexión, asegurar la integridad de los datos tras fallos de comunicación y optimizar la velocidad de sincronización entre Mérida y Bolívar.',
    impact: 'El sistema mejoró significativamente la visibilidad del inventario entre dos estados, reduciendo errores de conteo y mejorando la logística. Permite mantener operaciones activas incluso durante cortes prolongados de internet.',
    url: ''
  },
  {
    title: 'JBConta',
    descriptionBreve: 'Sistema de facturación e inventario para una distribuidora de papelería con más de 16.000 artículos codificados con código de barras.',
    technologies: ['VB.NET', 'MySQL'],
    image: '/images/projects/jbconta.webp',
    imagesGallery: [
      '/images/projects/gallery/jbconta-1.webp',
      '/images/projects/gallery/jbconta-2.webp',
      '/images/projects/gallery/jbconta-3.webp'
    ],
    slug: 'jbcont',
    year: '2021 - Presente',
    role: 'Arquitecto y desarrollador',
    description: 'JBConta es un sistema de facturación e inventario diseñado específicamente para una distribuidora de papelería con más de 16.000 artículos codificados con código de barras. Permite ventas al por mayor y al detal, trabajo en red local y control de acceso mediante escaneo de carnet de identidad. Cuenta con varios niveles de seguridad según el rol del usuario y genera reportes detallados por cajero, producto y fecha, generación de combos para ofrecer descuentos a los clientes.',
    technicalDetails: {
      lenguaje: 'VB.NET',
      baseDeDatos: 'MySQL',
      multimedia: 'Sin uso',
      distribucion: 'Instalación local en Colombia (Papelería La Central, San Juan del Cesar)',
      otrosRecursos: 'Lectores de código de barras, impresoras fiscales, exportación de datos a USB'
    },
    contribution: 'Diseñé e implementé la arquitectura del sistema, incluyendo el motor de búsqueda rápida, módulo de facturación electrónica, control de stock y reportes personalizados. Integré el sistema con dispositivos de punto de venta y generé un modelo de seguridad por roles para usuarios y administradores.',
    featuredChallenges: 'Mantener velocidad de carga con más de 16.000 artículos, optimizar la gestión de inventarios en red local y asegurar integridad de datos tras múltiples transacciones diarias. Además, integrar lectores de carnet de identidad para control de acceso fue un desafío técnico importante.',
    impact: 'El sistema ha estado activo por más de 4 años y sigue funcionando en Papelería La Central en Colombia, brindandole soporte desde Venezuela. Su principal ventaja frente a competidores es su rapidez de respuesta, lo que mejora la experiencia del operador y reduce tiempos de espera en ventas al público.',
    url: ''
  },
  {
    title: 'JTInventory',
    descriptionBreve: 'Sistema de control de ventas de repuestos de motos en Colombia. Incluye facturación e inventario.',
    technologies: ['VB.NET', 'MySQL'],
    image: '/images/projects/jtinventory.webp',
    imagesGallery: [
      '/images/projects/gallery/jtinventory-1.webp',
      '/images/projects/gallery/jtinventory-2.webp',
      '/images/projects/gallery/jtinventory-3.webp'
    ],
    slug: 'jtinventory',
    year: '2023 - Presente',
    role: 'Desarrollador principal',
    description: 'JTInventory es una herramienta desarrollada en Colombia para el control de ventas de repuestos de motocicletas. Permite gestionar inventarios, facturar electrónicamente y generar reportes detallados por sucursal o cajero. El sistema fue creado específicamente para tiendas de autopartes que necesitaban un control eficiente de stock y transacciones.', 
    technicalDetails: {
      lenguaje: 'VB.NET',
      baseDeDatos: 'MySQL',
      multimedia: 'Sin uso',
      distribucion: 'Instalación local en tiendas de venta de repuestos',
      otrosRecursos: 'Lectores de código de barras, impresoras térmicas, soporte offline'
    },
    contribution: 'Diseñé la interfaz del sistema, la lógica de ventas y la integración con dispositivos de punto de venta. Implementé el motor de inventario en tiempo real y la generación automática de reportes diarios.', 
    featuredChallenges: 'Optimizar tiempos de respuesta en máquinas antiguas, garantizar integridad de datos en entornos sin conexión y adaptar el sistema a las prácticas de venta locales en Colombia.',
    impact: 'La tienda donde se implementó aumentó su productividad al reducirse los errores humanos en la venta y el control de stock. Se convirtió en una solución confiable para pequeños negocios dedicados a la venta de repuestos automotrices.' ,
    url: ''
  },
  {
    title: 'TiendaLumi.com',
    descriptionBreve: 'Plataforma de comercio electrónico para venta de aromatizantes en Argentina.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/images/projects/lumi.webp',
    imagesGallery: [
      '/images/projects/gallery/lumi-1.webp',
      '/images/projects/gallery/lumi-2.webp',
      '/images/projects/gallery/lumi-3.webp'
    ],
    slug: 'tiendalumi',
    year: '2025 - Presente',
    role: 'Desarrollo web y backend',
    description: 'TiendaLumi.com es una tienda online dedicada a la venta de aromatizantes automotrices. Cuenta con catálogo dinámico, carrito de compras y sistema de pago integrado.',
    technicalDetails: {
      lenguaje: 'PHP 8 + JavaScript Vanilla',
      baseDeDatos: 'MySQL',
      multimedia: 'Imágenes optimizadas para catálogo',
      distribucion: 'Web hosting compartido',
      otrosRecursos: 'Bootstrap, jQuery, PHPMailer, Stripe API'
    },
    contribution: 'Diseñé la plataforma desde cero, incluyendo frontend, backend y base de datos. Me encargué de la integración de pagos y el sistema de gestión de productos.',
    featuredChallenges: 'Hacerla rápida y SEO-friendly, además de compatible con móviles y tablets.',
    impact: 'Se convirtió en una tienda exitosa en Argentina, con alta tasa de conversión y fácil mantenimiento por parte del cliente.',
    url: 'https://lumi.appjorge.com'
  }
];