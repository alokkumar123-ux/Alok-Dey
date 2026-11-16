import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Button } from "@/components/ui/button";

import corpseArenaAppOne from "@/assets/corpse-arena-app-1.webp";
import corpseArenaAppTwo from "@/assets/corpse-arena-app-2.webp";
import corpseArenaAppThree from "@/assets/corpse-arena-app-3.webp";
import corpseArenaAppFour from "@/assets/corpse-arena-app-4.webp";
import corpseArenaIcon from "@/assets/corpse-arena-icon.webp";
import corpseArenaPreview from "@/assets/corpse-arena.webp";
import corpseClubPreview from "@/assets/corpse-club.webp";
import cosmopolitanPreview from "@/assets/cosmopolitan.webp";
import ellePreview from "@/assets/elle.webp";
import encodersProPreview from "@/assets/encoders-pro.webp";
import graziaPreview from "@/assets/grazia-jp.webp";
import hiveIcon from "@/assets/hive-icon.webp";
import hiveScreenOne from "@/assets/nearhive-1.webp";
import hiveScreenTwo from "@/assets/nearhive-2.webp";
import hiveScreenThree from "@/assets/nearhive-3.webp";
import modelsRealmPreview from "@/assets/models-realm.webp";
import poolmateIcon from "@/assets/poolmate-icon.webp";
import poolmateScreenOne from "@/assets/bola-1.webp";
import poolmateScreenTwo from "@/assets/bola-2.webp";
import poolmateScreenThree from "@/assets/bola-3.webp";
import uaeCeoPreview from "@/assets/uae-ceo.webp";

gsap.registerPlugin(ScrollTrigger);

const websites = [
  { name: "COSMOPOLITAN", region: "SWEDEN", category: "Digital editorial", url: "https://cosmopolitansweden.com/", image: cosmopolitanPreview, tone: "project-paper" },
  { name: "ELLE", region: "COLOMBIA", category: "Fashion & culture", url: "https://elle.com.co/", image: ellePreview, tone: "project-ink" },
  { name: "CORPSE ARENA", region: "GLOBAL", category: "Gaming & esports", url: "https://corpsearena.com/", image: corpseArenaPreview, tone: "project-red" },
  { name: "GRAZIA", region: "JAPAN", category: "Fashion editorial", url: "https://graziajp.com/", image: graziaPreview, tone: "project-paper" },
  { name: "MODELS REALM", region: "GLOBAL", category: "Talent & fashion", url: "https://modelsrealm.com/", image: modelsRealmPreview, tone: "project-rose" },
  { name: "UAE CEO", region: "UNITED ARAB EMIRATES", category: "Business & leadership", url: "https://uaeceo.com/", image: uaeCeoPreview, tone: "project-cyan" },
  { name: "ENCODERSPRO", region: "GLOBAL", category: "Cybersecurity & AI", url: "https://encoderspro.com/", image: encodersProPreview, tone: "project-violet" },
  { name: "CORPSE CLUB", region: "GLOBAL", category: "Gaming community", url: "https://corpse-club.vercel.app/", image: corpseClubPreview, tone: "project-green" },
];

