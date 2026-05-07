/* ──────────────────────────────────────────────────────────────────────────
   Buitrago Sánchez & Asociados — Landing hi-fi (Variation C polished)
   ────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  { t: "Consultoría Contable", d: "Outsourcing contable integral para PYMES. Información oportuna y precisa para la toma de decisiones." },
  { t: "Asesoría Tributaria", d: "Planificación y proyecciones de renta. Estrategias que optimizan su carga fiscal dentro del marco legal." },
  { t: "Revisoría Fiscal", d: "Auditoría y control fiscal independiente. Diagnóstico inicial y revisión de la situación financiera." },
  { t: "Constitución y Liquidación", d: "Acompañamiento en trámites legales, registros y documentación ante las entidades competentes." },
  { t: "SG-SST", d: "Estructuración, implementación y ejecución del Sistema de Gestión de Seguridad y Salud en el Trabajo." },
  { t: "Aportes en Salud", d: "Administración de aportes en salud. Liquidación y pago oportuno de seguridad social en plataformas PILA." },
];

const STATS = [
  { n: "25+", l: "años de trayectoria" },
  { n: "2018", l: "fundación de la firma" },
  { n: "6", l: "áreas de servicio" },
  { n: "100%", l: "manejo confidencial" },
];

const TEAMS = [
  { t: "Contadores", d: "Especializados en pequeñas y medianas empresas." },
  { t: "Asesores Tributarios", d: "Planificación y proyecciones de renta." },
  { t: "Equipo Fiscal", d: "Revisoría fiscal y control independiente." },
  { t: "Asesores SST", d: "Implementación de sistemas SG-SST." },
  { t: "Auxiliares Contables", d: "Soporte operativo en gestión contable diaria." },
  { t: "Auxiliares Administrativos", d: "Acompañamiento en trámites y documentación." },
];

const IMG = {
  hero:    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80",
  founder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  office:  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  meeting: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  team:    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  client:  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  avatar1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  avatar2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  avatar3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  avatar4: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
};

/* ─── icons ─────────────────────────────────────────────────────────────── */
const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
const ArrowRight = ({ size = 16 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.382.7 4.61 1.9 6.487L4 29l7.717-1.86a11.95 11.95 0 0 0 4.286.79h.005c6.625 0 12.003-5.376 12.003-12.003C28.011 8.302 22.628 3 16.003 3zm0 21.873h-.004a9.84 9.84 0 0 1-5.013-1.373l-.36-.214-3.998.964 1.066-3.898-.234-.4a9.85 9.85 0 0 1-1.51-5.247c0-5.448 4.434-9.882 9.886-9.882 2.64 0 5.122 1.029 6.99 2.898 1.868 1.87 2.896 4.353 2.895 6.992 0 5.45-4.434 9.884-9.872 9.884zm5.42-7.402c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.669.149-.198.297-.768.967-.94 1.165-.174.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.476-.884-.788-1.48-1.762-1.654-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.917-2.207-.241-.58-.486-.501-.669-.51-.173-.009-.371-.01-.57-.01a1.09 1.09 0 0 0-.793.371c-.273.297-1.041 1.017-1.041 2.48 0 1.463 1.066 2.876 1.215 3.074.149.198 2.097 3.2 5.078 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);
const Logo = ({ variant = "light" }) => (
  <a href="#" className="nav-logo" aria-label="Inicio">
    <img
      className="nav-logo-mark-img"
      src={variant === "dark" ? "../logos/main-logo.png" : "../logos/white-main.png"}
      alt="Buitrago Sánchez & Asociados"
    />
    <span className="nav-logo-text">
      <strong>Buitrago Sánchez</strong>
      <small>& Asociados</small>
    </span>
  </a>
);

const LogoNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <Logo variant={scrolled ? "dark" : "light"} />;
};

