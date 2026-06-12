import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Leaf,
  Droplets,
  Calendar,
  Sparkles,
  Wrench,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Home,
  Star,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import sParq from "@/assets/service-parquizacion.jpg";
import sJard from "@/assets/service-jardines.jpg";
import sPil from "@/assets/service-pileta.jpg";
import sTemp from "@/assets/service-temporada.jpg";
import sProg from "@/assets/service-programado.jpg";
import sAses from "@/assets/service-asesoramiento.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g1b from "@/assets/gallery-1-before.jpg";
import g2b from "@/assets/gallery-2-before.jpg";
import g3b from "@/assets/gallery-3-before.jpg";
import g4b from "@/assets/gallery-4-before.jpg";
import g5b from "@/assets/gallery-5-before.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import whatsappLogo from "@/assets/whatsapp-logo.svg";

const WHATSAPP_NUMBER = "5491123181133";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 9.5c-12.4 0-22.4 9.8-22.4 21.9 0 4.4 1.3 8.6 3.8 12.2L10.8 54l10.7-2.8A22.9 22.9 0 0 0 32 53.3c12.4 0 22.4-9.8 22.4-21.9S44.4 9.5 32 9.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M24.2 22.7c-.6 1.2-1.2 3.5.8 7.1 2.4 4.4 6.5 8.2 11.1 10.5 3.6 1.7 5.8.9 6.9.3l2.2-4.7-5.5-2.7-2.1 2.5c-.6.7-1.4.9-2.3.5-2.5-1.1-5.9-3.5-7.8-7-.4-.8-.3-1.6.3-2.2l2.2-2.2-2.5-5.3-3.3.2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
}

function buildWaUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function openQuickQuote() {
  window.open(
    buildWaUrl("Hola! 👋 Quería solicitar un presupuesto para parquización y/o mantenimiento de pileta."),
    "_blank",
  );
}

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-border shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className={scrolled ? "text-foreground" : "text-white drop-shadow"}>
            RUBÉN <span className="text-brand-light">&</span> IVÁN
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={[
                "text-sm font-medium transition-colors",
                scrolled ? "text-foreground/80 hover:text-brand" : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              {n.label}
            </a>
          ))}
          <span className={[
            "text-sm font-medium",
            scrolled ? "text-foreground/80" : "text-white/90",
          ].join(" ")}>
            prueba
          </span>
        </nav>

        <div className="hidden lg:block">
          <Button onClick={openQuickQuote} className="bg-brand text-white hover:bg-brand/90 rounded-full px-5 h-11 font-semibold shadow-brand">
            Solicitar Presupuesto
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className={[
            "grid h-11 w-11 place-items-center rounded-xl lg:hidden",
            scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white backdrop-blur",
          ].join(" ")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <span className="rounded-lg px-3 py-3 text-sm font-medium text-foreground">
              prueba
            </span>
            <Button
              onClick={() => {
                setOpen(false);
                openQuickQuote();
              }}
              className="mt-2 bg-brand text-white hover:bg-brand/90 rounded-full h-12 font-semibold"
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Casa moderna con jardín cuidado y pileta cristalina"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--brand)_25%,transparent),_transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8">
        <div className="max-w-4xl">
          <span
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand-light animate-pulse" />
            Servicio Profesional a Domicilio
          </span>

          <h1
            data-reveal
            className="mt-6 font-display text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[80px]"
            style={{ animationDelay: "120ms" }}
          >
            Transformamos tu{" "}
            <span className="text-brand-light">jardín</span> y cuidamos
            <br className="hidden sm:block" /> tu{" "}
            <span className="text-[color:var(--pool)]">pileta</span>
          </h1>

          <p
            data-reveal
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Especialistas en parquización, mantenimiento de espacios verdes y
            cuidado integral de piletas para hogares, quintas y barrios privados.
          </p>

          <div
            data-reveal
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <Button
              onClick={openQuickQuote}
              className="h-14 rounded-full bg-brand px-7 text-base font-semibold text-white hover:bg-brand/90 shadow-brand"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Solicitar Presupuesto
            </Button>
            <a
              href="#servicios"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div
            data-reveal
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 sm:max-w-2xl"
            style={{ animationDelay: "480ms" }}
          >
            {[
              { target: 10, prefix: "+", suffix: "", l: "años de experiencia" },
              { target: 500, prefix: "+", suffix: "", l: "trabajos realizados" },
              { target: 100, prefix: "", suffix: "%", l: "atención personalizada" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/25 pl-4 sm:pl-6">
                <div className="font-display text-3xl font-black text-white sm:text-5xl">
                  <CountUp target={s.target} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-soft" />
          <img
            src={aboutImg}
            alt="Herramientas profesionales de jardinería y mantenimiento de piletas"
            loading="lazy"
            width={1280}
            height={1280}
            className="aspect-square w-full rounded-3xl object-cover shadow-brand"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-border sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">+10 años</div>
                <div className="text-xs text-muted-foreground">de experiencia comprobada</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Quiénes Somos
          </span>
          <h2
            data-reveal
            className="mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Rubén <span className="text-gradient-brand">e Iván</span>
          </h2>
          <div data-reveal className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "180ms" }}>
            <p>
              Somos un equipo dedicado al mantenimiento integral de jardines y
              piletas. Trabajamos de manera personalizada en cada domicilio,
              brindando soluciones profesionales para que nuestros clientes
              disfruten de espacios exteriores siempre impecables.
            </p>
            <p>
              Nos enfocamos en la calidad del trabajo, la puntualidad, la confianza
              y la atención cercana.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Atención personalizada",
              "Trabajo a domicilio",
              "Responsabilidad y compromiso",
              "Presupuestos sin cargo",
            ].map((t, i) => (
              <div
                key={t}
                data-reveal
                style={{ animationDelay: `${i * 80 + 240}ms` }}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-semibold text-foreground sm:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    img: sParq,
    icon: Leaf,
    title: "Parquización",
    desc: "Diseño y acondicionamiento de espacios verdes para mejorar la estética y funcionalidad de tu jardín.",
    items: ["Colocación de césped", "Diseño paisajístico", "Nivelación de terreno", "Recuperación de jardines"],
  },
  {
    img: sJard,
    icon: Sparkles,
    title: "Mantenimiento de Jardines",
    desc: "Cuidamos cada detalle para que tu espacio verde luzca impecable durante todo el año.",
    items: ["Corte de césped", "Poda", "Desmalezado", "Limpieza general"],
  },
  {
    img: sPil,
    icon: Droplets,
    title: "Mantenimiento de Piletas",
    desc: "Servicio integral para mantener el agua limpia, segura y cristalina.",
    items: ["Limpieza de fondo", "Aspirado", "Control químico", "Filtrado"],
  },
  {
    img: sTemp,
    icon: Wrench,
    title: "Puesta a Punto de Temporada",
    desc: "Preparación completa de la pileta para el verano.",
    items: ["Limpieza profunda", "Tratamiento del agua", "Revisión de equipos", "Optimización del sistema"],
  },
  {
    img: sProg,
    icon: Calendar,
    title: "Mantenimiento Programado",
    desc: "Planes periódicos para despreocuparte del mantenimiento.",
    items: ["Visitas programadas", "Seguimiento constante", "Reportes visuales", "Atención rápida"],
  },
  {
    img: sAses,
    icon: MessageCircle,
    title: "Asesoramiento Personalizado",
    desc: "Te ayudamos a encontrar la mejor solución para tu jardín o pileta.",
    items: ["Diagnóstico inicial", "Recomendaciones a medida", "Presupuesto detallado", "Sin compromiso"],
  },
];

function Services() {
  return (
    <section id="servicios" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Nuestros Servicios
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
            Soluciones completas para tu hogar
          </h2>
          <p data-reveal className="mt-5 text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "180ms" }}>
            Soluciones completas para mantener tu jardín y tu pileta siempre en
            perfectas condiciones.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                data-reveal
                style={{ animationDelay: `${(i % 3) * 80}ms` }}
                className="group overflow-hidden rounded-3xl bg-card ring-1 ring-border hover-lift"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand backdrop-blur shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-extrabold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Home, title: "Atención a domicilio", desc: "Vamos directamente a tu propiedad." },
    { icon: Wrench, title: "Trabajo profesional", desc: "Herramientas y técnicas especializadas." },
    { icon: ShieldCheck, title: "Servicio confiable", desc: "Compromiso y puntualidad." },
    { icon: Sparkles, title: "Resultados visibles", desc: "Espacios impecables durante todo el año." },
  ];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Beneficios
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-black sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
            ¿Por qué elegirnos?
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                data-reveal
                style={{ animationDelay: `${i * 90}ms` }}
                className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition hover:bg-white/15"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { before: g1b, after: g1, alt: "Jardín recuperado con césped renovado", cls: "lg:row-span-2 aspect-[4/5] lg:aspect-auto" },
    { before: g2b, after: g2, alt: "Pileta cristalina vista aérea", cls: "aspect-[4/3]" },
    { before: g3b, after: g3, alt: "Cantero con cercos perfectamente recortados", cls: "aspect-[4/3]" },
    { before: g4b, after: g4, alt: "Pileta moderna en casa residencial", cls: "lg:row-span-2 aspect-[4/5] lg:aspect-auto" },
    { before: g5b, after: g5, alt: "Jardín tropical mantenido", cls: "aspect-[16/9] lg:col-span-2" },
  ];
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Galería
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-black sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
            Antes y <span className="text-gradient-brand">Después</span>
          </h2>
          <p data-reveal className="mt-5 text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "180ms" }}>
            Deslizá sobre cada imagen para ver la transformación: el antes y el después de nuestro trabajo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {imgs.map((img, i) => (
            <div
              key={i}
              data-reveal
              style={{ animationDelay: `${i * 80}ms` }}
              className={`${img.cls}`}
            >
              <BeforeAfter before={img.before} after={img.after} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Lucía M.", role: "San Isidro", text: "El jardín quedó espectacular. Muy recomendables." },
  { name: "Federico G.", role: "Pilar", text: "Se ocupan de todo y la pileta siempre está impecable." },
  { name: "Marina T.", role: "Nordelta", text: "Responsables, puntuales y muy profesionales." },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Testimonios
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-black sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              data-reveal
              style={{ animationDelay: `${i * 100}ms` }}
              className="rounded-3xl bg-card p-8 ring-1 ring-border hover-lift"
            >
              <div className="flex gap-1 text-[color:var(--brand-light)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">
                “{t.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !servicio || !mensaje.trim()) {
      toast.error("Por favor completá todos los campos.");
      return;
    }
    const text = `Hola! 👋\n\n*Mi nombre es:* ${nombre}\n\n*Me interesa el servicio de:* ${servicio}\n\n*Detalles:* ${mensaje}`;
    window.open(buildWaUrl(text), "_blank");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-2xl sm:p-9">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-sm font-semibold">Nombre completo</Label>
          <Input
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="h-12 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="servicio" className="text-sm font-semibold">Servicio de interés</Label>
          <Select value={servicio} onValueChange={setServicio}>
            <SelectTrigger id="servicio" className="h-12 rounded-xl">
              <SelectValue placeholder="Elegí el servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Solo Parquización">Solo Parquización</SelectItem>
              <SelectItem value="Solo Mantenimiento de Pileta">Solo Mantenimiento de Pileta</SelectItem>
              <SelectItem value="Ambos servicios">Ambos servicios</SelectItem>
              <SelectItem value="Otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-sm font-semibold">Mensaje o detalles del trabajo</Label>
          <Textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Contanos qué trabajo necesitás realizar..."
            rows={5}
            className="rounded-xl resize-none"
          />
        </div>
        <Button
          type="submit"
          className="h-14 w-full rounded-xl bg-[color:var(--whatsapp)] text-base font-bold text-white hover:bg-[color:var(--whatsapp)]/90"
          style={{ boxShadow: "0 18px 40px -18px color-mix(in oklab, var(--whatsapp) 60%, transparent)" }}
        >
          <WhatsAppIcon className="mr-2 h-6 w-6" />
          Enviar consulta por WhatsApp
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Se abrirá WhatsApp con tu mensaje listo para enviar.
        </p>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_color-mix(in_oklab,var(--pool)_18%,transparent),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Contacto
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-[56px]" style={{ animationDelay: "100ms" }}>
            Transformamos tu jardín y cuidamos tu pileta
          </h2>
          <p data-reveal className="mt-5 text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "180ms" }}>
            Contanos qué necesitás y te responderemos por WhatsApp para coordinar
            una visita y presupuesto.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              { icon: MapPin, t: "Atención a domicilio" },
              { icon: Clock, t: "Horarios flexibles" },
              { icon: Phone, t: "Respuesta rápida" },
              { icon: CheckCircle2, t: "Presupuesto sin compromiso" },
            ].map((b, i) => {
              const I = b.icon;
              return (
                <div
                  key={b.t}
                  data-reveal
                  style={{ animationDelay: `${i * 80 + 240}ms` }}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 backdrop-blur ring-1 ring-border"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                    <I className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground sm:text-base">{b.t}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div data-reveal style={{ animationDelay: "200ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt="Casa moderna iluminada al atardecer con jardín y pileta"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <h2 data-reveal className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Dejá tu jardín y tu pileta en manos <span className="text-brand-light">profesionales</span>
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg" style={{ animationDelay: "120ms" }}>
          Rubén & Iván te ayudan a mantener tus espacios exteriores impecables
          durante todo el año.
        </p>
        <div data-reveal className="mt-10" style={{ animationDelay: "220ms" }}>
          <Button
            onClick={openQuickQuote}
            className="h-14 rounded-full bg-[color:var(--whatsapp)] px-8 text-base font-bold text-white hover:bg-[color:var(--whatsapp)]/90"
          >
            <WhatsAppIcon className="mr-2 h-6 w-6" />
            Solicitar Presupuesto por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
              <Leaf className="h-5 w-5" />
            </span>
            RUBÉN <span className="text-brand-light">&</span> IVÁN
          </div>
          <p className="mt-4 text-sm text-white/65">
            Parquización y Mantenimiento de Piletas. Servicio profesional a domicilio.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Navegación</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/85 hover:text-brand-light">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Contacto</div>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-light" /> Atención a domicilio</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-light" /> Respuesta rápida por WhatsApp</li>
          </ul>
          <Button
            onClick={openQuickQuote}
            className="mt-5 h-11 rounded-full bg-[color:var(--whatsapp)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--whatsapp)]/90"
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Escribinos
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs text-white/55 sm:px-8">
        © 2026 Rubén & Iván. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <button
      onClick={openQuickQuote}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 isolate grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl ring-4 ring-[#25D366]/25 transition hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.45)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-[#25D366]/35" />
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="relative z-10 h-11 w-11 select-none sm:h-12 sm:w-12"
        draggable={false}
      />
    </button>
  );
}

export function Landing() {
  useReveal();
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Gallery />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster richColors position="top-center" />
    </div>
  );
}

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const from = 1;
            const tick = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = Math.round(from + (target - from) * eased);
              setValue(current);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || !e.touches[0]) return;
      updateFromClientX(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative h-full w-full select-none overflow-hidden rounded-3xl ring-1 ring-border"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* AFTER (base) */}
      <img
        src={after}
        alt={`${alt} — después`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
        Después
      </span>

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — antes`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
          Antes
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand shadow-xl ring-2 ring-brand/30 transition-transform hover:scale-110">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" style={{ display: "none" }} />
          </svg>
          <svg className="absolute" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" transform="translate(6 0)" />
            <polyline points="15 6 9 12 15 18" transform="translate(-6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
