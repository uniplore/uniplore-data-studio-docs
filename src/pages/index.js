import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header className={clsx('hero', styles.heroBanner)} style={{ marginBottom: '50px' }}>
      <div className="container">
        <h1 className={`hero__title`}>
          <Translate
            id='homepage.doc.title'>
              {siteConfig.title}
            </Translate>
        </h1>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.btnColor}`}
            to="/docs/intro">
            <Translate
              id="homepage.visitTutorial.linkLabel">
              Quick Start Tutorial
            </Translate>
          </Link>
        </div> */}
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
      </main>
    </Layout>
  );
}
