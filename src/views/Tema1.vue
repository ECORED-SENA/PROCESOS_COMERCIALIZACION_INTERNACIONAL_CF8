<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Operaciones del mercado cambiario
    
    .jumbotron.mb-5
      .row.align-items-center
        .col-lg-7.mb-5.mb-lg-0
          .p-4
            h4 Mercado cambiario
            p.mb-3 El mercado cambiario estará constituido por la totalidad de las divisas que deban ser transferidas o negociadas por conducto de los intermediarios que se autoricen en desarrollo de esta Ley. El Gobierno Nacional fijará las normas tendientes a organizar y regular el funcionamiento de este mercado. Además, establecerá las operaciones de cambio cuyo producto en moneda extranjera no deba ser transferido o negociado a través del mercado cambiario y los mecanismos que podrán utilizarse para la posesión o negociación de las divisas correspondientes en el país. 
    
            .cajon.color-custom.p-4
              .h5 Parágrafo
              p.mb-0 Los ingresos de divisas por concepto de servicios prestados por residentes en el país, quedarán exentos de la obligación de ser transferidos o negociados a través de mercado cambiario.

        .col-lg-5.pt-4.align-self-end
          img(src="@/assets/curso/images/tema1/img_1.svg", alt= "") 

    p.mb-5 Y debemos tener en cuenta que en el artículo 36 de la Resolución Externa  01 de 2018 se encuentra una ampliación a la definición de Mercado Cambiario de la Ley 9 de 1991. Este artículo dice:

    .row.justify-content-center.mb-5
      .col-lg-10.col-xl-8
        .jumbotron-1.p-4
          .row.align-items-center.justify-content-around
            .col-6.col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/images/tema1/img_2.svg" alt="") 
            .col-lg-5.mb-lg-0
                .bloque-texto-b
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left.color-1
                    p El mercado cambiario está constituido por la totalidad de las divisas que deben canalizarse obligatoriamente por conducto de los intermediarios autorizados para el efecto o a través del mecanismo de compensación previsto en esta resolución. También formarán parte del mercado cambiario las divisas que, no obstante estar exentas de esa obligación, se canalicen voluntariamente a través del mismo.
                    i.fas.fa-quote-right.color-1
    

    p.mb-5 A continuación conozcamos cuáles son las operaciones que están sujetas al régimen cambiario.

    .row.justify-content-center
      .col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1 
          br
          span Operaciones sujetas al régimen cambiario

    p.mb-5 El Gobierno Nacional determinará las distintas operaciones de cambio que estarán sujetas a lo previsto en esta ley, con base en las siguientes categorias (Artículo 4° Ley 9 de 1991) 
    .row.mx-0.mb-5
      .col-md-6.col-xl-3.px-0.mb-xl-0
        .tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-1
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_3.svg')})`}")
            .tarjeta-flip__contenido.p-5
              p.text-center Los actos, contratos y operaciones de adquisición, tenencia o disposición de bienes o derechos en el extranjero realizados por residentes, y los actos, contratos y operaciones de adquisición, tenencia o disposición de bienes o derechos en Colombia por parte de no residentes.

      .col-md-6.col-xl-3.px-0.mb-xl-0
        .tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-2
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_4.svg')})`}")
            .tarjeta-flip__contenido.p-5
              p.text-center Los actos, contratos y operaciones en virtud de los cuales un residente resulte o pueda resultar acreedor o deudor de un no residente y los actos de disposición sobre los derechos u obligaciones derivados de aquellos.

      .col-md-6.col-xl-3.px-0.mb-sm-0
        .tarjeta-flip.color-tarjeta-1(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-1
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_5.svg')})`}")
            .tarjeta-flip__contenido.p-5
              p.text-center La tenencia, adquisición o disposición de activos en divisas por parte de residentes o, cuando se trate de no residentes, la tenencia, adquisición o disposición de activos en moneda legal colombiana.

      .col-md-6.col-xl-3.px-0.mb-sm-0
        .tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-2
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_6.svg')})`}")
            .tarjeta-flip__contenido.p-5
              p.text-center Las entradas o salidas del país de divisas o moneda legal colombiana y de títulos representativos de las mismas.Los actos en virtud de los cuales se produzca la extinción de obligaciones entre residentes y no residentes.

    
    
    p.mb-3 Ahora, debemos conocer cuáles de las operaciones estudiadas anteriormente, debemos canalizar obligatoriamente a través del mercado cambiario colombiano, y esta información nos la da el artículo 41 de la Resolución Externa 1 de 2018.

    p.mb-5 Estudiemos cada una de ellas.
    .row.justify-content-center.align-items-center 
      .col-10
        LineaTiempoB.back-line.mb-5(:datos="datosLineaTiempoB").p-4

    .row.justify-content-center.align-items-center 
      .col-10
        .cajon.color-custom-1.p-4.mb-4
          p.mb-0 El Banco de la República mediante reglamentación de carácter general podrá establecer excepciones a la canalización de estas operaciones.  

    p.mb-5 Para concluir, estudiemos los siguientes artículos  de la Ley 9 de 1991, los cuales nos especifican cuáles son las divisas que los residentes colombianos puedan tener o negociar libremente en Colombia, y las operaciones que realizan los residentes con otros residentes en el país.

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.sp1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/tema1/ico_9.svg', alt="")
          
        .h2.text-center.text-white Artículo 7º
        p.text-center.text-white Tenencia de divisas por residentes en el país. Será libre la tenencia, posesión y negociación de divisas que no deban ser transferidas o negociadas por medio del mercado cambiario. En todo caso, dentro de la libertad autorizada, el Gobierno Nacional podrá regular estas operaciones con sujeción a los propósitos contenidos en el artículo 2º. de esta Ley.
      .col-md.tarjeta.sp2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/tema1/ico_10.svg', alt="")
            br
          .h2.text-center.text-white Artículo 83º
          p.text-center.text-white PROHIBICIÓN DE OPERACIONES EN MONEDA EXTRANJERA EN EL PAÍS. Salvo lo dispuesto en normas especiales de la presente resolución, no está autorizada la realización de depósitos o de cualquier otra operación financiera en moneda extranjera o, en general, de cualquier contrato o convenio entre residentes en moneda extranjera mediante la utilización de las divisas de que trata este título.

    #t_1_1.titulo-segundo
      .h4 1.1  Marco legal
    
    p.mb-3 El régimen cambiario colombiano está enmarcado en normas que van desde la Constitución Política de Colombia, hasta las normas que determinan los procedimientos y las obligaciones a realizar por parte de los residentes y no residentes que efectúen operaciones de cambio en el país. Y podemos encontrarlo en:

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          br
          span Marco legal régimen cambiario colombiano

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h5.text-white.mb-0 Marco Legal
      table
        tr
          th Constitución Política de Colombia
          td Artículos 113,150,189,371,372 y 373
          td Relacionados con el régimen cambiario.
        tr
          th Estatuto Cambiario Colombiano
          td Ley 9 de 1991
          td Ley marco de los cambios internacionales.
        tr
          th Régimen general de la inversión de capitales del exterior en Colombia
          td Decretos 119 de 2017 y 1068 de 2015
          td Por medio del cual se expide el Decreto Único Reglamentario del Sector Hacienda y Crédito Público.
        tr
          th Banco de la República
          td Circular Externa 1 de 2018
          td En la cual se compendia y modifica el régimen de cambios internacionales y consta de 109 artículos.
        tr
          th Circular Reglamentaria
          td DCIN-83
          td Determina los procedimientos aplicables para cada una de las operaciones del régimen cambiario colombiano.

    p.mb-5 Y en la siguiente imagen podemos observar el orden jerárquico de las normas del régimen cambiario colombiano.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Jerarquía normas régimen cambiario colombiano

    .row.justify-content-center.align-items-center
        .col-lg-12.mb-5.mb-lg-8.fondo-1
          img(src="@/assets/curso/images/tema1/img_7.svg", alt="", style="width:700px; display:block; margin:0 auto;")
    
    Separador 
   
    #t_1_2.titulo-segundo
      .h4 1.2 Propósitos del régimen cambiario

    p.mb-5 El régimen cambiario, establece mecanismos de control y supervisión a todas las operaciones que estén relacionadas con el mercado exterior, impulsando y facilitando así el proceso de internacionalización y promoviendo la competitividad del país. Adicional, también encontramos que tiene unos propósitos, los cuales están relacionados en el artículo 2 de la Ley 9 de 1991 y citan lo siguiente:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema1/infografia.svg', alt= "")
          
      .tarjeta.slyder-color-1.p-3(x="56%" y="18%") 
        .h5.mb-2 
        p.text-white Propiciar la internacionalización de la economía colombiana con el fin de aumentar su competitividad en los mercados externos.  

      .tarjeta.slyder-color-1.p-3(x="50%" y="39%")
        .h5.mb-2 
        p.text-white Promover, fomentar y estimular el comercio exterior de bienes y servicios, en particular las exportaciones, y la mayor libertad en la actuación de los agentes económicos en esas transacciones. 

      .tarjeta.slyder-color-1.p-3(x="51%" y="60%")
        .h5.mb-2 
        p.text-white Facilitar el desarrollo de las transacciones corrientes con el exterior y establecer los mecanismos de control y supervisión adecuados. 
      
      .tarjeta.slyder-color-1.p-3(x="56%" y="81%")
        .h5.mb-2
        p.text-white Estimular la inversión de capitales del exterior en el país. 

      .tarjeta.slyder-color-1.p-3(x="90%" y="26%")
        .h5.mb-2 
        p.text-white Aplicar controles adecuados a los movimientos de capital. 

      .tarjeta.slyder-color-1.p-3(x="93%" y="49%")
        .h5.mb-2
        p.text-white Propender por un nivel de reservas internacionales suficiente para permitir el curso normal de las transacciones con el exterior. 

      .tarjeta.slyder-color-1.p-3(x="90%" y="71%")
        .h5.mb-2 
        p.text-white Coordinar las políticas y regulaciones cambiarias con las demás políticas macroeconómicas. Los anteriores criterios se aplicarán con arreglo a los principios de economía, celeridad, eficacia, imparcialidad, publicidad y contradicción, orientadores de las actuaciones administrativas.

    Separador 
   
    #t_1_3.titulo-segundo
      .h4 1.3 Mercado de divisas

    p.mb-3 La divisa es la moneda utilizada por un país ajeno a su lugar de origen. En otras palabras, no es más que la moneda extranjera respecto a un país referencia. La compra y venta de estas, se realiza en el mercado de divisas, donde intervienen, entre otros, los bancos, empresas e incluso particulares a nivel nacional e internacional.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg.order-2.order-lg-1
        .custom_box_right    
          p.mb-0 <b>En el mercado de divisas colombiano, se encuentran dos mercados principales que son: </b>
          p.mb-0 El mercado cambiario también llamado mercado regulado y el mercado no regulado o no cambiario, que es normalmente conocido como el mercado libre. 
      .col-auto.mb-5.mb.onTop.order-1.order-lg-2
        img(src="@/assets/curso/images/tema1/img_8.svg" alt='AvatarTop', style="width:320px;")
      
    p.mb-3 En estos mercados se realizan las operaciones de cambio que son necesarias para el envío y recepción de divisas desde o hacia Colombia.

    p.mb-5 Las diferentes operaciones de cambio y el mercado por el cual se deben enviar o recibir las divisas, se deberá consultar previo a la realización de la transferencia, y así cumplir con la normatividad cambiaria aplicable en cada caso.

    .row.justify-content-center.fondo-2 
      .col-6.col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/img_9.svg", alt="",)
      .col-lg-8.mb-5.mb-lg-0
        .row.justify-content-center.align-items-center
          .col-12.col-md-8.col-lg-8.col-xl-10
            .cajon.color-custom-1.p-4.mb-4
              p.mb-0 Al realizar operaciones de cambio por medio del mercado cambiario, se está cumpliendo con el procedimiento de canalización de divisas. Al realizar operaciones por el mercado libre no se están canalizando las divisas. 

            p Cabe recordar que las operaciones de obligatoria canalización están dichas en el artículo 41 de la Resolución Externa 1 de 2018.

    Separador 
   
    #t_1_4.titulo-segundo
      .h4 1.4 Declaraciones de cambio   
    
    p.mb-5 Son los diferentes formatos que se deben utilizar al efectuar algún tipo de operación cambiaria, para informar a las entidades pertinentes sobre la transacción realizada. Para una definición más técnica, nos remitimos al capítulo IV, artículo 88 “Información Cambiaria y Otras Obligaciones”, contenido en la Resolución Externa  1 de 2018:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mx-0.mb-lg-0.p-0
          img(src="@/assets/curso/images/tema1/img_10.svg" alt="",)
      .col-lg-6.mx-0.mb-lg-0.fondo-4.p-4.mt-5
          .bloque-texto-b.p-4.mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p <b>La declaración de cambio es la información de los datos mínimos de las operaciones de cambio canalizadas por conducto del mercado cambiario, suministrada por los residentes y no residentes que realizan las operaciones de cambio y transmitida al Banco de la República por los intermediarios del mercado cambiario y los titulares de cuentas de compensación. </b>
                i.fas.fa-quote-right
          p.mb-3 En estas declaraciones se deben reportar los datos mínimos que exige el Banco de la República y la Dian, contenidos en formatos establecidos por los intermediarios del mercado cambiario o en formularios del Banco de la República, que pueden tener fines estadísticos o de vigilancia y control, y en los cuales se reporta la información sobre montos, características y demás condiciones de la operación, que se celebra a través del mercado cambiario. 

          p Igualmente, al realizar una operación ante los profesionales de compra y venta de divisas se diligencia una declaración de cambio (mercado libre). 
         
    
    .row.align-items-center.mb-5
      .row.fondo-5.mb-3
        .col-lg-8.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-md-8.col-lg-8.col-xl-10
              p.mb-3 En el literal 1.1. del capítulo 1 de la Circular Reglamentaria DCIN-83 encontramos lo siguiente:
              .bloque-texto-b.p-4.mb-3
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p <b>…los residentes y no residentes que realicen operaciones de cambio deberán suministrar a los intermediarios del mercado cambiario (en adelante IMC) y al Banco de la República (en adelante BR) en el caso de las cuentas de compensación, la información de los datos mínimos que el BR requiera, de las operaciones que canalicen por conducto del mercado cambiario (Declaración de Cambio). </b>
                  i.fas.fa-quote-right
              
        .col-lg-4.mb-5.mb-lg-0
            img.my-3(src="@/assets/curso/images/tema1/img_11.svg", alt="", style="width:300px; display:block; margin:0 auto;")
  
    .row.justify-content-center
      p.mb-3 Con respecto a las declaraciones de cambio los residentes y no residentes que las proporciones tienen las siguientes obligaciones:

      p.mb-3 <b> Obligaciones residentes y no residentes</b>

      p.mb-5 Los residentes o no residentes que realicen una operación de cambio deberán: 

      .row.justify-content-center.align-items-center
        .col-lg-6.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema1/img_12.svg" alt="", style="width:400px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema1/ico_18.svg' alt="", style="width:70px; display:block; margin:auto 0;")    
            .col
              p.mb-2 Suministrar la información veraz y completa de los datos mínimos de las operaciones de cambio que se canalicen por conducto del mercado cambiario (Declaración de Cambio).
          hr.mt-5.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema1/ico_19.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
            .col
              p Conservar los documentos que acrediten el monto, características y demás condiciones de la operación y el origen o destino de las divisas, según el caso, por un período igual al de caducidad o prescripción de la acción sancionatoria por infracciones al régimen cambiario. Tales documentos deberán presentarse a las entidades encargadas del control y vigilancia del cumplimiento del régimen cambiario que los requieran, o dentro de las actuaciones administrativas que se inicien para determinar la comisión de infracciones cambiarias.
          hr
    
    Separador 
   
    #t_1_5.titulo-segundo
      .h4 1.5 Control cambiario 
    

    p.mb-5 Es una medida de protección que un estado realiza sobre su moneda y sus reservas internacionales. Se pueden establecer medidas restrictivas para el ingreso y la salida de las divisas del país y a su vez obligaciones de reporte de información sobre dichas operaciones.

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.mb-5.mb-lg-0
          .bloque-texto-b.color-custom-2.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h4.text-regular <b>Está  constituido por políticas de la autoridad monetaria implementadas a través del sistema monetario tendientes a controlar la compra y venta de moneda extranjera.</b>
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              p.mb-0 Sepúlveda (p.55)

    p.mb-3 La Dirección de Impuestos y Aduanas Nacionales, DIAN, tiene la obligación de vigilar y controlar el cumplimiento de la normatividad cambiaria en las siguientes operaciones: 

  
    .jumbotron-11.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_11.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
            
            .tarjeta.color-secundario
              .text-white.p-4
                p.text-center <b>Importaciones y exportaciones de bienes y servicios.</b>

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_12.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
          
            .tarjeta.color-secundario
              .text-white.p-4
                p.text-center <b>Gastos asociados a las importaciones y exportaciones de bienes y servicios.</b>
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema1/ico_13.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
            
            .tarjeta.color-secundario
              .text-white.p-4
                p.text-center <b>Financiación de operaciones de importación y exportación de bienes. </b>
      .row.justify-content-center.mb-3
            .col-md-6.col-lg-4.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/images/tema1/ico_20.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
              
                .tarjeta.color-secundario
                  .text-white.p-4
                    p.text-center <b>Cumplimiento de obligaciones de los titulares de cuentas de compensación que canalicen operaciones de competencia de la DIAN.</b>
       
            .col-md-6.col-lg-4.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/images/tema1/ico_21.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
                
                .tarjeta.color-secundario
                  .text-white.p-4
                    p.text-center <b>Todas las demás operaciones del régimen cambiario cuya vigilancia y control no sea de competencia de otra entidad (competencia residual cambiaria).</b>

    p.mb-5 También la DIAN realiza vigilancia y control sobre algunas operaciones que no son de obligatoria canalización y que son de libre tenencia, posesión y negociación dentro de lo estipulado por el régimen cambiario colombiano, tal como se registra en los siguientes cuadros.

    .row.justify-content-center.align-items-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema1/ico_14.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
          .tarjeta.sp3
            .p-5
              p Ingreso o egreso de divisas por los viajeros. 
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema1/ico_15.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
          
          .tarjeta.sp3
            .p-4
              p La compraventa de divisas y cheques de viajero de manera profesional ejercida por las residentes en el país. 

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema1/ico_16.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
          
          .tarjeta.sp3
            .p-3
              p Las recibidas por las agencias de turismo y los hoteles por bienes y servicios vendidos a turistas extranjeros. 

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema1/ico_17.svg' alt='AvatarTop', style="width:120px; display:block; margin:auto 0;")
         
          .tarjeta.sp3
            .p-4
              p.mb-4 Las operaciones entre residentes en el país en moneda extranjera.

    Separador 
   
    #t_1_6.titulo-segundo
      .h4 1.6 Régimen sancionatorio cambiario 
  
    p.mb-3 El régimen sancionatorio cambiario en Colombia está establecido por lo dispuesto en el Decreto 2245 de 2011 y las actuaciones administrativas del mismo se encuentran bajo responsabilidad de la DIAN. En el artículo 2 de este decreto, se establece la definición de Infracción Cambiaria:

    PasosA.color-acento-botones.mb-5(tipo="n")
      div
        h5 Artículo 2°. Infracción cambiaria
        p La infracción cambiaria es una contravención administrativa de las disposiciones constitutivas del régimen cambiario vigentes al momento de la transgresión, a la cual corresponde una sanción cuyas finalidades son el cumplimiento de tales disposiciones y la protección del orden público económico. 

      div
        h5 Artículo 3° 
        p.mb-3 Se establece la forma de liquidar el valor de la sanción según la operación cambiaria que es objeto de infracción.

        p.mb-3 Las sanciones por infracciones cambiarias que son competencia de la DIAN pueden ser determinadas tanto en Unidades de Valor Tributario (U.V.T) o en porcentajes (%) sobre el monto de la operación realizada.

        p.mb-3 Las sanciones deberán ser pagadas en moneda legal colombiana y en caso de que la operación esté denominada en divisas, se utilizará la Tasa Representativa del Mercado (TRM) certificada y publicada por la Superintendencia Financiera de Colombia, para la fecha de ocurrencia del hecho constitutivo de infracción.

      div
        h5 Artículo 3°. Sanción
        p Las personas naturales o jurídicas y demás entidades asimiladas a estas que infrinjan el régimen cambiario respecto de operaciones y obligaciones cuya vigilancia y control sea de competencia de la Dirección de Impuestos y Aduanas Nacionales, serán sancionadas con la imposición de multa…  

    p.mb-5 Los aspectos sobre los cuales el régimen sancionatorio cambiario tiene autoridad de emitir sanción son los siguientes:

    .row.mb-5(data-aos="fade-right")
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema1/img_13.svg", alt="", style="width:400px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Declaración de cambio. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Operaciones canalizables a través del mercado cambiario.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Operaciones indebidamente canalizadas a través del mercado cambiario.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Depósito. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Cuentas de compensación. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Incumplimiento de las obligaciones de solicitar la autorización previa al Banco de la República; o de registrar, reportar, transmitir, actualizar o informar directamente a dicha Entidad o a través de los intermediarios del mercado cambiario.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Compra y venta de manera profesional de divisas en efectivo y cheques de viajero. 
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Transferencias de dinero no autorizadas. Operaciones financieras y pagos no autorizados de  operaciones internas en moneda extranjera. Operaciones de derivados. 
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Entrada o salida del país de dinero en efectivo y de títulos representativos de dinero. 
              li 
                .lista-ol--cuadro__vineta
                  span 10
                | Hoteles y agencias de turismo. 
              li 
                .lista-ol--cuadro__vineta
                  span 11
                | Presentación de documentos e información a la Dirección de Impuestos y Aduanas Nacionales, DIAN, como entidad de control y vigilancia del cumplimiento del régimen cambiario. 
              li 
              .lista-ol--cuadro__vineta
                span 12
              | Sanción residual.  

    p.mb-3 Es de anotar que la acción sancionatoria prescribe a los 5 años, según lo estipulado en el artículo 5 del Decreto  2245 de 2011:

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema1/img_14.svg", alt="", style="width:300px; display:block; margin:0 auto;")
      .col-lg-8.mb-5.mb-lg-0
            .bloque-texto-b.color-secundario.p-4.mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left.color-1

                p.mb-3  Artículo 5°. Prescripción de la acción sancionatoria. La imposición de sanciones cambiarias requiere la formulación previa de un acto de formulación de cargos a los presuntos infractores, el cual deberá notificarse dentro de los cinco (5) años siguientes a la fecha en que ocurrieron los hechos constitutivos de infracción. 
                br
                br
                p.mb-3 Dentro de los dos (2) años siguientes al vencimiento del término de respuesta al acto de formulación de cargos deberá expedirse y notificarse la resolución sancionatoria o de terminación de la investigación, según sea el caso, previa la práctica de las pruebas a que hubiere lugar. 
                br
                br
                p La prescripción deberá decretarse de oficio o a solicitud del interesado.  

                i.fas.fa-quote-right.color-1
              .bloque-texto-d__autor
                .h6.mb-0 
          
    Separador 
  
    #t_1_7.titulo-segundo
      .h4 1.7 Declaración de datos mínimos en importaciones de bienes 
    .row
      p.mb-5 Al realizar un proceso de importación de bienes en el país, se debe presentar la información de datos mínimos (declaración de cambio) en importaciones de bienes, la cual se encuentra establecida en el capítulo 3 de la Circular Reglamentaria  DCIN-83:
    
      SlyderB.mb-5(:datos="datosSlyder")

    p.mb-5 En el literal 3.5 del mismo capítulo, se encuentra la información de los datos mínimos de las operaciones de cambio por importaciones de bienes (Declaración de Cambio), que deberán ser informados ante los intermediarios del mercado cambiario o directamente al Banco de la República. En estos datos se encuentra información de:

    .jumbotron-12.p-4(data-aos="fade-up")
      .row.justify-content-center.align-items-center
          img(src="@/assets/curso/images/tema1/img_17.svg", alt="", style="width:1000px; display:block; margin:0 auto;")
    Separador 
  
    #t_1_8.titulo-segundo
      .h4 1.8 Declaración de datos mínimos en exportaciones de bienes 
    .row
      p.mb-5 Al realizar un proceso de exportación de bienes en el país, se debe presentar la información de datos mínimos (declaración de cambio) en exportaciones de bienes, la cual se encuentra establecida en el capítulo 4 de la Circular Reglamentaria  DCIN-83:

    .row.justify-content-center.align-items-center.mb-5  
        .col-lg-4.mb-3.mb-lg-0 
            .tarjeta_Sp-13.p-4
              p.text-center.small.text Los residentes deberán canalizar a través del mercado cambiario las divisas provenientes de sus exportaciones, incluidas las que reciba en efectivo directamente del comprador del exterior, dentro de los seis (6) meses siguientes a la fecha de su recibo, correspondientes tanto a exportaciones ya realizadas como a las recibidas en calidad de pago anticipado por futuras exportaciones de bienes.
        .col-lg-4.mb-3.mb-lg-0
          .tarjeta_Sp-14.p-4
              p.text-center.small.text Conforme a la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República (en adelante R.E. 1/18 J.D.) los residentes deberán canalizar a través del mercado cambiario las divisas por concepto de garantías otorgadas en desarrollo de sus exportaciones. 
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta_Sp-15.p-4
              p.text-center.small.text Para estos efectos, deben suministrar al IMC la información de los datos mínimos de cada operación (Declaración de Cambio) exigidos en el numeral 4.6 de este Capítulo. Cuando la operación se canalice a través de cuentas de compensación el Formulario No. 10 “Registro, Informe de Movimientos y/o Cancelación Cuenta de Compensación” hará las veces de la declaración de cambio, el cual se transmitira por el titular de la cuenta de compensación de acuerdo con los procedimientos señalados en el Capítulo 8 de esta Circular. 
    
    p.mb-5 En el literal 4.6 del mismo capítulo, se encuentra la información de los datos mínimos de las operaciones de cambio por importaciones de bienes (Declaración de Cambio), que deberán ser informados ante los Intermediarios del Mercado Cambiario o directamente al Banco de la República. En estos datos se encuentra información de:

    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-up")
      img(src="@/assets/curso/images/tema1/img_18.svg", alt="", style="width:1000px; display:block; margin:0 auto;")

    Separador 
  
    #t_1_9.titulo-segundo
      .h4 1.9 Operaciones de servicios, transferencias y otros conceptos
    .row
      p.mb-3 En el capítulo 10 de la Circular Reglamentaria DCIN-83 encontramos lo relacionado con estas operaciones. En el literal 10.2 dice lo siguiente:

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema1/img_19.svg", alt="", style="width:300px; display:block; margin:0 auto;")
      .col-lg-8.mb-5.mb-lg-0
          .bloque-texto-b.color-secundario.p-4.mb-3
            .bloque-texto-b__texto
             
              p.mb-3  Los residentes podrán efectuar la compra y venta de divisas por concepto de servicios, transferencias y otros conceptos, para lo cual, deberán suministrar la información de los datos mínimos para estas operaciones de cambio (Declaración de Cambio) a los Intermediarios del Mercado Cambiario (en adelante IMC). En caso que la operación se realice a través de cuentas de compensación, el Formulario 10 hará las veces de la declaración de cambio. Este procedimiento también se utilizará para la compra de divisas con destino a las cuentas bancarias en moneda extranjera en entidades financieras del exterior y para la compra y venta de divisas a IMC por concepto de las regalías de que trata el artículo 104 de la Resolución Externa 1 de 2018 (en adelante R.E. 1/18 J.D.), utilizando los numerales cambiarios 1815 y 2903. 

  
    p.mb-3 En el evento en que se canalicen voluntariamente en el mercado cambiario, operaciones de servicios transferencias y otros conceptos, se deberán tener en cuenta los requisitos para informar los datos mínimos de estas operaciones (declaración de cambio) los cuales se encuentran en el literal 10.9 del mismo capítulo. 

    Separador 
  
    #t_1_10.titulo-segundo
      .h4 1.10 Cuentas de compensación
    .row
      p.mb-3 Las cuentas de compensación son aquellas cuentas en moneda extranjera, que se tienen inscritas en entidades financieras del exterior, y las cuales son autorizadas en primera instancia por el Banco de La República. En el capítulo 8 de la Circular Reglamentaria DCIN-83, se detalla lo concerniente a las obligaciones del reporte de información de estas:
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8.mb-5.mb-lg-0
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-md-8.col-lg-8.col-xl-10
            .cajon.color-custom-1.p-4.mb-4
              p.mb-0 Los residentes que manejen ingresos y/o egresos por concepto de operaciones sujetas al requisito de canalización por conducto del mercado cambiario o del cumplimiento de obligaciones derivadas de operaciones internas, podrán hacerlo a través de cuentas bancarias en moneda extranjera en entidades financieras del exterior, las cuales deberán ser registradas en el Banco de la República (en adelante BR) bajo el mecanismo de compensación con el Formulario No. 10 “Registro, Informe de Movimientos y/o Cancelación Cuenta de Compensación”, a través del cual, adicionalmente, se podrán reportar los movimientos y/o cancelar el registro de las mismas. 

            p.mb-0 En este capítulo encontramos también los procedimientos para el registro de la cuenta de compensación, el detalle del procedimiento para realizar el reporte mensual de la cuenta y la forma de realizar la cancelación del registro, en caso de que se quiera cerrar la cuenta de compensación, ante el Banco de la República.
      .col-lg-4.mb-5.mb-lg-0
          img.my-3(src="@/assets/curso/images/tema1/img_20.svg", alt="", style="width:350px; display:block; margin:0 auto;")

    Separador 
  
    #t_1_11.titulo-segundo
      .h4 1.11 Medios de pago internacional
    .row
      p.mb-3 Para la minimización del riesgo de no pago o simplemente para establecer acuerdos en la forma de transar el dinero entre compradores y vendedores del comercio internacional, se cuenta con diferentes opciones o instrumentos bancarios que dan mayor certeza del pago derivado de la compra o venta de bienes o servicios. 
      p.mb-5 Los medios de pago internacional más utilizados son:

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-6.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema1/img_21.svg' alt="", style="width:400px; display:block; margin:auto;")
      .col-lg-6.mb-5.mb-lg-0
        LineaTiempoD.color-primario.p-4
          p.text-small(numero="1" titulo="Giros internacionales") <b>Giro directo:</b> es la compra o reintegro de divisas, es decir, la venta de moneda extranjera, que es recibida por el residente en cheque, transferencia o efectivo, por la prestación de un servicio o la comercialización de un bien <br><b>Giro financiado:</b> se efectúa el pago al beneficiario con sus propios recursos y procede a otorgar y contabilizar una financiación en Moneda Extranjera al cliente ordenante. 
          
          p.text-small(numero="2" titulo="Cobranza documentaria") Sistema de pago internacional que consiste en que un banco local recibe ( o envía) de un banco corresponsal del exterior una serie de documentos como letras de cambio o pagarés, notas promisorias o documentos similares, acompañados de documentos comerciales tales como facturas comerciales, documentos de transporte, listas de empaque, certificados de origen y otros, con instrucciones precisas de efectuar una gestión de cobro mediante la presentación de los documentos a un deudor o girado (importador), de entregarlos al deudor contra pago o aceptación de una letra de cambio o pagaré y de situar las divisas producto de la gestión de cobro en el banco corresponsal, mediante el otorgamiento de un crédito al girado (nuestro cliente). <br>Contra entrega de los documentos, el cliente autoriza debitar su cuenta corriente y presenta los documentos para pagar la cobranza. 
          p.text-small(numero="3" titulo="Cartas de crédito") También llamado crédito documentario (CD, <i>Letter of Credit -L/C-) </i>, es un convenio en virtud del cual un banco, actuando a petición de un importador y de conformidad con sus instrucciones, se compromete a efectuar un pago a un exportador contra presentación de una serie de documentos exigidos dentro de un tiempo límite especificado, siempre y cuando se hayan cumplido los términos y las condiciones del crédito.
          
          p.text-small(numero="4" titulo="Tipos de cartas de Crédito") <b>Confirmada:</b> una carta de crédito es considerada confirmada cuando el banco emisor y el banco receptor del crédito documentario extienden su compromiso en firme de pagar al beneficiario siempre y cuando este cumpla totalmente con los términos y condiciones estipulados en la carta de crédito. <br> <b>Carta de crédito a la vista o a plazo:</b> la carta de crédito puede disponer el pago a la vista (inmediato) o el pago en una fecha venidera (crédito mediante letra a plazo). <br> <b> <i> Stand by: </i> </b> la carta de crédito <i>Stand by</i> o de Garantía se usa en caso del incumplimiento de algún contrato de préstamo u otro tipo de contratos vinculados con prestaciones de servicios diversos como pueden ser: oferta en licitaciones internacionales, mantenimiento de precios, provisión de obras. Como se ve, son de naturaleza ‘contingente’.

          





  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Importación y exportación de bienes.',
        texto: '',
        icono: require('@/assets/curso/images/tema1/ico_1.svg'),
      },
      {
        titulo: '',
        texto:
          'Operaciones de endeudamiento externo celebradas por residentes, así como los costos financieros inherentes a las mismas.',
        icono: require('@/assets/curso/images/tema1/ico_2.svg'),
      },
      {
        titulo: '',
        texto:
          'Inversiones de capital del exterior en el país, así como los rendimientos asociados a las mismas. ',
        icono: require('@/assets/curso/images/tema1/ico_3.svg'),
      },
      {
        titulo: '',
        texto:
          'Inversiones de capital colombiano en el exterior, así como los rendimientos asociados a las mismas.',
        icono: require('@/assets/curso/images/tema1/ico_4.svg'),
      },
      {
        titulo: '',
        texto:
          'Inversiones financieras en títulos emitidos y en activos radicados en el exterior, así como los rendimientos asociados a las mismas, salvo cuando las inversiones se efectúen con divisas provenientes de operaciones que no deban canalizarse a través del mercado cambiario.',
        icono: require('@/assets/curso/images/tema1/ico_5.svg'),
      },
      {
        titulo: '',
        texto: 'Avales y garantías en moneda extranjera.',
        icono: require('@/assets/curso/images/tema1/ico_6.svg'),
      },
      {
        titulo: '',
        texto: 'Operaciones de derivados.',
        icono: require('@/assets/curso/images/tema1/ico_7.svg'),
      },
    ],
    datosSlyder: [
      {
        titulo: 'Importaciones de bienes',
        texto:
          'Los residentes deberán canalizar a través del mercado cambiario los pagos para cancelar el valor de sus importaciones. Para estos efectos, deben suministrar al IMC la información de los datos mínimos (Declaración de Cambio) de cada operación exigida en el numeral 3.5 de este Capítulo. Cuando la operación se canalice a través de cuentas de compensación el Formulario No. 10 “Registro, Informe de Movimientos y/o Cancelación Cuenta de Compensación” hará las veces de la declaración de cambio, el cual se transmitirá por el titular de la cuenta de compensación de acuerdo con los procedimientos señalados en el Capítulo 8 de esta Circular.',
        imagen: require('@/assets/curso/images/tema1/img_15.png'),
      },
      {
        titulo: '',
        texto:
          'Las divisas para el pago de la importación deberán ser canalizadas por quien efectuó la importación de bienes, y el pago deberá ser efectuado directamente al acreedor, su cesionario o a centros o personas que adelanten en el exterior la gestión de recaudo y/o pago internacional, se trate de residentes o no residentes. Los residentes no podrán canalizar pagos de importaciones que hayan sido realizadas por otros. Los documentos aduaneros deberán conservarse como soporte de la operación para cuando sean requeridos por las autoridades de control y vigilancia.',
        imagen: require('@/assets/curso/images/tema1/img_16.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
