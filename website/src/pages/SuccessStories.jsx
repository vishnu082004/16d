import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection } from '../components/Blocks.jsx';
import { useState } from 'react';
import LogoMarquee from '../components/LogoMarquee.jsx';
import { caseStudies, testimonials, clientLogos } from '../data/content.js';
import { photos, trainingPhotos, solutionTrainingPhotos, successStoryPhotoReplacements, heroes, industryPhotos } from '../data/images.js';
import { ButtonLink } from '../components/Blocks.jsx';

// Blueprint case study format: CHALLENGE > INTERVENTION > AUDIENCE > APPROACH > OUTCOME.
const steps = [
  ['challenge', 'Challenge'],
  ['intervention', 'Intervention'],
  ['audience', 'Audience'],
  ['approach', 'Approach'],
  ['outcome', 'Outcome / observed change'],
];

const WALL_STEP = 12;

export default function SuccessStories() {
  const [wallCount, setWallCount] = useState(WALL_STEP);
  const featured = new Set(photos.successGallery.map((p) => p.src));
  const wall = [
    ...solutionTrainingPhotos,
    ...trainingPhotos
      .filter((p) => !featured.has(p.src)
        && p.src !== '/images/training/training-065.jpg'
        && p.src !== '/images/training/training-037.jpg'
        && p.src !== '/images/training/training-069.jpg')
      .map((p) => successStoryPhotoReplacements[p.src] || p),
  ];
  usePageMeta('Success Stories', 'Case studies, client outcomes and testimonials from 16Dimensions training programmes.');

  return (
    <>
      <PageHero image={heroes.success}
        eyebrow="Success stories"
        title="Proof that behaviour really can change"
        intro="Real challenges, practical interventions and feedback from the organisations and people we have worked with."
      />

      <section className="section section--tint frontline-stories">
        <div className="container">
          <SectionHead eyebrow="Frontline Training in Action" title="Real Workplace Training. Practical Skills. Stronger Teams." intro="Frontline programmes support retail, restaurant and hospitality teams with practical, role-based learning." />
          <article className="frontline-stories__note">
            <div><span className="badge">Client details requested</span><h3>Help us document verified frontline engagements</h3><p>Suggested organisations include Super Saravana Stores, LKS, Ganga Sweets, M Wedding &amp; Convention and Manjal Restaurant. The project files do not confirm which teams attended, their training requirements, activities, outcomes or which photographs belong to those engagements. We’ll add case stories when those details are confirmed.</p><p><strong>Needed:</strong> confirmed organisation and team, session focus, activities practised, observed result or manager feedback, and an approved workshop photograph.</p><ButtonLink to="/services/frontline-shopfloor-training" variant="secondary">Explore Frontline &amp; Shopfloor Training</ButtonLink></div>
            <div className="frontline-stories__photos" aria-label="Examples of frontline and industry training">
              {[industryPhotos.manufacturing, industryPhotos['retail-qsr'], industryPhotos.hospitality].map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />)}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} as="article" className="case-full" delay={(i % 2) * 60}>
              <div className="case-card__top">
                <span className="badge">{c.industry}</span>
              </div>
              <h2>{c.title}</h2>
              <ol className="case-flow">
                {steps.map(([k, label]) => (
                  <li key={k}>
                    <span>{label}</span>
                    <p>{c[k]}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="What participants say" center />
          <div className="grid grid--3">
            {testimonials.map((t, i) => (
              <figure key={i} className="quote">
                <blockquote>{t.quote}</blockquote>
                {/* <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption> */}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {clientLogos.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <p className="brand-slogan">Shaping Leaders, Building Future</p>
          </div>
          <LogoMarquee logos={clientLogos} />
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Programme snapshots" title="From the training room" />
          <div className="gallery">
            {photos.successGallery.map((p) => (
              <img
                key={p.src}
                className="photo"
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = '/images/training/training-124.jpg';
                }}
              />
            ))}
          </div>
          <ul className="photo-wall">
            {wall.slice(0, wallCount).map((p) => (
              <li key={p.src}>
                <img src={p.src} alt={p.alt} title={p.title} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
          {wallCount < wall.length && (
            <div className="center-row">
              <button type="button" className="btn btn--secondary" onClick={() => setWallCount((c) => c + WALL_STEP * 2)}>
                Show more photos ({wall.length - wallCount} more)
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want results like these for your team?"
        text="Tell us about your challenge and we'll design a programme around the change you want to see."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
      />
    </>
  );
}
