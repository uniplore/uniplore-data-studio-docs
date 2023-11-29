import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SystemFeatures from '@site/src/components/SystemFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const Svg = require('@site/static/img/logo.svg').default;
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    // <header className={clsx('hero', styles.heroBanner)} style={{ marginBottom: '50px' }}>
    <header className={clsx(styles.heroBanner)} style={{ marginBottom: '50px' }}>
      <div className="container">
        <div className={styles.logoWrapper}>
          <Svg className={styles.logo} role="img" />
          <h1 className={`hero__title`}>
            <Translate
              id='homepage.doc.title'>
                {siteConfig.title}
              </Translate>
          </h1>
        </div>
        <p className={styles.description}>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SystemFeatures />
      </main>
    </Layout>
  );
}