const apps = [
  {
    name: "Corpse Arena",
    category: "ESPORTS · COMPANION APP",
    summary: "Player stats, competitive arenas, and a closer connection to the game.",
    icon: corpseArenaIcon,
    storeLinks: [
      { name: "App Store", url: "https://apps.apple.com/sg/app/corpse-arena/id6762157008" },
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.corpsearena.app&pcampaignid=web_share" },
    ],
    screens: [corpseArenaAppOne, corpseArenaAppTwo, corpseArenaAppThree, corpseArenaAppFour],
  },
  {
    name: "Nearhive",
    category: "FOOD & DRINK · DELIVERY",
    summary: "A lively way to discover local favourites and enjoy the food-ordering experience.",
    icon: hiveIcon,
    storeLinks: [{ name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.deliverybuzz.hive&pcampaignid=web_share" }],
    screens: [hiveScreenOne, hiveScreenTwo, hiveScreenThree],
  },
  {
    name: "Bola",
    category: "TRAVEL · COMMUNITY",
    summary: "Connect drivers and riders heading in the same direction to share a journey.",
    icon: poolmateIcon,
    storeLinks: [{ name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.alok.poolmate&pcampaignid=web_share" }],
    screens: [poolmateScreenOne, poolmateScreenTwo, poolmateScreenThree],
  },
];

const skills = ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Node.js", "HTML & CSS", "GSAP", "Tailwind CSS", "REST APIs"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alok Dey — Mobile App & Web Developer" },
      { name: "description", content: "Selected digital experiences by Alok Dey. Mobile apps and thoughtful websites, built for the people who use them." },
      { property: "og:title", content: "Alok Dey — Mobile App & Web Developer" },
      { property: "og:description", content: "Selected digital experiences by Alok Dey. Mobile apps and thoughtful websites, built for the people who use them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const pageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: true });
    const animate = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(animate);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.fromTo(".hero-intro", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.13, ease: "power3.out", delay: 0.15 });
      gsap.fromTo(".hero-title-line", { yPercent: 115, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.15, stagger: 0.12, ease: "power4.out", delay: 0.25 });
      gsap.fromTo(".hero-side", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power2.out", delay: 0.85 });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(element, { y: 26, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".preview-frame img").forEach((image) => {
        gsap.fromTo(image, { scale: 1.055 }, {
          scale: 1,
          duration: 1.15,
          ease: "power2.out",
          scrollTrigger: { trigger: image, start: "top 92%", once: true },
        });
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const gallery = document.querySelector<HTMLElement>(".website-gallery");
        const track = document.querySelector<HTMLElement>(".website-track");
        if (!gallery || !track) return;
        const getDistance = () => Math.max(0, track.scrollWidth - gallery.clientWidth + 96);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: gallery,
            pin: true,
            scrub: 0.75,
            start: "top top+=76",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    }, page);

    lenis.on("scroll", ({ progress }) => {
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      ScrollTrigger.update();
    });

    return () => {
      context.revert();
      lenis.destroy();
      gsap.ticker.remove(animate);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const nav = navRef.current;
    if (!menu || !nav) return;
    const links = menu.querySelectorAll<HTMLAnchorElement>("a");
    const openButton = nav.querySelector<HTMLButtonElement>(".menu-toggle");
    const closeMenu = () => {
      menu.dataset.open = "false";
      openButton?.setAttribute("aria-expanded", "false");
    };
    links.forEach((link) => link.addEventListener("click", closeMenu));
    return () => links.forEach((link) => link.removeEventListener("click", closeMenu));
  }, []);

  function toggleMenu() {
    const menu = menuRef.current;
    const button = navRef.current?.querySelector<HTMLButtonElement>(".menu-toggle");
    if (!menu) return;
    const open = menu.dataset.open !== "true";
    menu.dataset.open = String(open);
    button?.setAttribute("aria-expanded", String(open));
  }

  return (
    <div className="portfolio" ref={pageRef}>
      <div aria-hidden="true" className="scroll-progress" ref={progressRef} />
      <header className="site-header" ref={navRef}>
        <a className="wordmark" href="#home" aria-label="Alok Dey, home"><span className="wordmark-mark">AD</span><span>ALOK DEY</span></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#about">About</a><a href="#work">Work <span className="nav-count">08</span></a><a href="#apps">Apps <span className="nav-count">03</span></a><a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> Available for select projects <ArrowUpRight aria-hidden="true" size={14} /></a>
        <Button className="menu-toggle" variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded="false"><Menu className="menu-icon-open" /><X className="menu-icon-close" /></Button>
      </header>
      <div className="mobile-menu" data-open="false" ref={menuRef}>
        <a href="#about">About <ArrowRight /></a><a href="#work">Selected work <ArrowRight /></a><a href="#apps">Mobile apps <ArrowRight /></a><a href="#contact">Contact <ArrowRight /></a>
      </div>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-topline hero-intro"><span>WEB & MOBILE DEVELOPER</span><span className="topline-center"><span className="status-dot" /> SELECTED WORK</span><span>PORTFOLIO <span className="topline-slash">/</span> 2026</span></div>
            <div className="hero-title-wrap">
              <p className="hero-index hero-side"><span>001</span><span>WEB & MOBILE</span></p>
              <h1 id="hero-heading"><span className="hero-line-mask"><span className="hero-title-line">I BUILD THINGS</span></span><span className="hero-line-mask hero-line-second"><span className="hero-title-line hero-title-accent">THAT MOVE <span className="hero-dot">.</span></span></span></h1>
              <p className="hero-location hero-side">ALOK DEY<br />MOBILE APP & WEB DEVELOPER</p>
            </div>
            <div className="hero-bottom hero-intro">
              <p className="hero-description">Thoughtful digital experiences.<br />Built for the way people <span>actually live.</span></p>
              <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" size={16} /></a>
              <span className="hero-side-number">PORTFOLIO <span>—</span> 2026</span>
            </div>
          </div>
          <div aria-hidden="true" className="hero-edge hero-edge-left" /><div aria-hidden="true" className="hero-edge hero-edge-right" />
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-heading">
          <SectionLabel number="01" label="A LITTLE ABOUT ME" />
          <div className="about-grid">
            <h2 className="about-statement reveal" id="about-heading">Design-minded.<br />Detail-obsessed.<br /><span>Built to ship.</span></h2>
            <div className="about-copy reveal">
              <p className="about-lede">I’m Alok — a developer working at the intersection of <em>good design</em> and <em>great engineering.</em></p>
              <p>I turn ideas into complete digital products: fast, considered websites and useful mobile apps. My work spans fashion, media, gaming, and technology — from the first sketch to the last pixel.</p>
              <a className="text-link" href="#experience">A little more about my work <ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="about-foot reveal"><span>08 WEBSITE PROJECTS</span><span>03 MOBILE APPS</span><span>WEB + MOBILE</span></div>
        </section>

        <section className="skills-section section-wrap" aria-labelledby="skills-heading">
          <SectionLabel number="02" label="TOOLS OF THE TRADE" />
          <div className="skills-grid">
            <div className="skills-intro reveal"><h2 id="skills-heading">One idea.<br /><span>End to end.</span></h2><p>From interface and interaction to the underlying code, I take an idea all the way through.</p></div>
            <div className="skills-list" aria-label="Development skills">{skills.map((skill, index) => <span className="skill-chip reveal" key={skill}><span className="skill-number">0{index + 1}</span>{skill}</span>)}</div>
          </div>
          <div className="experience" id="experience">
            <div className="experience-heading reveal"><span>EXPERIENCE</span><span>WEB + MOBILE DEVELOPMENT</span></div>
            <div className="experience-row reveal"><div className="experience-symbol"><Code2 aria-hidden="true" size={20} /></div><div className="experience-role"><h3>Websites & mobile applications</h3><p>Eight website projects · Three mobile apps</p></div><div className="experience-proof"><span>08</span><span>WEBSITES</span></div><div className="experience-proof"><span>03</span><span>MOBILE APPS</span></div><ArrowUpRight className="experience-arrow" aria-hidden="true" size={19} /></div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-heading">
          <div className="section-wrap work-header">
            <SectionLabel number="03" label="SELECTED DIGITAL WORK" />
            <div className="work-heading-row reveal"><h2 id="work-heading">Web, <span>with a point of view.</span></h2><p>Eight live websites.<br />Each with its own world.</p></div>
          </div>
          <div className="website-gallery" aria-label="A horizontal gallery of eight website projects">
            <div className="website-track">
              {websites.map((project, index) => <a className={`website-card ${project.tone}`} href={project.url} target="_blank" rel="noreferrer" key={project.name} aria-label={`${project.name}, ${project.category}, open website`}>
                <div className="project-topline"><span>0{index + 1} <span className="project-separator">/ 08</span></span><span>{project.region}</span></div>
                <div className="preview-frame"><img src={project.image} alt={`${project.name} live website preview`} loading={index < 2 ? "eager" : "lazy"} /></div>
                <div className="project-bottom"><div><h3>{project.name}</h3><span>{project.category}</span></div><span className="project-open"><ArrowUpRight size={19} aria-hidden="true" /></span></div>
              </a>)}
            </div>
          </div>
          <div className="gallery-hint section-wrap"><span><span className="hint-line" /> A FEW THINGS I’VE MADE</span><span>08 SELECTED PROJECTS</span></div>
        </section>

        <section className="apps-section section-wrap" id="apps" aria-labelledby="apps-heading">
          <SectionLabel number="04" label="MADE FOR THE SMALL SCREEN" />
          <div className="apps-heading-row reveal"><h2 id="apps-heading">Made to <span>go.</span></h2><p>Three apps. Different worlds.<br />The same attention to detail.</p></div>
          <div className="app-list">
            {apps.map((app, index) => <article className={`app-row app-row-${index + 1}`} key={app.name}>
              <div className="app-info reveal"><div className="app-identity"><span className="app-index">0{index + 1}</span><img className="app-icon" src={app.icon} alt={`${app.name} app icon`} loading="lazy" /><div><h3>{app.name}</h3><span className="app-category">{app.category}</span></div></div><p>{app.summary}</p><div className="app-store-links">{app.storeLinks.map((store) => <a key={store.name} href={store.url} target="_blank" rel="noreferrer">{store.name}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></div>
              <div className="phone-stage reveal" aria-label={`${app.name} official app screenshots`}>{app.screens.map((screen, screenIndex) => <div className={`phone-shell phone-shell-${screenIndex + 1}`} key={screen}><div className="phone-screen"><img src={screen} alt={`${app.name} mobile app screen ${screenIndex + 1}`} loading="lazy" /></div></div>)}</div>
            </article>)}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-inner section-wrap">
            <SectionLabel number="05" label="HAVE A GOOD ONE IN MIND?" />
            <div className="contact-copy reveal"><span className="contact-pretitle"><span className="status-dot" /> LET’S TALK ABOUT YOUR NEXT PROJECT</span><h2 id="contact-heading">Let’s make<br />something <span>matter.</span></h2><a className="contact-button" href="mailto:?subject=Project%20inquiry%20for%20Alok%20Dey"><span>START A CONVERSATION</span><span className="contact-button-icon"><ArrowUpRight aria-hidden="true" size={22} /></span></a><p className="contact-note">Thoughtful projects welcome. Good people too.</p></div>
            <div className="contact-side-note reveal"><span>WEBSITE PROJECTS</span><span>MOBILE APPLICATIONS</span><span>AVAILABLE FOR COLLABORATION</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="footer-wordmark" href="#home">AD<span>.</span></a><span className="footer-credit">WEB <span>·</span> MOBILE <span>·</span> DIGITAL PRODUCTS</span><a href="#home" className="back-to-top">BACK TO TOP <ArrowRight size={14} /></a><span className="footer-year">© 2026</span></footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="section-label reveal"><span className="section-number">{number}</span><span className="section-label-rule" /><span>{label}</span></div>;
}