/* ─── Nav ───────────────────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <LogoNav />
        <div className="nav-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a href="#contacto" className="btn btn-light btn-sm">
          Solicitar cotización <ArrowRight size={14} />
        </a>
      </div>
    </nav>
  );
};

/* ─── Hero ──────────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="hero" id="inicio">
    <div className="hero-bg">
      <img src={IMG.hero} alt="Equipo profesional en oficina" />
    </div>
    <div className="hero-overlay" />
    <div className="container hero-grid">
      <div className="hero-content">
        <div className="hero-brand">
          <img className="hero-brand-mark" src="../logos/main-logo.png" alt="" />
          <div className="hero-brand-text">
            <span className="hero-brand-name">Buitrago Sánchez</span>
            <span className="hero-brand-amp">&amp; Asociados</span>
          </div>
        </div>
        <div className="eyebrow light" style={{marginTop: 8}}>Desde 2018 · +25 años de trayectoria</div>
        <h1>
          Personas reales,<br />
          cuidando sus<br />
          <em>finanzas.</em>
        </h1>
        <p className="hero-sub">
          Atención personalizada para personas naturales y empresas. Más de 25 años acompañando declaraciones, trámites y decisiones financieras importantes.
        </p>
        <div className="hero-cta">
          <a href="#contacto" className="btn btn-primary">
            Solicitar cotización <ArrowRight />
          </a>
          <a href="#equipo" className="btn btn-outline-light">
            Conocer al equipo
          </a>
        </div>
      </div>

      <aside className="hero-side">
        <div className="hero-trust">
          <div className="hero-trust-num">25+</div>
          <div className="hero-trust-label">años de trayectoria<br />de nuestra socia fundadora</div>
        </div>
        <div className="hero-team-row">
          <div className="hero-team-avatars">
            <div className="avatar"><img src={IMG.avatar1} alt="" /></div>
            <div className="avatar"><img src={IMG.avatar2} alt="" /></div>
            <div className="avatar"><img src={IMG.avatar3} alt="" /></div>
            <div className="avatar"><img src={IMG.avatar4} alt="" /></div>
          </div>
          <small>
            Un equipo <strong>especializado</strong><br />
            en cada una de las 6 áreas
          </small>
        </div>
      </aside>
    </div>
    <div className="hero-scroll-hint">scroll</div>
  </section>
);

/* ─── Testimonial ───────────────────────────────────────────────────────── */
const Testimonial = () => (
  <section className="testimonial">
    <div className="container">
      <div className="testimonial-inner">
        <div className="testimonial-mark">"</div>
        <p className="testimonial-quote">
          Llevo años confiando mi declaración de renta a Buitrago Sánchez. Siempre claros, atentos y cumplidos — la tranquilidad que buscaba.
        </p>
        <div className="testimonial-author">
          <div className="avatar"><img src={IMG.client} alt="" /></div>
          <div>
            <strong>María C.</strong>
            <small>Cliente persona natural · desde 2019</small>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── About ─────────────────────────────────────────────────────────────── */
const About = () => (
  <section className="about" id="nosotros">
    <div className="container">
      <div className="about-head">
        <span className="eyebrow">— Nosotros</span>
        <h2>Una firma construida sobre <em>confianza</em> y <em>experiencia</em>.</h2>
        <p>
          Constituida en 2018, Buitrago Sánchez &amp; Asociados SAS es una firma de consultoría, asesoría y auditoría en contabilidad, tributaria y revisoría fiscal. Nos especializamos en suplir las necesidades específicas de personas naturales y jurídicas, garantizando atención personalizada y manejo confidencial de su información.
        </p>
      </div>
      <div className="about-gallery">
        <figure>
          <div className="photo"><img src={IMG.founder} alt="Socia fundadora" /></div>
          <figcaption>Socia fundadora</figcaption>
        </figure>
        <figure className="offset-down">
          <div className="photo"><img src={IMG.office} alt="Oficina" /></div>
          <figcaption>Nuestra oficina</figcaption>
        </figure>
        <figure>
          <div className="photo"><img src={IMG.meeting} alt="Reunión con cliente" /></div>
          <figcaption>Atención personalizada</figcaption>
        </figure>
        <figure className="offset-down">
          <div className="photo"><img src={IMG.team} alt="Equipo" /></div>
          <figcaption>Equipos especializados</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

/* ─── Stats ─────────────────────────────────────────────────────────────── */
const Stats = () => (
  <section className="stats">
    <div className="container">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Services ──────────────────────────────────────────────────────────── */
const Services = () => (
  <section className="services" id="servicios">
    <div className="container">
      <div className="services-head">
        <span className="eyebrow">— Servicios</span>
        <h2>Cómo le <em>acompañamos</em></h2>
      </div>
      <div className="svc-list">
        {SERVICES.map((s, i) => (
          <a href="#contacto" key={i} className="svc-row">
            <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="svc-row-body">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
            <span className="svc-arrow"><ArrowUpRight /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Team ──────────────────────────────────────────────────────────────── */
const Team = () => (
  <section className="team" id="equipo">
    <div className="container">
      <div className="team-head">
        <span className="eyebrow">— Equipos especializados</span>
        <h2>Personas detrás de <em>cada gestión</em></h2>
      </div>
      <div className="team-grid">
        {TEAMS.map((t, i) => (
          <div key={i} className="team-card">
            <span className="team-card-num">0{i + 1}</span>
            <h4>{t.t}</h4>
            <p>{t.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ───────────────────────────────────────────────────────────────── */
const CTA = () => (
  <section className="cta" id="contacto">
    <div className="container cta-inner">
      <span className="eyebrow">— Hablemos</span>
      <h2 style={{ marginTop: 20 }}>Su próximo paso<br /><em>empieza aquí.</em></h2>
      <p>
        Una conversación inicial — sin compromiso — para entender en qué podemos acompañarle. Le respondemos en menos de 24 horas.
      </p>
      <div className="cta-buttons">
        <a href="#" className="btn btn-primary">Solicitar cotización <ArrowRight /></a>
        <a href="#" className="btn btn-ghost">Llamar directamente</a>
      </div>
    </div>
  </section>
);

/* ─── Footer ────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p>
            Consultoría, asesoría y auditoría en contabilidad, tributaria y revisoría fiscal. Más de 25 años de trayectoria.
          </p>
        </div>
        <div className="footer-col">
          <h6>Servicios</h6>
          <ul>
            <li><a href="#">Consultoría Contable</a></li>
            <li><a href="#">Asesoría Tributaria</a></li>
            <li><a href="#">Revisoría Fiscal</a></li>
            <li><a href="#">Constitución y Liquidación</a></li>
            <li><a href="#">SG-SST</a></li>
            <li><a href="#">Aportes en Salud</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Empresa</h6>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Equipo</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Contacto</h6>
          <ul>
            <li><a href="#">+57 (1) 000 0000</a></li>
            <li><a href="#">contacto@buitragosanchez.com.co</a></li>
            <li><a href="#">Bogotá, Colombia</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Buitrago Sánchez &amp; Asociados SAS. Todos los derechos reservados.</span>
        <span>Política de privacidad · Términos</span>
      </div>
    </div>
  </footer>
);

/* ─── WhatsApp FAB ──────────────────────────────────────────────────────── */
const WhatsAppFab = () => (
  <a className="whatsapp-fab" href="#" aria-label="Escríbanos por WhatsApp">
    <span className="whatsapp-tooltip">¿Hablamos? Escríbanos.</span>
    <WhatsAppIcon />
  </a>
);

/* ─── App ───────────────────────────────────────────────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showWhatsApp": true,
  "showScrollHint": true,
  "heroOverlayDarkness": 0.55
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--hero-overlay-alpha", tweaks.heroOverlayDarkness
    );
    const hint = document.querySelector(".hero-scroll-hint");
    if (hint) hint.style.display = tweaks.showScrollHint ? "" : "none";
  }, [tweaks]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Testimonial />
        <About />
        <Stats />
        <Services />
        <Team />
        <CTA />
      </main>
      <Footer />
      {tweaks.showWhatsApp && <WhatsAppFab />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Elementos">
          <TweakToggle
            label="Botón de WhatsApp"
            value={tweaks.showWhatsApp}
            onChange={(v) => setTweak("showWhatsApp", v)}
          />
          <TweakToggle
            label="Indicador de scroll"
            value={tweaks.showScrollHint}
            onChange={(v) => setTweak("showScrollHint", v)}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakSlider
            label="Oscuridad del overlay"
            min={0.2} max={0.85} step={0.05}
            value={tweaks.heroOverlayDarkness}
            onChange={(v) => setTweak("heroOverlayDarkness", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
