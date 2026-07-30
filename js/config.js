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
    projects: [
        {
            nombre: '[EDITAR] Nombre del Proyecto 1',
            cliente: '[EDITAR] Nombre del Cliente',
            ubicacion: '[EDITAR] Ubicación exacta de la obra',
            ano: 2025,
            descripcion: '[EDITAR] Descripción breve de la obra en 2-3 líneas: alcance, metrados principales y resultado.',
            rubro: 'Obras Viales',
            monto: 'S/ 0.00',
            image: '[AGREGAR FOTO]'
        },
        {
            nombre: '[EDITAR] Nombre del Proyecto 2',
            cliente: '[EDITAR] Nombre del Cliente',
            ubicacion: '[EDITAR] Ubicación exacta de la obra',
            ano: 2024,
            descripcion: '[EDITAR] Descripción breve de la obra en 2-3 líneas.',
            rubro: 'Saneamiento',
            monto: 'S/ 0.00',
            image: '[AGREGAR FOTO]'
        },
        {
            nombre: '[EDITAR] Nombre del Proyecto 3',
            cliente: '[EDITAR] Nombre del Cliente',
            ubicacion: '[EDITAR] Ubicación exacta de la obra',
            ano: 2023,
            descripcion: '[EDITAR] Descripción breve de la obra en 2-3 líneas.',
            rubro: 'Edificaciones',
            monto: 'S/ 0.00',
            image: '[AGREGAR FOTO]'
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
