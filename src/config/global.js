export default {
  global: {
    componenteFormativo: 'Operaciones del mercado cambiario',
    descripcionCurso:
      'Para la realización de operaciones de pago desde Colombia hacia el exterior y viceversa, las personas naturales y las personas jurídicas, deben tener en cuenta que existe un régimen de cambios internacionales colombiano, para lo que se requiere conocer la normatividad cambiaria y los procedimientos aplicables en cada caso, según la operación internacional que se vaya a realizar, con el propósito de no incurrir en infracciones cambiarias.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Operaciones del mercado cambiario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco legal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propósitos del régimen cambiario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mercado de divisas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Declaraciones de cambio',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Control cambiario',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Régimen sancionatorio cambiario ',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Declaración de datos mínimos en importaciones de bienes',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Declaración de datos mínimos en exportaciones de bienes',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo:
              'Operaciones de servicios, transferencias y otros conceptos',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Cuentas de compensación',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Medios de pago internacional',
            hash: 't_1_11',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Avella, M. (2007) “El encaje bancario en Colombia: Perspectiva general” Borradores de Economía No. 470, Banco de la República, Colombia Caballero, C. y Urrutia, M. (2006). Historia del sector financiero colombiano en el siglo XX. Asobancaria. Editorial Norma.',
      link: '',
    },
    {
      referencia: 'Banco de la República. (2005). Sectores económicos.  ',
      link: 'http://www.banrepcultural.org',
    },
    {
      referencia:
        'Cerviño, J. (2014). <i>Marketing </i> Internacional. Nuevas perspectivas para un mercado globalizado. ProQuest Ebook.',
    },
    {
      referencia:
        'Banco de la República de Colombia. Compendio actualizado de la Circular Reglamentaria DCIN-83 vigente hasta el 31 de agosto de 2021. ',
      link: 'https://www.banrep.gov.co/es/compendio-dcin83',
    },
    {
      referencia:
        'Maigushca Olano, Ana Fernanda, Nuevo Marco Normativo para las operaciones del Mercado Cambiario. ',
      link:
        'https://www.banrep.gov.co/es/publicaciones/documento-tecnico-nuevo-marco-normativo-para-las-operaciones-del-mercado-cambiario',
    },
    {
      referencia:
        'Compendio de Resolución Externa No. 1 DE 2018 (mayo 25) de la JDBR. ',
      link:
        'https://www.banrep.gov.co/sites/default/files/reglamentacion/compendio-res-ext-1-de-2018.pdf',
    },
    {
      referencia:
        'Sánchez, F., Fernández, A. y Armenta, A. (2007) “Historia monetaria de Colombia en el siglo XX”. Cap. 7 Historia colombiana del siglo XX. Fondo de Cultura Económica y Banco de la República.',
      link: '',
    },
    {
      referencia:
        'Sepúlveda L., César. Diccionario de términos económicos, Editorial Universitaria, 1995.',
      link: '',
    },
    {
      referencia:
        'Uribe, J.D. (2010) <i>“10 Years of Flexible Inflation Targeting in Colombia” </i>',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/jdu_abr_2010_0.pdf',
    },
    {
      referencia:
        'Urrutia, M. y Fernández, C. (2004) “Política monetaria expansiva en épocas de crisis: El caso colombiano en el siglo XX. Banco de la República. ',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/Politica-monetaria.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Canalización',
      significado:
        'Negociación o transferencia de divisas en el mercado cambiario (IMC o cuentas de compensación). Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Cuentas de compensación',
      significado:
        'Son cuentas bancarias en el exterior por medio de las cuales se canalizan los ingresos o egresos por operaciones de cambio de obligatoria canalización, por operaciones que sin tener la obligación voluntariamente se canalicen a través de las mismas, y las derivadas del cumplimiento de obligaciones entre residentes. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Declaración de cambio',
      significado:
        'Información de los datos mínimos de las operaciones de cambio que deben presentar los residentes y no residentes cuando efectúen en el país una operación de cambio por conducto del mercado cambiario (IMC o cuentas de compensación). Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Divisa',
      significado:
        'moneda extranjera referida a la unidad del país de que se trata. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Exportaciones de bienes',
      significado:
        'Es la salida de mercancías del territorio aduanero nacional con destino a otro país (Artículo 3, Decreto 1165 de 2019). También se considera exportación, además de las operaciones expresamente consagradas como tales en dicho decreto, la salida de mercancías a una zona franca y a un depósito franco. Independientemente de la regulación aduanera, el régimen cambiario considera estas últimas como operaciones internas, cuando han sido realizadas entre residentes, dado que los usuarios de zona franca están sometidos a los mismos términos y condiciones aplicables a los residentes en sus operaciones de cambio. En adición a lo anterior, las operaciones de salida de mercancía desde zona franca al resto del mundo, si bien no son consideradas exportaciones de bienes, para efectos cambiarios se asimilan a estas; por tanto, su pago deberá efectuarse en el mercado cambiario, con las mismas reglas de las exportaciones de bienes. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Giro',
      significado:
        'Transferencia de divisas hacia el exterior, bien sea que se adquieran mediante los IMC o se efectúen desde cuentas de compensación. Entre otras, se presentan en operaciones de importaciones de bienes. La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Importaciones de bienes',
      significado:
        'es la introducción de mercancías de procedencia extranjera al territorio aduanero nacional (artículo 3, Decreto 1165 de 2019). También, se considera importación, la introducción de mercancías procedentes de Zona Franca, o de un depósito franco al resto del territorio aduanero nacional. Independientemente de la regulación aduanera, el régimen cambiario considera estas últimas como operaciones internas, cuando han sido realizadas entre residentes, dado que los usuarios de zona franca están sometidos a los mismos términos y condiciones aplicables a los residentes en sus operaciones de cambio. En adición a lo anterior, las operaciones de introducción de mercancía a zona franca desde el resto del mundo, si bien no son consideradas importaciones de bienes, para efectos cambiarios se asimilan a estas; por tanto, su pago deberá efectuarse en el mercado cambiario, con las mismas reglas de las importaciones de bienes. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Intermediarios del Mercado Cambiario (IMC)',
      significado:
        'Son entidades vigiladas por la Superintendencia Financiera de Colombia, a través de las cuales se canalizan operaciones de cambio de obligatoria o voluntaria canalización. Son intermediarios del mercado cambiario los establecimientos bancarios, las corporaciones financieras, las compañías de financiamiento, la Financiera de Desarrollo Nacional S.A. (FDN), el Banco de Comercio Exterior de Colombia S. A. (BANCOLDEX), las cooperativas financieras, las sociedades comisionistas de bolsa de valores, las sociedades de intermediación cambiaria y de servicios financieros especiales (SICSFE), las sociedades especializadas en depósitos y pagos electrónicos (SEDPE), la Financiera de Desarrollo Territorial (FINDETER), el Fondo para el Financiamiento del Sector Agropecuario (FINAGRO), El Instituto Colombiano de Crédito Educativo y Estudios Técnicos en el Exterior (ICETEX), la Empresa Nacional Promotora del Desarrollo Territorial (en territorio) y el Fondo Nacional del Ahorro (FNA).  Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Mercado cambiario',
      significado:
        'Está constituido por la totalidad de las divisas de las operaciones de cambio que obligatoria o voluntariamente se negocien o transfieran por conducto de los Intermediarios del Mercado Cambiario o de cuentas de compensación. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Monetización',
      significado:
        'Es la venta de divisas por moneda legal colombiana, efectuada con los IMC. Se encuentra presente en operaciones de ingreso de divisas, como, por ejemplo: exportación de bienes, inversión extranjera, endeudamiento externo, entre otras. República (2020). Conceptos Generales.',
    },
    {
      termino: 'Numeral cambiario',
      significado:
        'Código asignado por el Banco de la República para identificar las operaciones de cambio que se canalizan por el mercado cambiario. Se debe utilizar al suministrar la información de datos mínimos de las operaciones de obligatoria y voluntaria canalización. Estos se encuentran definidos en el Anexo 3 de la DCIN-83. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Operaciones de cambio',
      significado:
        'Son aquellas comprendidas dentro de las categorías señaladas en el artículo 4 de la Ley 9 de 1991 y el artículo 2.17.1.1 del Decreto 1068 de 2015. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Operaciones internas',
      significado:
        'Son las que se realizan entre residentes, entre residentes y usuarios de zona franca o entre estos últimos, independientemente de su regulación aduanera, y por lo tanto se deben pagar en moneda legal colombiana. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Principio de coincidencia',
      significado:
        'Consiste en que la canalización de las divisas para el pago de una operación de cambio obligatoriamente canalizable debe ser realizada directamente por el titular de la operación. Para el caso de las operaciones de comercio exterior, el titular de la operación será quien figure en los documentos aduaneros como importador o exportador. Por su parte, las cuentas de compensación solo podrán utilizarse para canalizar ingresos y egresos de operaciones de cambio propias del titular de la cuenta. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Reintegro',
      significado:
        'Son transferencias de recursos que ocasionan la entrada de divisas al mercado cambiario, bien sea mediante su venta a los IMC o por ingreso de divisas a las cuentas de compensación. Por lo general, se presentan en operaciones de exportaciones de bienes. Banco de La República (2020). Conceptos Generales.',
    },
    {
      termino: 'Residentes',
      significado:
        'Para efectos del régimen cambiario, se consideran residentes a) Las personas naturales nacionales colombianas que habiten en el territorio nacional o las extranjeras que permanezcan continua o discontinuamente en el país por más de 183 días calendario, incluyendo los días de entrada y de salida del país, durante un periodo de 365 días calendario consecutivos; y b) Las entidades de derecho público, las personas jurídicas, incluidas las entidades sin ánimo de lucro, que tengan su domicilio principal en el país. Igualmente, tienen la condición de residentes para efectos cambiarios las sucursales de sociedades extranjeras establecidas en el país. (Decreto 119 de 2017, Artículo 2.17.1.2). todas las personas naturales que habitan en el territorio nacional. Asimismo, se consideran residentes las entidades de derecho público, las personas jurídicas, incluidas las entidades sin ánimo de lucro que tengan domicilio en Colombia, y las sucursales de sociedades extranjeras establecidas en el país. Banco de La República (2020). Conceptos Generales.',
    },
  ],
  complementario: [
    {
      texto: 'Banco de la República de Colombia',
      tipo: 'Pdf',
      link: 'https://www.banrep.gov.co/sites/default/files/paginas/cp91.pdf ',
    },
    {
      texto: 'Banco de la República de Colombia',
      tipo: 'Pdf',
      link:
        'https://www.banrep.gov.co/sites/default/files/paginas/LEY09DE1991CONHIPERVINCULOS-1.pdf',
    },
    {
      texto: 'Banco de la República de Colombia.',
      tipo: 'Pdf',
      link:
        'https://www.banrep.gov.co/sites/default/files/reglamentacion/archivos/decreto119.pdf',
    },
    {
      texto: 'Banco de la República de Colombia. ',
      tipo: 'Pdf',
      link:
        'https://www.banrep.gov.co/sites/default/files/reglamentacion/compendio-res-ext-1-de-2018.pdf',
    },
    {
      texto: 'Banco de la República de Colombia.',
      tipo: 'Pdf',
      link: 'https://www.banrep.gov.co/es/compendio-dcin83',
    },
    {
      texto: 'Juriscol ',
      tipo: 'Página web',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1424757',
    },
    {
      texto:
        'Decreto 390 DE 2016 [Ministerio de Comercio, Industria y Turismo]. Por el cual se establece la regulación aduanera. 07 de marzo de 2016',
      tipo: 'Presentación',
      descarga: 'downloads/Anexo_1.pdf',
    },
    {
      texto: '(Banco de la República, 2021)',
      tipo: 'Formulario',
      link: 'downloads/Anexo_2.pdf',
    },
    {
      texto: '(Banco de la República, 2021)',
      tipo: 'Formulario',
      link: 'downloads/Anexo_3.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alejandro Acevedo Tabares',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Antioquia ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
