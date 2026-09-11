/* ============================================
   FAKECC S.A.C. - CONFIGURACIÓN CENTRALIZADA
   Datos de contacto, empresa, proyectos
   ============================================ */

const CONFIG = {
    // DATOS DE EMPRESA
    empresa: {
        nombre: 'Consultoría, Constructora e Inversiones FAKECC S.A.C.',
        nombreComercial: 'FAKECC S.A.C.',
        ruc: '20487063399',
        eslogan: 'Construyendo el futuro de la inversión',
        fundacion: 2014,
        representanteLegal: 'Wilder David Cano Suárez',
        rnpEjecutor: '83613',
        capacidadContratacion: 'S/ 900,000.00'
    },

    // CONTACTO
    contacto: {
        telefono: '912071787',
        whatsapp: '+51912071787',
        email: 'canoespinoza17@outlook.com',
        direccion: 'Asoc. Santísima Cruz de Motupe Mz. J Lt. 20, Puente Piedra, Lima',
        horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM'
    },

    // GPS UBICACIÓN
    // AJUSTAR: coordenadas aproximadas de Puente Piedra, reemplazar por las exactas
    ubicacion: {
        latitud: -11.8608,
        longitud: -77.0765,
        googleMapsUrl: '' // Pegar aquí el enlace corto de Google Maps
    },

    // REGISTROS RNP (reemplaza a las certificaciones ISO del sitio anterior)
    registros: {
        ejecutorObras: {
            titulo: 'Ejecutor de Obras',
            descripcion: 'RNP N° 83613 — Inscripción vigente ante el OSCE',
            vigenciaDesde: '06/02/2020',
            pdf: 'docs/CONSTANCIA_RNP_FAKECC.pdf'
        },
        consultorObras: {
            titulo: 'Consultor de Obras',
            descripcion: '5 especialidades acreditadas, todas Categoría A',
            especialidades: [
                'Consultoría en obras urbanas, edificaciones y afines - Categoría A',
                'Consultoría en obras viales, puertos y afines - Categoría A',
                'Consultoría en obras de saneamiento y afines - Categoría A',
                'Consultoría en obras electromecánicas, energéticas, telecomunicaciones y afines - Categoría A',
                'Consultoría en obras de represas, irrigaciones y afines - Categoría A'
            ],
            vigenciaDesde: '06/02/2020',
            pdf: 'docs/CONSTANCIA_RNP_FAKECC.pdf'
        },
        proveedorBienes: {
            titulo: 'Proveedor de Bienes',
            vigenciaDesde: '27/05/2017',
            pdf: 'docs/CONSTANCIA_RNP_FAKECC.pdf'
        },
        proveedorServicios: {
            titulo: 'Proveedor de Servicios',
            vigenciaDesde: '27/05/2017',
            pdf: 'docs/CONSTANCIA_RNP_FAKECC.pdf'
        },
        BuenasPracticas: {
            titulo: 'Buenas prácticas',
            vigenciaDesde: '10/08/2029',
            pdf: 'docs/BUENAS-PRACTICAS-FAKECC.pdf'
        },

    },

    // PROYECTOS - ARRAY EDITABLE PARA AGREGAR MÁS
    // Estructura: {nombre, cliente, ubicacion, ano, descripcion, rubro, monto, image}
    // Los siguientes son PLANTILLAS DE EJEMPLO: edita los datos con tus obras reales
    // NOTA GALERÍA: cada proyecto tiene un "id" único para poder abrir su
    // galería de fotos ampliada (modal). Cuando tengas las fotos reales de
    // un proyecto, súbelas a /images/ y agrega el arreglo "galeria" con los
    // nombres de archivo (sin el prefijo "images/", eso lo agrega main.js).
    // Ejemplo:
    //   galeria: ['parque-justicia-1.jpg', 'parque-justicia-2.jpg']
    // Un proyecto SIN "galeria" (o con arreglo vacío) simplemente no abre modal.
    projects: [
        {
            id: 'proy_01_calles54',
            nombre: 'RENOVACION DE PAVIMENTO Y SEÑALES DE TRÁFICO; EN EL{LA) CALLES 54, 55, 58, JIRONES LA AMISTAD, VERACIDAD, PROLONGACION AQUIA, LOS OLIVOS, LOS CLAVELES, MALVAS, JOSE SANTOS CHOCANO, AMARANTOS, EL AMARGON, SANTA CRUZ DE PACHACUTEC, MANUEL GONZALES PRADA, VENUS, CARLOS AUGUSTO SALAVERRY DEL DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'Lima,Lima,Los Olivos',
            ano: 2025,
            descripcion: 'Renovación integral de pavimento y señalización de tránsito, orientada a optimizar las condiciones de la infraestructura vial.',
            rubro: 'Obras Viales',
            monto: 'S/ /3,865,225.87 inc IGV',
            image: 'images/calles54.jpg',
            galeria: ['calles54.jpg','calles54_1.jpg','calles54_2.jpg','calles54_3.jpg','calles54_4.jpg','calles54_5.jpg','calles54_6.jpg','calles54_7.jpg','calles54_8.jpg']
            // Cuando subas fotos: image: 'images/parque-justicia-1.jpg', galeria: ['parque-justicia-1.jpg', 'parque-justicia-2.jpg']
        },
        {
            id: 'proy_02_rosa',
            nombre: 'CONSTRUCCION DE ESPACIO DE CIRCULACION PEATONAL HORIZONTAL Y/O VERTICAL Y MURO DE CONTENCION; EN EL (LA) CALLE LOS ROSALES Y LOS GIRASOLES DEL AA.HH .MERCURIO ALTO DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'Lima,Lima,Los Olivos',
            ano: 2025,
            descripcion: 'Ejecución de obras de infraestructura urbana orientadas a habilitar y mejorar la circulación peatonal mediante escaleras y/o rampas, complementadas con la construcción de un muro de contención para garantizar la estabilidad del terreno',
            rubro: 'Obras Urbanas',
            monto: 'S/ 124,908.32 inc IGV',
            image: 'images/rosa.jpg',
            galeria: ['rosa.jpg','rosa_1.jpg','rosa_2.jpg','rosa_3.jpg','rosa_4.jpg','rosa_5.jpg','rosa.jpg']
            
            
        },
        {
            id: 'proy_03_jazmines',
            nombre: 'RENOVACION DE PAVIMENTO Y SEÑALES DE TRÁFICO; EN EL (LA) CALLE LOS JAZMINES, TRAMO DESDE LA CALLE AQUIA HASTA LA AV. UNIVERSITARIA DEL AA.HH. LOS JAZMINES DEL NARANJAL, SECTOR 1 DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2026,
            descripcion: 'Renovación vial integral que abarca la rehabilitación del pavimento asfáltico y la implementación de señalización de tráfico vertical y horizontal. La obra permite entregar a la comunidad una infraestructura vial totalmente optimizada, ordenada y segura para el tránsito vehicular y peatonal.',
            rubro: 'Obras Viales',
            monto: 'S/ 244,816.72 inc IGV',
            image: 'images/jazmines.jpg',
            galeria: ['jazmines_1.jpg','jazmines_2.jpg','jazmines_3.jpg','jazmines_4.jpg','jazmines_5.jpg','jazmines.jpg']
        },
        {
            id: 'proy_04_chillon',
            nombre: 'MEJORAMIENTO DEL SERVICIO DE MOVILIDAD URBANA EN LAS CALLES INTERNAS DEL AA.HH. MUNICIPAL CHILLON DISTRITO DE LOS OLIVOS DE LA PROVINCIA DE LIMA DEL DEPARTAMENTO DE LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2026,
            descripcion: 'Proyecto centrado en la rehabilitación y optimización de las vías internas, con el objetivo de garantizar un tránsito seguro, ordenado y eficiente. A través de la intervención en la infraestructura vial, se busca reducir los tiempos de desplazamiento, facilitar el acceso a servicios esenciales y elevar la calidad de vida de los residentes de la zona.',
            rubro: 'Obras Viales',
            monto: 'S/ 69 549.94 inc IGV',
            image: 'images/chillon_6.jpg',
            galeria: ['chillon_1.jpg','chillon_2.jpg','chillon_3.jpg','chillon_4.jpg','chillon_5.jpg','chillon_6.jpg']
        },
        {
            id: 'proy_05_beta',
            nombre: 'MEJORAMIENTO DEL SERVICIO DE MOVILIDAD URBANA EN LA AV. ROMULO BETANCOURT DESDE LA AV. CANTA CALLAO HASTA LA AV. CENTRAL DISTRITO DE LOS OLIVOS DE LA PROVINCIA DE LIMA DEL DEPARTAMENTO DE LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2026,
            descripcion: 'Proyecto centrado en la rehabilitación y optimización de las vías internas, con el objetivo de garantizar un tránsito seguro, ordenado y eficiente. A través de la intervención en la infraestructura vial, se busca reducir los tiempos de desplazamiento, facilitar el acceso a servicios esenciales y elevar la calidad de vida de los residentes de la zona.',
            rubro: 'Obras Viales',
            monto: 'S/ 696,961.52 inc IGV',
            image: 'images/beta.jpg',
            galeria: ['beta_1.jpg','beta_2.jpg','beta_3.jpg','beta_4.jpg','beta_5.jpg','beta_6.jpg','beta_7.jpg','beta.jpg']
        },
        {
            id: 'proy_06_rosales3',
            nombre: 'CONSTRUCCION DE VEREDA; EN EL(LA) LAS CALLES INTERNAS DEL A.H. ROSALES DE PRO DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA-3ERA ETAPA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2026,
            descripcion: 'Construcción de veredas en calles internas (III etapa) para dotar a la zona de infraestructura peatonal segura y durable. La intervención busca reducir riesgos de accidentes, mejorar el orden urbano y elevar la calidad de vida de los residentes.',
            rubro: 'Obras Viales',
            monto: 'S/ 145,030.39 inc IGV',
            image: 'images/rosales3.jpg',
            galeria: ['rosales3_1.jpg','rosales3_2.jpg','rosales3_3.jpg','rosales3_4.jpg','rosales3_5.jpg','rosales3_6.jpg','rosales3_7.jpg','rosales3.jpg']
        },
        {
            id: 'proy_07_geriatrico',
            nombre: 'CREACION DEL SERVICIO DE ATENCIÓN Y CUIDADO PARA PERSONAS EN CONDICIÓN DE DISCAPACIDAD EN EL LOCAL GERIATRICO Y DISCAPACIDAD EN EL AA.HH. SANTA ROSA DE NARANJAL DISTRITO DE LOS OLIVOS DE LA PROVINCIA DE LIMA DEL DEPARTAMENTO DE LIMA-SEGUNDO NIVEL',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2026,
            descripcion: 'Creación del servicio de atención y cuidado para personas con discapacidad y adultos mayores (segundo nivel), mediante el acondicionamiento de infraestructura inclusiva y equipamiento especializado en el local designado. El proyecto busca garantizar la accesibilidad, el bienestar integral y una atención de calidad para los usuarios del sector.',
            rubro: 'Obras Viales',
            monto: 'S/ 145,030.39 inc IGV',
            image: 'images/rosales3.jpg',
            galeria: ['rosales3_1.jpg','rosales3_2.jpg','rosales3_3.jpg','rosales3_4.jpg','rosales3_5.jpg','rosales3_6.jpg','rosales3_7.jpg','rosales3.jpg']
        },

    ],

    // SERVICIOS
    servicios: [
        {
            id: 1,
            nombre: 'Obras Viales y Puentes',
            descripcion: 'Construcción de carreteras con pavimento rígido y flexible, apertura de trochas, rehabilitación y mantenimiento de vías, y puentes de todo tipo.',
            icono: 'fas fa-road'
        },
        {
            id: 2,
            nombre: 'Edificaciones',
            descripcion: 'Centros educativos, hospitales, albergues, centros recreativos, edificios multifamiliares y obras de edificación en general.',
            icono: 'fas fa-building'
        },
        {
            id: 3,
            nombre: 'Obras de Saneamiento',
            descripcion: 'Sistemas de abastecimiento de agua, reservorios, redes de alcantarillado urbano y rural, plantas de tratamiento y drenaje.',
            icono: 'fas fa-faucet-drip'
        },
        {
            id: 4,
            nombre: 'Sistemas de Riego e Hidráulicas',
            descripcion: 'Canales abiertos y cerrados, embalses, bocatomas, pozos, riego por aspersión e instalación de sistemas de bombeo.',
            icono: 'fas fa-water'
        },
        {
            id: 5,
            nombre: 'Electrificación y Energía',
            descripcion: 'Instalaciones eléctricas, proyectos hidroeléctricos y obras de energía y minas con los más altos estándares técnicos.',
            icono: 'fas fa-bolt'
        },
        {
            id: 6,
            nombre: 'Consultoría y Supervisión',
            descripcion: 'Perfiles, expedientes técnicos, supervisiones, liquidaciones técnicas y financieras, saneamiento físico legal y trabajos topográficos.',
            icono: 'fas fa-clipboard-check'
        }
    ],

    // ESTADÍSTICAS (editar cuando tengas cifras reales de obras/clientes)
    stats: {
        anosExperiencia: 10,
        capacidadContratacion: 'S/ 900 Mil',
        especialidadesCategoriaA: 5,
        rnp: 'N° 83613'
    }
};

/* ============================================
   FUNCIÓN AUXILIAR - GUARDAR CONTACTO
   ============================================ */

function saveContactForm(data) {
    console.log('Datos del formulario:', data);
    // Aquí se conectaría con la API/backend
}

console.log('Configuración FAKECC cargada:', CONFIG);