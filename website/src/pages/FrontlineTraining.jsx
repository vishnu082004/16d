import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { ButtonLink, CTASection, PageHero, SectionHead } from '../components/Blocks.jsx';
import { industryPhotos, photos } from '../data/images.js';
import './FrontlineTraining.css';

const audiences = ['Operators', 'Technicians', 'Drivers', 'Retail Associates', 'Cashiers', 'Service Crews', 'Support Staff'];
const programmes = [
  { number: '01', title: 'Grooming and Body Language', text: 'Build professional appearance, personal grooming, positive body language, workplace etiquette and professional conduct.' },
  { number: '02', title: 'Customer Service', text: 'Practise customer interaction, listening, handling complaints, service standards and habits that support customer satisfaction.' },
  { number: '03', title: 'Sales Communication', text: 'Develop confident customer conversations, product recommendations, product knowledge communication, and thoughtful upselling and cross-selling.' },
  { number: '04', title: 'Workplace Communication and Operations', text: 'Strengthen shift handovers, early issue reporting, team coordination, workplace communication and problem escalation.' },
];
const industries = [
  { name: 'Manufacturing', image: industryPhotos.manufacturing, items: ['Shift handovers', 'Early issue reporting', 'Team communication', 'Workplace safety communication', 'Operational coordination'] },
  { name: 'Retail', image: industryPhotos['retail-qsr'], items: ['Customer conversations', 'Product recommendations', 'Selling skills', 'Handling customer complaints', 'Professional customer service'] },
  { name: 'Hospitality', image: industryPhotos.hospitality, items: ['Grooming standards', 'Body language', 'Guest interactions', 'Service standards', 'Customer experience'] },
];
const approach = ['Understand the work', 'Practise real scenarios', 'Learn by doing together', 'Apply skills on the job'];

export default function FrontlineTraining() {
  usePageMeta('Frontline & Shopfloor Team Training', 'Practical, activity-based training for frontline and shopfloor teams in manufacturing, retail and hospitality.');
  return (
    <>
      <PageHero eyebrow="Practical workplace learning" title="Frontline & Shopfloor Team Training" intro="16Dimensions helps frontline employees build practical skills for the everyday responsibilities of their roles, from workplace communication to customer service." image={photos.homeGallery[6].src} imagePosition="center">
        <ButtonLink to="/contact?enquiry=proposal">Discuss your team’s training</ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container frontline-intro">
          <SectionHead eyebrow="Skills for the work people do every day" title="Practical learning for operational and customer-facing teams" intro="Frontline roles rely on everyday workplace skills. We help employees communicate clearly, act professionally, serve customers well, follow operational discipline and solve problems early." />
          <div className="frontline-intro__points"><span>Communication</span><span>Professional behaviour</span><span>Customer interactions</span><span>Operational discipline</span><span>Practical problem-solving</span></div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Who we train" title="Built for the people closest to the work" intro="Our programmes support blue-collar and non-executive staff, with practical sessions shaped around their roles, work settings and daily responsibilities." />
          <ul className="frontline-audience">{audiences.map((person, index) => <li key={person}><span>{String(index + 1).padStart(2, '0')}</span>{person}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Training programmes" title="Focused sessions for practical skills" intro="Each programme can be delivered as a distinct session or combined into a wider learning plan based on your team’s requirements." />
          <div className="frontline-programmes">{programmes.map((programme) => <Reveal as="article" className="frontline-programme" key={programme.number}><span>{programme.number}</span><h3>{programme.title}</h3><p>{programme.text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Training by industry" title="Examples grounded in your workplace" />
          <div className="frontline-industries">{industries.map((industry) => <Reveal as="article" className="frontline-industry" key={industry.name}><img src={industry.image.src} alt={industry.image.alt} loading="lazy"/><div><h3>{industry.name}</h3><ul>{industry.items.map((item) => <li key={item}>{item}</li>)}</ul></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our training approach" title="Learn it, practise it, use it at work" intro="Sessions are interactive and shaped around the situations employees actually face. Training is delivered in a language your team is comfortable using." />
          <ol className="frontline-approach">{approach.map((item, index) => <li key={item}><span>{index + 1}</span><strong>{item}</strong><p>{['Activities make key ideas easy to explore.', 'Role plays and situational learning mirror real workplace moments.', 'Group participation and practical exercises build confidence.', 'Teams take clear actions back into their daily work.'][index]}</p></li>)}</ol>
        </div>
      </section>

      <CTASection title="Let’s Build a Stronger Frontline Team" text="HR managers, Operations managers and business owners can talk with us about the skills their teams need on the job." primary={{ to: '/contact?enquiry=proposal', label: 'Enquire about frontline training' }} />
    </>
  );
}
