import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// THE HERO HEADER
// Contains Title (Top), Spacer (Middle for Flag), Motto (Bottom)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        
        {/* 1. TOP: The Identity */}
        <h1 className={styles.heroTitle}>
          ROYAL RAGE
        </h1>

        {/* 2. MIDDLE: The Tactical Gap */}
        {/* This empty div pushes the Title up and Motto down, revealing the flag */}
        <div className={styles.flagSpacer}></div>

        {/* 3. BOTTOM: The Philosophy */}
        <div className={styles.mottoBox}>
          <p className={styles.mottoText}>
            "Smooth. Sophisticated. Deadly."
          </p>
        </div>

      </div>
    </header>
  );
}

// MAIN ASSEMBLY
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home Base"
      description="The Official Knowledge Base of Royal Rage">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}