import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Add this import at the very top
import Link from '@docusaurus/Link'; 

const FeatureList = [
  {
    title: 'Lethal Efficiency',
    icon: '⚔️',
    // Directs recruits to your Operating Protocols
    link: '/docs/protocols', 
    description: (
      <>
        We prioritize organization over raw spending. We beat opponents with 
        30% more power because we work harder and smarter.
      </>
    ),
  },
  {
    title: 'Zero Toxicity',
    icon: '🤐',
    // Directs recruits to your Doctrine/Rules
    link: '/docs/doctrine',
    description: (
      <>
        We are the adults in the room. We do not engage in world chat drama. 
        We play with class, discipline, and absolute focus.
      </>
    ),
  },
  {
    title: 'Data Driven',
    icon: '📊',
    // Directs recruits to your Infrastructure/Math
    link: '/docs/infrastructure',
    description: (
      <>
        We don't guess. We know the math. From 1.3 Morale multipliers to 
        frame-perfect Puff timing, we win because we know the code.
      </>
    ),
  },
];

function Feature({icon, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* We wrap the battleCard in a Link. 
         If a link exists, it becomes an anchor. 
         style={{ textDecoration: 'none' }} removes the ugly blue underline.
      */}
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className={styles.battleCard}>
          <div className="text--center">
            <span className={styles.featureIcon}>{icon}</span>
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
            <p className={styles.featureText}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* 'row' class handles the grid alignment automatically */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}