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
        }
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
            id: 'proy_03_virgen',
            nombre: 'CONSTRUCCIÓN DE ESPACIO DE CIRCULACIÓN PEATONAL HORIZONTAL Y/O VERTICAL, SARDINEL, MOBILIARIO URBANO Y OBRAS EXTERIORES; EN EL (LA) PARQUE VIRGEN DEL CARMEN DEL A.H SAN ALBERTO DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2025,
            descripcion: 'Ejecución de obras de infraestructura urbana destinadas a habilitar y mejorar la circulación peatonal mediante escaleras, rampas y sardineles, complementadas con la instalación de mobiliario urbano y obras exteriores.',
            rubro: 'Obras Urbanas',
            monto: 'S/ 95,657.31 inc IGV',
            image: 'images/virgen.jpg',
            galeria: ['virgen.jpg','virgen_1.jpg','virgen_2.jpg','virgen_3.jpg','virgen_5.jpg','virgen_6.jpg','virgen_7.jpg','virgen_8.jpg','virgen.jpg']
        },
        {
            id: 'proy_04_patrianueva',
            nombre: 'CREACIÓN DEL SERVICIO DE MOVILIDAD URBANA EN LAS CALLES INTERNAS DEL ASENTAMIENTO HUMANO PATRIA NUEVA, DEL DISTRITO DE LOS OLIVOS, DE LA PROVINCIA DE LIMA, DEL DEPARTAMENTO DE LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2025,
            descripcion: 'Ejecución de obras de infraestructura vial y urbana orientadas a implementar y mejorar el servicio de movilidad en las vías internas del ámbito de intervención, optimizando las condiciones de transitabilidad.',
            rubro: 'Obras Viales',
            monto: 'S/ 180,607.54 inc IGV',
            image: 'images/patria.jpg',
            galeria: ['patria.jpg','patria_1.jpg','patria_2.jpg','patria_3.jpg','patria_4.jpg','patria_5.jpg','patria.jpg']
        },
        {
            id: 'proy_05_venus',
            nombre: 'CONSTRUCCIÓN DE PAVIMENTO, VEREDA, ESPACIO DE CIRCULACIÓN PEATONAL HORIZONTAL Y/O VERTICAL Y MURO DE CONTENCIÓN; ADEMÁS DE OTROS ACTIVOS EN EL(LA) PASAJE A, B Y C DEL A.A.H.H. MORADORES DEL PASAJE VENUS EN EL CENTRO POBLADO LAS PALMERAS, DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'LOS OLIVOS - LIMA',
            ano: 2025,
            descripcion: 'Ejecución de obras de infraestructura urbana destinadas a habilitar y mejorar la circulación peatonal mediante la construcción de pavimento, veredas, escaleras y/o rampas, complementadas con la edificación de un muro de contención y otros activos.',
            rubro: 'Obras Urbana',
            monto: 'S/  130,683.05 inc IGV',
            image: 'images/venus.jpg',
            galeria: ['venus.jpg','venus_1.jpg','venus_2-1.jpg','venus_2.jpg','venus_3.jpg','venus_4.jpg','venus_5.jpg','venus_6.jpg','venus_8.jpg','venus_9.jpg','venus.jpg']
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