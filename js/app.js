/* ========================================
   APP — Componentes embebidos (standalone)
   Funciona sin servidor (file:// o http)
   ======================================== */

const COMPONENTS = {
  nav: `<nav id="navbar">
  <a href="#" class="nav-logo">
    <img src="logo_m.png" alt="Logo">
    <div class="logo-divider"></div>
    <div class="logo-text">
      <span>INGENIER&Iacute;A</span>
      <span>TRANSPORTE</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="#proyectos">Proyectos</a></li>
    <li><a href="#areas">Servicios</a></li>
    <li><a href="#equipo">Equipo</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>`,
  hero: `<section class="hero" id="inicio">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="media2.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-logo-solo">
    <img src="logo_m.png" alt="Logo">
    <div class="logo-divider"></div>
    <div class="logo-text">
      <span>INGENIER&Iacute;A</span>
      <span>TRANSPORTE</span>
    </div>
  </div>
  <div class="hero-content">
    <h1>Dise&ntilde;amos la movilidad<br>del futuro</h1>
    <p>Estudios de demanda, dise&ntilde;o de sistemas de transporte y gesti&oacute;n operativa para ciudades y territorios.</p>
  </div>
  <div class="hero-thumbs">
    <div class="hero-thumb"><img src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=400&q=80" alt=""></div>
    <div class="hero-thumb"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" alt=""></div>
    <div class="hero-thumb"><img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80" alt=""></div>
    <div class="hero-thumb"><img src="https://images.unsplash.com/photo-1494516192674-b82b5f1e61d4?w=400&q=80" alt=""></div>
    <div class="hero-thumb"><img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=400&q=80" alt=""></div>
    <div class="hero-thumb">
      <video autoplay muted loop playsinline>
        <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="hero-email">
    <a href="mailto:contacto@estudioingenieria.cl">contacto@estudioingenieria.cl</a>
  </div>
</section>`,
  proyectos: `<section id="proyectos">

  <!-- PROYECTO 1: 1 FOTO -->
  <article class="project-editorial">

		<div class="project-layout">
			<div class="project-text">
			<h2 class="section-title">PLANIFICACION URBANA</h2>
			<p>CIPRES Ingeniería a participado en los proceso de planificación de los Sistemas de Transporte Urbano, de más de 15 ciudades, entre las que se cuenta Santiago de Chile (6 millones hab) y el Gran Concepción (1.1 millones hab).</p>
			<p>En estos estudios se ha abordado de manera integral el pronóstico del desarrollo urbano y los conflictos de transporte que traen asociados, lo que ha permitido plantear planes de infraestructura de transporte, junto con el diseño de soluciones y su análisis económico, social y ambiental.</p>

			<div class="media-item">
					<img src="img/Pr_02.png" alt="">
			</div>
		</div>
		<div class="media-grid">
			<div class="media-item">
				<img src="img/Pr_01.png" alt="Tren">
			</div>
		</div>

  </article>



  <article class="project-editorial">
      <div class="project-layout reverse">
        <div class="project-text">
  			<h2 class="section-title">SISTEMAS DE TRANSPORTE</h2>
  			<p>CIPRES Ingeniería participó en los estudios de demanda de la Línea 2 de metro de Santo Domingo, República Dominicana. Además realizó el diseño del modelo de gestión de los sistemas de rutas alimentadoras de las líneas 1 y 2 del Metro de Santo Domingo. En Chile se participó en los estudios de los trenes: Santiago-Concepción, Metro de Concepción, Tren Temuco-Valdivia, Tren Puerto Varas-Puerto Montt, Tren de Antofagasta.</p>
  			<p>El an&aacute;lisis contempl&oacute; estimaciones de demanda por tramo, capacidad de la v&iacute;a, velocidades comerciales y modelaci&oacute;n de operaci&oacute;n para determinar frecuencias &oacute;ptimas y flotas requeridas.</p>
  			<p>Estimaciones de Demanda</p>
  			<p>Análisis de factibilidad económica</p>
  			<p>Diseño de sistemas alimentadores</p>
  			<p>Diseño de estructura organizativa y física</p>
  			<p>Estimación de costos de operación y mantenimiento</p>
  			<p>Diseño de sistema de gestión operativa, gestión de flota</p>
  			<p>Diseño de estructuras tarifarias</p>
        </div>

  		<div class="media-item count-1">
  			<img src="img/Pr_03_01.png" alt="Tren">
  		</div>
      </div>

      <div class="team-grid">
  	    <div class="team-member">
  	      <div class="team-photo"><<img src="img/Pr_03_02.jpg" alt="Foto del miembro del equipo">" alt=""></div>
  	    </div>
  	    <div class="team-member">
  	      <div class="team-photo"><img src="img/Pr_03_03.png" alt="Foto del miembro del equipo"" alt=""></div>
  	    </div>
  	    <div class="team-member">
  	      <div class="team-photo"><img src="img/Pr_03_04.png" alt="Foto del miembro del equipo" alt=""></div>
  	    </div>

    </div>
  </article>


  <!-- PROYECTO 2: 2 FOTOS -->
  <article class="project-editorial">
    <div class="project-layout reverse">
		<div class="team-member">
		  <div class="team-photo">
			  <img src="img/Pr_03_02.jpg" alt="Concepci&oacute;n">
			</div>
			</div>

		<div class="project-text">
				<h2 class="section-title">SISTEMAS DE TRANSPORTEeeee</h2>
				<p>CIPRES Ingeniería ha realizado el análisis de demanda e ingreso para otros sistemas de transporte como teleféricos, tranvías, metro y aeropuertos. .</p>
				<p>A modo de ejemplo, actualmente apoya en los estudios de demanda, ingresos, evaluación social para el proyecto teleférico bicentenario, emplazado en el centro de negocios de Santiago de Chile. Encargado por el consorcio conformado por las empresas  ICAFAL, Nueva Vía Consultores y Ciudad Empresarial.</p>
				<p>Se esta desarrollando como Iniciativa Privada el Teleférico de Iquique - Alto Hospicio, en consorcio con Nueva Vía Consultores y CIPRES</p>
		 </div>
		 </div>
	</div>
	<div class="media-grid count-2">
		<div class="team-member">
			<div class="team-photo">
				  <img src="img/Pr_03_01.png" alt="">
			</div>
		</div>
		<div class="team-member">
			<div class="team-photo">
				  <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
						<img src="img/Pr_03_01.png" alt="">
				  </video>
			</div>
		</div>
	</div>
  </article>






<!-- PROYECTO 2: 2 FOTOS -->
  <article class="project-editorial">
    <div class="project-layout reverse">
    	<div class="team-member">
		  <div class="team-photo">
			<img src="img/Pr_03_04.png" alt="Tren">
		  </div>
		</div>

		<div class="project-text">
			<h2 class="section-title">CONCESIONES VIALES</h2>
			<p>CIPRES Ingeniería ha realizado el análisis de demanda e ingreso para otros sistemas de transporte como teleféricos, tranvías, metro y aeropuertos. .</p>
			<p>A modo de ejemplo, actualmente apoya en los estudios de demanda, ingresos, evaluación social para el proyecto teleférico bicentenario, emplazado en el centro de negocios de Santiago de Chile. Encargado por el consorcio conformado por las empresas  ICAFAL, Nueva Vía Consultores y Ciudad Empresarial.</p>
			<p>Se esta desarrollando como Iniciativa Privada el Teleférico de Iquique - Alto Hospicio, en consorcio con Nueva Vía Consultores y CIPRES</p>
		 </div>
</div>
		<div class="media-grid count-2">
			<div class="team-member">
				<div class="team-photo">
					  <img src="img/Pr_03_02.jpg" alt="Concepci&oacute;n">
				</div>
			</div>
			<div class="team-member">
				<div class="team-photo">
				  <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
					<source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
				  </video>
				</div>
			</div>
		</div>

  </article>




  <!-- PROYECTO 3: 3 FOTOS/VIDEOS -->
  <article class="project-editorial">
    <div class="project-layout">
      <div class="project-text">
        <div class="section-eyebrow">Chile — Regi&oacute;n del Biob&iacute;o</div>
        <h2 class="section-title">CONCESIÓN DE OBRAS VIALES</h2>
        <p>Estudios de prefactibilidad para el primer sistema de metro en la regi&oacute;n del Biob&iacute;o, abordando la demanda actual y proyectada, la trazabilidad de rutas y la integraci&oacute;n con el transporte p&uacute;blico existente.</p>
        <p>Se modelaron escenarios de demanda, se evaluaron alternativas de trazado y se dise&ntilde;&oacute; una estructura tarifaria integrada con el sistema de buses locales.</p>
        <div class="project-meta-inline">
          <div class="meta-item"><label>A&ntilde;o</label><span>2023</span></div>
          <div class="meta-item"><label>Cliente</label><span>Ministerio de Transporte</span></div>
          <div class="meta-item"><label>Alcance</label><span>Prefactibilidad</span></div>
        </div>
      </div>
      <div class="media-grid count-3">
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" alt="Concepci&oacute;n">
        </div>
        <div class="media-item">
          <span class="media-tag">Video</span>
          <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
            <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
          </video>
        </div>
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Planos">
        </div>
      </div>
    </div>

  </article>

	<article class="project-editorial">
	      <div class="project-layout ">
	        <div class="project-text">
	  			<h2 class="section-title">CONCESION AEROPORTUARIAS</h2>
	  			<p>CIPRES Ingeniería participó en los estudios de demanda de la Línea 2 de metro de Santo Domingo, República Dominicana. Además realizó el diseño del modelo de gestión de los sistemas de rutas alimentadoras de las líneas 1 y 2 del Metro de Santo Domingo. En Chile se participó en los estudios de los trenes: Santiago-Concepción, Metro de Concepción, Tren Temuco-Valdivia, Tren Puerto Varas-Puerto Montt, Tren de Antofagasta.</p>
	  			<p>El an&aacute;lisis contempl&oacute; estimaciones de demanda por tramo, capacidad de la v&iacute;a, velocidades comerciales y modelaci&oacute;n de operaci&oacute;n para determinar frecuencias &oacute;ptimas y flotas requeridas.</p>
	  			<p>Estimaciones de Demanda</p>
	  			<p>Análisis de factibilidad económica</p>
	  			<p>Diseño de sistemas alimentadores</p>
	  			<p>Diseño de estructura organizativa y física</p>
	  			<p>Estimación de costos de operación y mantenimiento</p>
	  			<p>Diseño de sistema de gestión operativa, gestión de flota</p>
	  			<p>Diseño de estructuras tarifarias</p>
	        </div>
	      </div>

	      <div class="team-grid">
	  	    <div class="team-member">
	  	      <div class="team-photo">
	  	      	<img src="img/Pr_03_02.jpg" alt="Foto del miembro del equipo">" alt="">
	  	      </div>
	  	    </div>
	  	    <div class="team-member">
	  	      <div class="team-photo"><img src="img/Pr_03_03.png" alt="Foto del miembro del equipo"" alt=""></div>
	  	    </div>
	  	    <div class="team-member">
	  	      <div class="team-photo"><img src="img/Pr_03_04.png" alt="Foto del miembro del equipo" alt=""></div>
	  	    </div>

	    </div>
  </article>



  <!-- PROYECTO 4: 4 FOTOS/VIDEOS -->
  <article class="project-editorial">
    <div class="project-layout ">
      <div class="project-text">
        <h2 class="section-title">DISEÑO VIAL</h2>
        <p>CIPRES Ingeniería ha analizado y desarrollado soluciones integrales con la participación de diversos usuarios y modos de transporte (público, masivo, carga, peatones, ciclistas), diversas áreas afectadas (parques, aceras, estaciones, andenes, etc.), requiriéndose de obras especiales y de reposición (estructuras soterradas,  servicios, saneamiento, etc.).</p>
        <p>CIPRES Ingeniería ha diseñado los accesos viales y vialidad interior a los Parques Eólicos de El Arrayán, Tototal, Camán, Chiloé, Cohiue, Arauco.</p>
      </div>
		<div class="team-member">
		  <div class="team-photo">
				<img src="img/Pr_03_02.jpg" alt="">
		  </div>
	  </div>
	</div>

    <div class="media-grid count-2">
		<div class="team-member">
		<div class="team-photo">
			  <img src="img/Pr_03_02.jpg" alt="">
		</div>
		</div>
		<div class="team-member">
		<div class="team-photo">
			  <img src="img/Pr_03_02.jpg" alt="">
		</div>
		</div>
    </div>

  </article>


<!-- PROYECTO 4: 4 FOTOS/VIDEOS -->
  <article class="project-editorial">
    <div class="project-layout ">
      <div class="project-text">
        <div class="section-eyebrow">Chile — Sur</div>
        <h2 class="section-title">GESTIÓN DE TRANSITO</h2>
        <p>En el ámbito de gestión de tránsito, CIPRES Ingeniería, además de diseños y rediseños de infraestructura vial, también ha participado y desarrollado diseños de semaforizaciones y de sistemas centralizados de control de tránsito (SCAT) en diversas ciudades de Chile.</p>
        <p>CIPRES Ingeniería desarrolla estudios de impacto vial de proyectos inmobiliarios y proyectos de inversión.</p>

      </div>
      <div class="media-grid count-3">
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1494516192674-b82b5f1e61d4?w=800&q=80" alt="Temuco">
        </div>
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80" alt="Paisaje">
        </div>
        <div class="media-item">
          <span class="media-tag">Video</span>
          <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
            <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
          </video>
        </div>

      </div>
    </div>
  </article>



	<!-- PROYECTO 2: 2 FOTOS -->
	  <article class="project-editorial">
	    <div class="project-layout reverse">
	    <div class="media-item count-1">
				 			  <img src="img/Pr_03_04.png" alt="Tren">
				</div>
			<div class="project-text">
					<h2 class="section-title">PLANIFICACIÓN REGIONAL</h2>
					<p>CIPRES Ingeniería participa en la formulación del Plan Nacional de Infraestructura al 2055, por encargo del Ministerio de Obras Púbicas.</p>
					<p>En el estudio se abordan las necesidades de inversión en  infraestructura de transporte para Chile con una mirada puesta en las próximas décadas. El Plan considera una Red de transporte integrada de carreteras, ferrocarriles, marítima, aérea y ductos, con una cartera de proyectos estratégicos.</p>
			 </div>

		</div>
		<div class="media-grid count-2">
			<div class="media-item">
				  <span class="media-tag">Foto</span>
				  <img src="img/Pr_03_02.jpg" alt="Concepci&oacute;n">
			</div>
			<div class="media-item">
			  <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
				<source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
			  </video>
			</div>
		</div>

  </article>


  <!-- PROYECTO 4: 4 FOTOS/VIDEOS -->
  <article class="project-editorial">
    <div class="project-layout reverse">
      <div class="project-text">
        <h2 class="section-title">ANALISIS DE CONTINGENCIA</h2>
        <p>CIPRES Ingeniería ha participado en una multiplicidad de escenarios y situaciones, lo que le ha permitido asesorar a empresas en el análisis de demanda e ingresos en escenarios de crisis y desastres naturales</p>
        <p>Como es el caso del análisis del impacto del terremoto del 2010 en Chile sobre Autopistas en la Región del Bíobío, el análisis del impacto del Huracán Alex y la violencia por el crimen organizado en las Autopistas de Monterrey en México. Actualmente, se han realizado estudios para incorporar los efectos de la pandemia sobre las proyecciones de tráfico y perspectivas de recuperación</p>

      </div>
      <div class="media-grid count-4">
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1494516192674-b82b5f1e61d4?w=800&q=80" alt="Temuco">
        </div>
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80" alt="Paisaje">
        </div>
        <div class="media-item">
          <span class="media-tag">Video</span>
          <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
            <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
          </video>
        </div>
        <div class="media-item">
          <span class="media-tag">Foto</span>
          <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80" alt="Estaci&oacute;n">
        </div>
      </div>
    </div>
  </article>

  <!-- PROYECTO 4: 4 FOTOS/VIDEOS -->
    <article class="project-editorial">
      <div class="project-layout ">
        <div class="project-text">
          <h2 class="section-title">ESTUDIOS METODOLÓGICOS</h2>
          <p>CIPRES Ingeniería ha participado en la actualización de metodologías, normativas y manuales empleados a nivel nacional en el análisis y diseño de sistemas de transporte.</p>
          <p>Manual de diseño y evaluación social de proyectos de vialidad urbana, MESPIVU (2014).</p>
          <p>Manual de vialidad urbana, Recomendaciones para el diseño de elementos de infraestructura vial urbana, REDEVU (2012).</p>
          <p>Estudio Básico Análisis de Pesos Por Eje de la Red Vial Nacional (2020) Análisis y proposición de modificación de la normativa.</p>
          <p>Metodología para la determinación de Velocidades Máximas (2012).</p>
          <p>Metodología de evaluación de proyectos viales interurbanos y estimación del valor social del tiempo (2010).</p>
          <p>Metodología de evaluación ferroviaria (2010).</p>
          <p>Metodología evaluación de transporte a nivel regional (2010).</p>

        </div>
        <div class="media-grid count-4">
          <div class="media-item">
            <span class="media-tag">Foto</span>
            <img src="https://images.unsplash.com/photo-1494516192674-b82b5f1e61d4?w=800&q=80" alt="Temuco">
          </div>
          <div class="media-item">
            <span class="media-tag">Foto</span>
            <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80" alt="Paisaje">
          </div>
          <div class="media-item">
            <span class="media-tag">Video</span>
            <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
              <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
            </video>
          </div>
          <div class="media-item">
		              <span class="media-tag">Video</span>
		              <video muted loop playsinline onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
		                <source src="https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_30fps.mp4" type="video/mp4">
		              </video>
          </div>

        </div>
      </div>
  </article>

</section>`,
  areas: `<section id="areas" class="areas-section">
  <div style="text-align:center;margin-bottom:3rem;">
    <div class="section-eyebrow">Servicios</div>
    <h2 class="section-title">&Aacute;reas de especializaci&oacute;n</h2>
    <p class="section-desc" style="margin:0 auto">CIPRES Ingeniería se encuentra capacitada para resolver una diversa gama de necesidades, entre las cuales se destacan las siguiente &aacute;reas:</p>
  </div>
  <div class="areas-grid">
  	<div class="area-card">
        <h4>&Aacute;rea de Planificación</h4>
        <p>Estudios Integrales de Sistemas de Transporte Urbano e Interurbano, Planificación de Transporte Público y Gestión de Flota, elaboración de Planes Reguladores y Seccionales Viales</p>
      </div>
      <div class="area-card">
        <h4>Economía y Modelación de Transporte</h4>
        <p>Análisis de Concesiones de Obras Viales, Análisis de Concesiones Ferroviarias, Estudios de Demanda, Estudios de Tarificación, Análisis de Mercado, Estudios Económicos, Estudios de Costos, Transporte Intermodal, entre otros</p>
      </div>
      <div class="area-card">
        <h4>Tránsito</h4>
        <p>Estudios de Tránsito Urbano e Interurbano, Microsimulación, Estudios de Impacto Vial, Estudios de Impacto Ambiental y Estudios de Inversión.</p>
      </div>
      <div class="area-card">
        <h4>Operación y Gestión</h4>
        <p>Gestión de Operaciones, Diseño de Itinerarios, Planificación de Recorridos, Optimización de la Explotación de la Flota, Elaboración de Sistemas de Mantención, Gestión de Despacho, Gestión de Inventario y Capacitación.</p>
    </div>
    <div class="area-card">
      <h4>&Aacute;rea Análisis de Sistemas</h4>
      <p>Desarrollo de Software y aplicaciones computacionales como apoyo a proyectos y diseños automatizados (CAD), desarrollo de presentaciones y animaciones de proyectos de infraestructura y aplicaciones en Sistemas de Información Geográfica (SIG).</p>
    </div>
    <div class="area-card">
      <h4>&Aacute;rea de Dise&ntilde;o Vial</h4>
      <p>Desarrollo de proyectos integrales de infraestructura de transporte urbano e interurbano, a nivel de estudios conceptuales, anteproyecto e ingenier&iacute;a definitiva, incluyendo los estudios de base (topograf&iacute;a, geotecnia, hidrolog&iacute;a, catastros y monograf&iacute;as) para el desarrollo de los proyectos.</p>
    </div>
    <div class="area-card">
      <h4>&Aacute;rea de Servicios</h4>
      <p>Estudios de Hidrolog&iacute;a e Hidr&aacute;ulica en Obras Viales y Puentes, Proyectos de Saneamiento de Aguas Lluvias en v&iacute;as urbanas e interurbanas, Proyectos de Servicios de Agua Potable, Alcantarillado, Alumbrado P&uacute;blico y otros.</p>
    </div>
    <div class="area-card">
      <h4>&Aacute;rea de Estructuras</h4>
      <p>Dise&ntilde;o de Obras Civiles (Pavimentos, Puentes, Muros, Obras de Contenci&oacute;n, entre otros)</p>
    </div>
  </div>
  <div class="areas-img">
      <div class="team-photo"><img src="img/ar01.jpg" alt="Foto del miembro del equipo" alt=""></div>
  </div>
</section>`,
  clientes: `<section id="clientes" style="text-align:center;">
  <div style="margin-bottom:2.5rem;">
    <div class="section-eyebrow"></div>
    <h2 class="section-title">PRINCIPALES CLIENTES</h2>
  </div>
  <div class="team-descripcion">
      <p>CIPRES Ingenier&iacute;a ha participado desde la concepción misma de las obras de inversión en infraestructura de transporte, mediante el desarrollo de los estudio e iniciativas de inversión pública y privada.</p>
      <p>CIPRES Ingenier&iacute;a ha ha apoyado a organismo públicos, empresas concesionarias, constructoras y grupos de inversión en la preparación y presentación de pliegos de licitación.</p>
  </div>
  <div class="clients-track">
    <span class="client-item">OPRET RD</span>
    <span class="client-item">·</span>
    <span class="client-item">EFE Chile</span>
    <span class="client-item">·</span>
    <span class="client-item">MOP Chile</span>
    <span class="client-item">·</span>
    <span class="client-item">BID</span>
    <span class="client-item">·</span>
    <span class="client-item">CAF</span>
    <span class="client-item">·</span>
    <span class="client-item">Metro Santiago</span>
  </div>
</section>`,
  equipo: `<section id="equipo">
  <div style="text-align:center;margin-bottom:3rem;">
    <div class="section-eyebrow">Nosotros</div>
    <h2 class="section-title">E Q U I P O</h2>
  </div>
  <div class="team-descripcion">
    <p><span class="highlight">CIPRES Ingenier&iacute;a es una empresa de profesionales</span> que actualmente presta servicios de consultor&iacute;a especializada en distintas &aacute;reas de la ingenier&iacute;a (transporte, dise&ntilde;o vial, hidr&aacute;ulica, obras sanitarias y obras civiles en general), que ha participado en estudios en Chile, México, República Dominicana, Venezuela y Colombia. Actualmente posee representaci&oacute;n Chile, Colombia y Florida (USA).</p>
    <p>Ha tenido un rol activo en proyectos de inversi&oacute;n en infraestructura de transporte, donde se ha involucrado en la formulaci&oacute;n, presentaci&oacute;n de iniciativas, preparaci&oacute;n de pliegos, apoyo en la licitaci&oacute;n, financiamiento de proyectos, valorizaci&oacute;n de obras, due diligence, estudios de tarificaci&oacute;n y resoluci&oacute;n de conflictos. De esta manera, ha participado solo en el &aacute;rea de concesiones en m&aacute;s de 100 obras de infraestructura.</p>
  </div>
  <div class="team-grid">
    <div class="team-member">
      <div class="team-photo"><<img src="img/Eq_01.jpg" alt="Foto del miembro del equipo">" alt=""></div>
    </div>
    <div class="team-member">
      <div class="team-photo"><img src="img/Eq_02.jpg" alt="Foto del miembro del equipo"" alt=""></div>
    </div>
    <div class="team-member">
      <div class="team-photo"><img src="img/Eq_03.jpg" alt="Foto del miembro del equipo" alt=""></div>
    </div>

  </div>
</section>`,
  contacto: `<section id="contacto" class="contact-section">
  <div style="padding:0 3rem;">
    <div class="contact-wrapper">
      <div class="contact-info">
        <div class="section-eyebrow">Contacto</div>
        <h3>Hablemos de tu<br>pr&oacute;ximo proyecto</h3>
        <p>Desde estudios de demanda hasta la puesta en marcha de sistemas de transporte.</p>
        <div class="contact-detail">
          <label>Direcci&oacute;n</label>
          <span>Av. Apoquindo 4500, Of. 802, Las Condes, Santiago</span>
        </div>
        <div class="contact-detail">
          <label>Email</label>
          <span>contacto@estudioingenieria.cl</span>
        </div>
        <div class="contact-detail">
          <label>Tel&eacute;fono</label>
          <span>+56 2 2345 6789</span>
        </div>
      </div>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" id="name" placeholder=" " required>
          <label for="name">Nombre completo</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder=" " required>
          <label for="email">Correo electr&oacute;nico</label>
        </div>
        <div class="form-group">
          <input type="text" id="company" placeholder=" ">
          <label for="company">Empresa / Instituci&oacute;n</label>
        </div>
        <div class="form-group">
          <textarea id="message" placeholder=" " rows="3" required></textarea>
          <label for="message">Mensaje</label>
        </div>
        <button type="submit" class="btn-submit">Enviar mensaje</button>
      </form>
    </div>
  </div>
</section>`,
  footer: `<footer>
  &copy; 2026 Estudio de Ingenier&iacute;a. Todos los derechos reservados.
</footer>`
};

function loadComponent(id, name) {
  const el = document.getElementById(id);
  if (el && COMPONENTS[name]) {
    el.innerHTML = COMPONENTS[name];
  } else if (el) {
    el.innerHTML = '<p style="color:red;padding:2rem;">Error cargando ' + name + '</p>';
  }
}

function init() {
  loadComponent('nav-container', 'nav');
  loadComponent('hero-container', 'hero');
  loadComponent('proyectos-container', 'proyectos');
  loadComponent('areas-container', 'areas');
  loadComponent('clientes-container', 'clientes');
  loadComponent('equipo-container', 'equipo');
  loadComponent('contacto-container', 'contacto');
  loadComponent('footer-container', 'footer');

  initNavbar();
  initSmoothScroll();
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

function initSmoothScroll() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
