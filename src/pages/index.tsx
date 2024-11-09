import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Filen User Docs
        </Heading>
        <p className="hero__subtitle">
          Get everything out of our Web App, Desktop App, Mobile App and CLI.
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.buttonComingSoon}`}>
            Web App Docs
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.buttonComingSoon}`}>
            Desktop App Docs
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.buttonComingSoon}`}>
            Mobile App Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/cli">
            CLI Docs
          </Link>
        </div>
      </div>
      <div className="container" style={{padding: 60}}>
        <div style={{display: "inline-block", width: 400, borderBottom: "1px solid #525252"}}></div>
      </div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Filen Developer Docs
        </Heading>
        <p className="hero__subtitle">
          Build your own apps and integrations on top of Filen with our API and SDK.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sdk">
            SDK Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api">
            API Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={"Home"}>
      <main>
        <HomepageHeader/>
      </main>
    </Layout>
  );
}
