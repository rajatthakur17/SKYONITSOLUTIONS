import { useState, type FC } from "react";
import "./hero.css";

type NavItem = { label: string; href: string };
type Stat = { value: string; label: string };
type Pillar = { key: "build" | "automate" | "analyze" | "grow"; title: string; icon: string; lines: [string, string] };

const NAV: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Industries", href: "#industries" },
  { label: "Our Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#contact" },
];

const STATS: Stat[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "4+", label: "Industries Served" },
  { value: "3x", label: "Avg. Growth in Leads" },
];

const PILLARS: Pillar[] = [
  { key: "build", title: "Build", icon: "⌗", lines: ["Web • Mobile • SaaS", "E-commerce • Custom Software"] },
  { key: "automate", title: "Automate", icon: "⚙", lines: ["AI Agents • Chatbots", "CRM Automation • APIs"] },
  { key: "analyze", title: "Analyze", icon: "▤", lines: ["Data Analytics • BI", "Dashboards • Reporting"] },
  { key: "grow", title: "Grow", icon: "↗", lines: ["SEO • Ads • Social Media", "Content • Conversion"] },
];

const Logo: FC = () => (
  <a className="logo" href="#top">
    SKYON<small>IT SOLUTIONS</small>
  </a>
);

const Header: FC = () => (
  <header className="site-header">
    <div className="wrap bar">
      <Logo />
      <nav aria-label="Main">
        {NAV.map((n) => (
          <a key={n.href} href={n.href}>{n.label}</a>
        ))}
      </nav>
      <a className="btn sm" href="#contact">Book a Consultation →</a>
    </div>
  </header>
);

const Hero: FC = () => {
  const [videoOpen, setVideoOpen] = useState<boolean>(false);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="tag">Technology &amp; Digital Growth Partner</span>
          <h1>
            Build.<span>Automate.</span>Analyze.<br />Grow.
          </h1>
          <p className="lead">
            We help businesses build their digital foundation, automate operations,
            use data intelligently and grow online.
          </p>
          <div className="cta">
            <a className="btn" href="#contact">Book a Consultation →</a>
            <button className="btn outline" onClick={() => setVideoOpen(true)}>
              <span className="play">▶</span>Watch Video
            </button>
          </div>
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="stage" aria-hidden="true">
          <div className="base" />
          {PILLARS.map((p, i) => (
            <div key={p.key} className={`glass g${i + 1}`}>
              <i>{p.icon}</i>
              <h4>{p.title}</h4>
              <small>{p.lines[0]}<br />{p.lines[1]}</small>
            </div>
          ))}
          <div className="core">S</div>
          <div className="note">Ideas into Impact →</div>
        </div>
      </div>

      {videoOpen && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setVideoOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <p>Add your video embed here.</p>
            <button className="btn sm" onClick={() => setVideoOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main><Hero /></main>
    </>
  );
}
