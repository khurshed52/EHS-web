'use client';

import { useState } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { ArrowRight, BarChart3, Check, ClipboardCheck, HardHat, Handshake, Layers3, LockKeyhole, Menu, MessageCircle, ShieldCheck, Target, TriangleAlert, UsersRound, X, Construction } from 'lucide-react';

const nav = [ ['Home', '#home'], ['About', '#about'], ['EHS Services', '#services'], ['Digital Products', '#digital'], ['Training', '#training'], ['Portfolio', '#why'], ['Contact', '#contact'] ];
const services = [
  { title: <>Risk Assessment<br />(HIRA / JSA)</>, image: '/images/risk.jpg', icon: TriangleAlert, label: 'Risk Assessment (HIRA / JSA)' },
  { title: <>Safety<br />Documentation</>, sub: '(SOP, Method Statement)', image: '/images/documentation.jpg', icon: ClipboardCheck, label: 'Safety Documentation' },
  { title: <>Lifting Plans<br />& Rigging</>, image: '/images/lifting.jpg', icon: Construction, label: 'Lifting Plans and Rigging' },
  { title: <>LOTO<br />Procedures</>, image: '/images/loto.jpg', icon: LockKeyhole, label: 'LOTO Procedures' },
];
const benefits = [
  { icon: Target, title: 'Industry Experience', text: 'Hands-on, multi-sector EHS exposure.' },
  { icon: Layers3, title: 'Practical & Custom Solutions', text: 'Tailored to your operations and risks.' },
  { icon: ShieldCheck, title: 'Compliance Focused', text: 'Aligned with UAE and international standards.' },
  { icon: Handshake, title: 'Reliable Support', text: 'From documentation to implementation.' },
];
const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5 } };
const whatsapp = 'https://wa.me/?text=Hello%2C%20I%27d%20like%20to%20discuss%20EHS%20support.';

function Button({ href, children, outline = false, className = '' }) {
  return <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`button ${outline ? 'button-outline' : 'button-orange'} ${className}`} href={href}>{children}</motion.a>;
}
function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap shell">
    <a href="#home" className="brand" aria-label="EHS Consultant home"><span className="brand-icon"><HardHat size={34} strokeWidth={2.5} /></span><span><strong>EHS Consultant</strong><small>SAFETY | RISK | COMPLIANCE</small></span></a>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">{nav.map(([label, href], i) => <a key={label} className={i === 0 ? 'active' : ''} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-quote" href="#contact" onClick={() => setOpen(false)}>Request a Quote <ArrowRight size={16} /></a></nav>
    <Button href="#contact" className="header-quote">Request a Quote <ArrowRight size={16} /></Button>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}
function ServiceCard({ service }) {
  const Icon = service.icon;
  return <motion.a whileHover={{ y: -5 }} transition={{ duration: 0.2 }} href="#contact" className="service-card" aria-label={`Enquire about ${service.label}`} style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(4, 20, 29, .25) 42%, #071923 100%), url('${service.image}')` }}><span className="service-content"><span className="icon-badge"><Icon size={27} strokeWidth={1.7} /></span><strong>{service.title}</strong>{service.sub && <small>{service.sub}</small>}</span><span className="circle-arrow"><ArrowRight size={17} /></span></motion.a>;
}
export default function LandingPage() {
  const reducedMotion = useReducedMotion();
  return <MotionConfig reducedMotion="user"><Header /><main>
    <section id="home" className="hero"><div className="hero-bg" aria-hidden="true">{!reducedMotion && <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/images/hero.jpg"><source src="/videos/safety-briefing.mp4" type="video/mp4" /></video>}</div><div className="shell hero-inner"><motion.div {...reveal} className="hero-copy"><p className="hero-eyebrow">Independent EHS Consultant</p><h1>Practical EHS<br />Solutions for<br /><span>Safer Workplaces</span></h1><p className="hero-description">Expert support in risk management, safety documentation, compliance and training for businesses in the UAE and internationally.</p><div className="hero-actions"><Button href="#contact">Request a Consultation <ArrowRight size={17} /></Button><Button href="#services" outline>Explore Services</Button></div><div className="hero-benefits"><div><ShieldCheck /><span>Reduce Risks</span></div><div><BarChart3 /><span>Ensure Compliance</span></div><div><UsersRound /><span>Build a Safety Culture</span></div></div></motion.div></div></section>
    <div className="content-shell shell"><section id="services" className="services section-pad"><motion.div {...reveal} className="section-heading"><div><p className="eyebrow">What I Offer</p><h2>End-to-End EHS Support<br />for Your Business</h2></div><p className="section-intro">Customized, practical and compliant EHS solutions —<br className="desktop-break" /> from risk assessments to safe work procedures and audits.</p></motion.div><div className="service-grid">{services.map(service => <ServiceCard key={service.label} service={service} />)}</div></section>
    <motion.section {...reveal} className="feature-banner" aria-label="More ways to work together"><div id="digital" className="feature"><div className="feature-image digital-image" aria-hidden="true" /><div className="feature-copy"><h3>Digital Products</h3><p>Ready-to-use Excel trackers, checklists, templates and presentation packs.</p><a href="#contact">Browse Products <ArrowRight size={16} /></a></div></div><div id="training" className="feature"><div className="feature-image training-image" aria-hidden="true" /><div className="feature-copy"><h3>Training Academy</h3><p>Practical, industry-focused e-learning and safety training.</p><a href="#contact">Explore Training <ArrowRight size={16} /></a></div></div></motion.section>
    <motion.section {...reveal} id="about" className="why-section"><div className="why-title"><p className="eyebrow">Why Work With Me</p><h2>A Practical,<br />Result-Driven<br />EHS Partner</h2></div><div id="why" className="benefit-grid">{benefits.map(({icon: Icon, title, text}) => <div className="benefit" key={title}><Icon size={39} strokeWidth={1.5} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></motion.section>
    <motion.section {...reveal} id="contact" className="contact-banner"><div><h2>Let’s Strengthen Safety in<br />Your Workplace</h2><p>Get expert EHS support, documentation or training<br className="desktop-break" /> for your next project.</p></div><div className="contact-actions"><Button href={whatsapp}>Get in Touch <ArrowRight size={17} /></Button><Button href={whatsapp} outline><MessageCircle className="whatsapp-icon" size={22} /> Chat on WhatsApp</Button></div></motion.section>
    <footer><span>© {new Date().getFullYear()} EHS Consultant</span><span>Safety. Risk. Compliance.</span></footer></div>
  </main></MotionConfig>;
}
