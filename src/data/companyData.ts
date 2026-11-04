export const COMPANY_INFO = {
  name: "FERMAELEC, C.A.",
  shortName: "FERMAELEC",
  tagline: "Soluciones Eléctricas para un Mundo Mejor",
  slogan: "¡Lo mejor para ti! — Soluciones eléctricas a su medida...",
  rif: "J-31267591-8",
  address: "Calle Ecuador, Sector Monterrey, Nº 4-19, Anaco, Edo. Anzoátegui, Venezuela",
  emails: [
    "fermaelec@fermaelec.net",
    "ventas@fermaelec.net"
  ],
  phones: [
    { label: "Ventas / WhatsApp", number: "+58 0414-383.38.86", raw: "584143833886" },
    { label: "Oficina Anaco", number: "+58 0282-424.86.14", raw: "582824248614" },
    { label: "Planta / Administración", number: "+58 0282-425.71.15", raw: "582824257115" }
  ],
  website: "www.fermaelec.net"
};

export const LOGO_IMAGE = "https://i.postimg.cc/SsxRKZkj/LOGOWEB.png";
export const HERO_IMAGE = "https://i.postimg.cc/qM3Rg6Vv/Banner-industrial-con-tecnico-FERMAELEC.png";
export const PANEL_IMAGE = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200";

