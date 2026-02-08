import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

// --- MANUAL HISTORY LOG ---
const History = [
  {
    date: 'NOV 28, 2025', 
    title: 'Genesis: Server 1981',
    description: 'The Server Launch. The founding of HOTP. We were young, reckless, and unrefined. There was no "Doctrine," only the raw will to survive the chaos.',
    link: '#', 
  },
  {
    date: 'JAN 29, 2026',
    title: 'The Rebirth: Royal Rage',
    description: 'The day HOTP died. We purged the toxic, rebranded to "Royal Rage" (royl), and instituted the Doctrine. We stopped playing like casuals and started operating like a syndicate. The "Adults in the Room" era begins.',
    link: '#', 
  },
];

function TimelineEvent({date, title, description, link}) {
  return (
    <div className={styles.timelineItem}>
      {/* The clickable card */}
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className={styles.eventCard}>
          <div className={styles.date}>{date}</div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {History.map((props, idx) => (
        <TimelineEvent key={idx} {...props} />
      ))}
    </div>
  );
}