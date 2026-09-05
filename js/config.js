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
            id: 'proy_01_parque_justicia',
            nombre: 'MEJORAMIENTO DEL SERVICIO DE ESPACIOS PÚBLICOS URBANOS EN EL PARQUE N° 02 (JUSTICIA) DEL AA.HH. LOS JAZMINES DEL NARANJAL DEL DISTRITO DE LOS OLIVOS DE LA PROVINCIA DE LIMA DEL DEPARTAMENTO DE LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'Lima,Lima,Los Olivos',
            ano: 2026,
            descripcion: 'Mejoramiento integral del Parque N° 02 (Justicia) a cargo del Consorcio Mompy, que abarca la renovación de pisos y caminerías, instalación de iluminación LED, áreas verdes, juegos infantiles y mobiliario urbano. La obra permite entregar a los vecinos de Los Jazmines del Naranjal un espacio público moderno, seguro y accesible para el esparcimiento familiar.',
            rubro: 'Obras Viales',
            monto: 'S/ 1,020,961.74 inc IGV',
            image: 'images/justicia_1.jpg',
            galeria: ['justicia_3.jpg','justicia_4.jpg','justicia_5.jpg','justicia_6.jpg','justicia_7.jpg']
            // Cuando subas fotos: image: 'images/parque-justicia-1.jpg', galeria: ['parque-justicia-1.jpg', 'parque-justicia-2.jpg']
        },
        {
            id: 'proy_02_calle17',
            nombre: 'RENOVACION DE PAVIMENTO, VEREDA Y SARDINEL; CONSTRUCCION DE RAMPA; ADEMAS DE OTROS ACTIVOS EN EL (LA) CALLE 17 DEL A.H. CHILLON Y URB. PROLIMA DISTRITO DE LOS OLIVOS, PROVINCIA LIMA, DEPARTAMENTO LIMA',
            cliente: 'MUNICIPALIDAD DISTRITAL DE LOS OLIVOS',
            ubicacion: 'Lima,Lima,Los Olivos',
            ano: 2026,
            descripcion: 'Renovación vial integral que abarca la reconstrucción de pistas, veredas, sardineles y la construcción de rampas de accesibilidad urbana. La obra permite entregar una infraestructura vehicular y peatonal optimizada, segura y totalmente accesible para el libre tránsito de la comunidad.',
            rubro: 'Obras Viales',
            monto: 'S/. 185,354.87 inc IGV',
            image: 'images/calle_17.jpg',
            galeria: ['calle_17_1.jpg','calle_17_2.jpg','calle_17_3.jpg','calle_17_4.jpg','calle_17_5.jpg']
            
            
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
            image: 'images/jazmines',
            galeria: ['jazmines_1.jpg','jazmines_2.jpg','jazmines_3.jpg','jazmines_4.jpg','jazmines_5.jpg']
        }
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