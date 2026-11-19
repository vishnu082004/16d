import { useEffect, useState } from 'react';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, SectionHead } from '../components/Blocks.jsx';
import { solutions } from '../data/solutions.js';
import { methodology } from '../data/content.js';
import { heroes, industryPhotos, solutionPhotos } from '../data/images.js';
import { site } from '../data/site.js';
import SolutionIcon from '../components/SolutionIcon.jsx';

// Highlights the family currently in the middle of the screen in the sticky nav.
function useActiveFamily() {
  const [active, setActive] = useState('frontline-shopfloor-training');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['frontline-shopfloor-training', ...solutions.map((s) => s.slug)].forEach((slug) => {
      const el = document.getElementById(slug);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Solutions() {
  usePageMeta(
    'Training Solutions',
    'Leadership training for managers, communication skills training for employees, customer service and sales training, workplace effectiveness and PoSH training.'
  );
  const active = useActiveFamily();
  const programmeCount = solutions.reduce((n, s) => n + s.topics.length, 0);

  return (
    <>
      <PageHero image={heroes.solutions}
        eyebrow="Training solutions"
        title="Programmes built around the outcomes you need"
        intro={<>Explore our six solution families and the programmes inside each one. Every programme is tailored to your industry, your audience and your business goals, guided by our promise: <strong className="brand-slogan">{site.slogan}</strong>.</>}
      >
        <ButtonLink to="/contact?enquiry=proposal">Request a customised proposal</ButtonLink>
        <ButtonLink to={`#${solutions[0].slug}`} variant="secondary">Explore the families</ButtonLink>
      </PageHero>

      <div className="family-summary">
        <div className="container family-summary__inner">
          <p>
            <strong>3+</strong> countries
          </p>
          <p>
            <strong>5000+</strong> programmes
          </p>
          <p>
            <strong>100%</strong> customised to your context
          </p>
        </div>
      </div>

      <nav className="family-nav" aria-label="Solution families">
        <div className="container">
          <ul>
            <li>
              <a href="#frontline-shopfloor-training" className={active === 'frontline-shopfloor-training' ? 'is-active' : undefined}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20M17 8a3 3 0 0 1 0 6m1.5 1.5a4.5 4.5 0 0 1 2 3.8V20"/></svg>
                <span>Frontline</span>
              </a>
            </li>
            {solutions.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className={active === s.slug ? 'is-active' : undefined}>
                  <SolutionIcon slug={s.slug} fallback={s.icon} />
                  <span>{s.title.split(' & ')[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="family frontline-feature" id="frontline-shopfloor-training">
        <div className="container family__grid">
          <div className="family__media">
            <img src={industryPhotos['retail-qsr'].src} alt="Frontline service team taking part in a training session" loading="lazy" />
            <span className="family__num" aria-hidden="true">01</span>
            <div className="family__badge"><strong>3</strong><span>industries</span></div>
          </div>

          <div className="family__copy">
            <p className="eyebrow">Solution family 01</p>
            <div className="family__title">
              <span className="family__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3.5 20v-1.5a5.5 5.5 0 0 1 11 0V20M17 8a3 3 0 0 1 0 6m1.5 1.5a4.5 4.5 0 0 1 2 3.8V20"/></svg>
              </span>
              <h2>Frontline &amp; Shopfloor Team Training</h2>
            </div>
            <p className="lead">Practical training for frontline teams to strengthen workplace communication, customer service, professional behaviour and operational skills.</p>

            <h3 className="family__label">Training by industry</h3>
            <ul className="pills family__pills">
              <li>Manufacturing</li>
              <li>Retail</li>
              <li>Hospitality</li>
            </ul>

            <h3 className="family__label">Who we train</h3>
            <ul className="pills family__pills">
              <li>Operators</li>
              <li>Technicians</li>
              <li>Drivers</li>
              <li>Retail Associates</li>
              <li>Cashiers</li>
              <li>Service Crews</li>
              <li>Support Staff</li>
            </ul>

            <div className="family__outcomes">
              <h3 className="family__label">Skills teams build</h3>
              <Checklist items={['Clear shift handovers and early issue reporting', 'Confident customer conversations and selling', 'Consistent grooming and service standards']} />
            </div>

            <div className="btn-row">
              <ButtonLink to="/services/frontline-shopfloor-training">View programme details</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Discuss frontline training</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {solutions.map((s, i) => {
        const photo = solutionPhotos[s.slug];
        const detail = s.link || `/training-solutions/${s.slug}`;
        const num = String(i + 2).padStart(2, '0');
        return (
          <section key={s.slug} id={s.slug} className={`family ${i % 2 ? 'family--flip' : ''} ${['workplace-effectiveness', 'communication-collaboration', 'leadership-people-management'].includes(s.slug) ? 'family--inline-actions' : ''}`}>
            <div className="container family__grid">
              <Reveal className="family__media">
                {photo && <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />}
                <span className="family__num" aria-hidden="true">{num}</span>
                <div className="family__badge">
                  <strong>{s.topics.length}</strong>
                  <span>programmes</span>
                </div>
              </Reveal>

              <Reveal className="family__copy" delay={100}>
                <p className="eyebrow">Solution family {num}</p>
                <div className="family__title">
                  <span className="family__icon" aria-hidden="true">
                    <SolutionIcon slug={s.slug} fallback={s.icon} />
                  </span>
                  <h2>{s.title}</h2>
                </div>
                <p className="lead">{s.summary}</p>

                <h3 className="family__label">Programmes inside</h3>
                <ul className="pills family__pills">
                  {s.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="family__outcomes">
                  <h3 className="family__label">What changes after the programme</h3>
                  <Checklist items={s.outcomes} />
                </div>

                <p className="family__for">
                  <span>Who it's for</span>
                  {s.audience}
                </p>

                <div className="btn-row">
                  <ButtonLink to={detail}>View programme details</ButtonLink>
                  <ButtonLink to="/contact" variant="secondary">{s.cta}</ButtonLink>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="How we deliver"
            title="Every programme follows the same six steps"
            intro="Whichever family you choose, we start from your business need and finish by measuring what changed."
          />
          <ol className="method">
            {methodology.map((m, i) => (
              <Reveal as="li" key={m.step} className="method__step" delay={i * 60}>
                <span className="method__num">{m.step}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Not sure which programme fits?"
        text="Describe the challenge you are facing and we'll recommend the right mix of programmes for your team."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
      />

    </>
  );
}