export const SERVICES = [
  {
    id: "instalaciones",
    title: "Instalaciones Eléctricas",
    shortDesc: "Proyectos y montajes con estándares de calidad.",
    icon: "TowerControl", // tower/pole
    fullDesc: "Diseño, ejecución y puesta en marcha de instalaciones eléctricas integrales para los sectores Industrial, Petrolero, Comercial y Residencial. Trabajamos con normativas COVENIN, IEEE y NEC.",
    features: [
      "Montaje de subestaciones y tableros de distribución",
      "Instalaciones en Alta, Media y Baja Tensión",
      "Sistemas de alumbrado industrial y residencial",
      "Tendido de conductores y canalizaciones con tubería Conduit, PVC y bandejas"
    ]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Eléctrico",
    shortDesc: "Prevención y soluciones eficientes.",
    icon: "Settings", // gear
    fullDesc: "Programas de mantenimiento preventivo, predictivo y correctivo de sistemas eléctricos para garantizar la continuidad operativa de plantas e instalaciones sin interrupciones.",
    features: [
      "Pruebas de aislamiento y termografía infrarroja",
      "Mantenimiento a transformadores y tableros de fuerza",
      "Reparación y calibración de protecciones eléctricas",
      "Mantenimiento a sistemas a prueba de explosión"
    ]
  },
  {
    id: "asesoria",
    title: "Asesoria Técnica",
    shortDesc: "Acompañamiento experto en cada proyecto.",
    icon: "Lightbulb", // bulb
    fullDesc: "Servicios de consultoría e ingeniería conceptual, básica y de detalle. Elaboración de planos, estudios de carga, auditorías energéticas y certificación de instalaciones.",
    features: [
      "Cálculo y diseño de sistemas de puesta a tierra",
      "Estudios de código de red y calidad de energía",
      "Asesoría comercial para la selección de equipos y marcas reconocidas",
      "Auditorías de eficiencia energética y seguridad eléctrica"
    ]
  },
  {
    id: "suministro",
    title: "Suministro Eléctrico",
    shortDesc: "Materiales y equipos de primera calidad.",
    icon: "Plug", // plug
    fullDesc: "Venta y distribución de materiales, equipos, herramientas y accesorios eléctricos respaldados por las marcas líderes nacionales e internacionales.",
    features: [
      "Materiales para Alta, Media y Baja Tensión",
      "Equipos y conexiones a prueba de explosión (NEMA 7/9)",
      "Conductores eléctricos THHN, TTU, Armados y de Control",
      "Sistemas de protección, detección de incendio y balizaje"
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Alta, Media y Baja Tensión",
    desc: "Transformadores, seccionadores, cortacircuitos, aisladores y pararrayos para redes de distribución y potencia.",
    icon: "Zap",
    items: ["Transformadores de potencia", "Aisladores de porcelana y poliméricos", "Seccionadores fusible", "Cuchillas desconectadoras"]
  },
  {
    id: 2,
    title: "Materiales Industriales, Comerciales y Residenciales",
    desc: "Tableros eléctricos, interruptores termomagnéticos, breakers, tomacorrientes e interruptores para cualquier edificación.",
    icon: "Home",
    items: ["Tableros de alumbrado y fuerza", "Breakers NEMA y DIN", "Interruptores de caja moldeada", "Cajas de paso y centros de carga"]
  },
  {
    id: 3,
    title: "Herramientas y Accesorios para Electricista",
    desc: "Herramientas aisladas 1000V, ponchadoras, multímetros, conectores de compresión y cintas de aislamiento profesional.",
    icon: "Wrench",
    items: ["Ponchadoras hidráulicas y manuales", "Pinzas amperimétricas y multímetros", "Herramientas aisladas Klein Tools", "Cintas de aislamiento 3M"]
  },
  {
    id: 4,
    title: "A Prueba de Explosión y Áreas Clasificadas",
    desc: "Equipos, luminarias, sellos y cajas con certificación NEMA 7/9 para industria petrolera y química.",
    icon: "ShieldAlert",
    items: ["Luminarias antiexplosivas LED", "Sellos de sellado EYS/EZS", "Cajas de conexiones Crouse-Hinds/Appleton", "Uniones universales y conectores"]
  },
  {
    id: 5,
    title: "Conductores y Cables Eléctricos",
    desc: "Cables de cobre y aluminio en calibres AWG y MCM para fuerza, control, instrumentación y acometidas.",
    icon: "Activity",
    items: ["Cables THHN / THWN-2", "Cables TTU y de Potencia 15kV", "Cables Armados / TecK90", "Cables telefónicos e instrumentación"]
  },
  {
    id: 6,
    title: "Luminarias e Iluminación en General",
    desc: "Reflectores LED de alta potencia, campanas industriales, tubos LED y sistemas de alumbrado público.",
    icon: "Sun",
    items: ["Reflectores LED 50W a 1000W", "Campanas industriales UFO", "Luminarias para alumbrado público", "Sistemas de iluminación de emergencia"]
  },
  {
    id: 7,
    title: "Tuberías y Conexiones Conduit, PVC, Galvanizadas y Aluminio",
    desc: "Tuberías EMT, IMC, RIGID, flexibles impermeables (Liquidtight) y conexiones para protección de conductores.",
    icon: "Layers",
    items: ["Tubería Conduit EMT e IMC galvanizada", "Tubería flexible Liquidtight", "Conectores y uniones herméticas", "Curvas, condulets y abrazaderas"]
  },
  {
    id: 8,
    title: "Luz de Balizaje y Estroboscópica",
    desc: "Sistemas de señalización para torres de telecomunicación, estructuras elevadas, antorchas y pozos petroleros.",
    icon: "Radio",
    items: ["Luces de balizaje LED para torres", "Luces estroboscópicas de advertencia", "Fotoceldas y controladores automáticos", "Sistemas solares para balizaje"]
  },
  {
    id: 9,
    title: "Sistemas de Bandejas y Canaletas Portacables",
    desc: "Bandejas metálicas tipo escalera, perforadas, de malla tipo alfil y canaletas en PVC e industrial.",
    icon: "Grid",
    items: ["Bandejas portacables tipo escalera en aluminio y acero", "Bandejas de malla de alambre", "Canaletas plásticas con división", "Soportes, curvas y derivaciones"]
  },
  {
    id: 10,
    title: "Protección Electrónica y Eléctrica",
    desc: "Supresores de picos de voltaje (SPD), relés térmicos, variadores de frecuencia y sistemas UPS.",
    icon: "ShieldCheck",
    items: ["Supresores de transitorios SPD", "Guardamotores y contactores", "Relés de sobrecarga y fase", "Sistemas UPS industriales"]
  },
  {
    id: 11,
    title: "Sistemas de Detección de Incendio",
    desc: "Paneles inteligentes de alarma, detectores fotoeléctricos de humo, estaciones manuales y estrobos de emergencia.",
    icon: "Flame",
    items: ["Paneles direccionables de incendio", "Detectores fotoeléctricos de humo y calor", "Estaciones manuales de doble acción", "Sirenas con luz estroboscópica"]
  }
];

export const PARTNER_BRANDS = [
  "3M", "Elecon", "Burndy", "Klein Tools", "Square D", "Bticino", "Siemens", "Schneider Electric", "ABB", "Crouse-Hinds", "Appleton"
];

export const PROJECTS = [
  {
    id: 1,
    title: "Montaje de Subestación Industrial 13.8kV",
    sector: "Industrial",
    location: "Zona Industrial Anaco, Anzoátegui",
    desc: "Instalación completa de transformador de 1500 KVA, celdas de media tensión y tablero principal de distribución con medición digital.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Sistemas Eléctricos a Prueba de Explosión en Taladro Petrolero",
    sector: "Petrolero",
    location: "Faja Petrolífera del Orinoco",
    desc: "Adecuación y suministro de luminarias LED antiexplosivas, tableros NEMA 7X y cableado armado en áreas clasificadas Clase I Div 1.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Alumbrado y Fuerza para Centro Comercial",
    sector: "Comercial",
    location: "Barcelona, Anzoátegui",
    desc: "Tendido de bandejas portacables de aluminio, tableros con breakers de caja moldeada e iluminación LED decorativa e industrial.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Mantenimiento Preventivo de Planta Compresora",
    sector: "Petrolero",
    location: "Anaco, Edo. Anzoátegui",
    desc: "Termografía infrarroja, pruebas de resistencia de aislamiento en motores de media tensión y ajuste de relés de protección.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Sistemas de Puesta a Tierra y Malla de Cobre",
    sector: "Industrial",
    location: "Maturín, Monagas",
    desc: "Construcción de malla a tierra con soldadura exotérmica cadweld y electrodos de cobre para protección contra descargas atmosféricas.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Proyecto Residencial de Lujo - Acometida e Iluminación",
    sector: "Residencial",
    location: "Lechería, Anzoátegui",
    desc: "Instalación de tableros empotrados, domótica de control de iluminación y protección contra sobretensiones para complejo de villas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  }
];

export const STATS = [
  { value: 18, suffix: "+", label: "Años de Experiencia" },
  { value: 650, suffix: "+", label: "Proyectos Ejecutados" },
  { value: 100, suffix: "%", label: "Garantía de Calidad" },
  { value: 24, suffix: "/7", label: "Soporte y Atención" }
];
