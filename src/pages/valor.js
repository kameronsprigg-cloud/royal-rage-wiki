import React from 'react';
import Layout from '@theme/Layout';
import Timeline from '@site/src/components/Timeline';
import clsx from 'clsx';

export default function HallOfValor() {
  return (
    <Layout title="Hall of Valor" description="The History of Royal Rage">
      <div className="container margin-vert--lg">
        <div className="row">
          
          {/* LEFT COLUMN: The Description (30% width) */}
          <div className={clsx('col col--4')}>
            <div style={{position: 'sticky', top: '100px'}}>
              <h1 style={{color: '#FFD700', fontSize: '3rem', textTransform: 'uppercase'}}>
                Hall of Valor
              </h1>
              <p style={{fontSize: '1.2rem', lineHeight: '1.6'}}>
                This is our history. Written not in ink, but in victory reports and server dominance.
              </p>
              <p>
                Every card represents a turning point where discipline beat spending. Click an event to read the after-action report.
              </p>
              <hr style={{borderColor: '#ff69b4', margin: '2rem 0'}}/>
              <div style={{fontStyle: 'italic', color: '#888'}}>
                "History is written by the victors. <br/>That is why we write so much."
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Timeline (60% width + offset) */}
          <div className={clsx('col col--7 col--offset-1')}>
            <Timeline />
          </div>

        </div>
      </div>
    </Layout>
  );
}