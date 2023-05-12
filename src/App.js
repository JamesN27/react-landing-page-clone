// https://www.afterlifeco.in/

import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <a href="/a"> Afterlife</a>
        </h1>
      </header>
      <main>
        <section className={styles.Topsection}>
          <div className={styles['top-div']}>
            <h1>
              Write, draft, and store your will <br /> in 10 minutes!
            </h1>
            <p>
              Establish a will today on any device and safeguard your life's
              work in <br />
              case of the unthinkable.
            </p>
            <form className={styles['email-input-container']}>
              <input type="email" placeholder="Email" />
              <button type className={styles['submit-button']}>
                GET ACCESS
              </button>
              <h6>Limited spots available for early access.</h6>
            </form>
          </div>
        </section>
        <section className={styles.Middlesection}>
          <div>
            <h2>
              Manage, safeguard, and update the most important <br />
              information at your fingertips.
            </h2>
            <p>
              Your family's future is too important be left to some stale piece
              of paper hidden in some <br /> box along with winter clothing.
            </p>
          </div>
          <br />
          <span className={styles.Spanoptions}>
            <h3>Manage all assets and liabilities at your fingertips </h3>
            <p>
              Link your bank accounts, brokerage accounts and loans, add
              physical <br /> assets such as jewelery, land etc, and manage how
              they should get split <br /> up.
            </p>
          </span>
          <br />
          <span className={styles.Spanoptions}>
            <h3>Leave your loved ones in safe hands </h3>
            <p>
              Assign legal guardianship for your kids. Leave personal notes,
              images and <br /> videos for your loved ones as part of your will.
            </p>
          </span>
          <br />
          <span className={styles.Spanoptions}>
            <h3>Keep your beneficiaries in the know</h3>{' '}
            <p>
              Catalog and add physical assets, add details including notes,
              photos,
              <br /> deeds and certificates.
            </p>
          </span>
        </section>
        <section className={styles.Downsection}>
          <h2>
            Wills are meant for <span className={styles.Italic}>everyone.</span>
          </h2>
          <p>
            Afterlife allows all Indians to secure their family's future without
            the need of expensive lawyers.
          </p>
          <ul>list items</ul>
        </section>
      </main>

      <footer className={styles.Footer}>
        <p>
          © Copyright 2023. All rights reserved. <br /> Made with ♥ in Delhi,
          India.
        </p>
        <form className={styles['email-input-container-2']}>
          <input type="email" placeholder="Email" />
          <button type className={styles['submit-button-2']}>
            GET ACCESS
          </button>{' '}
        </form>
      </footer>
    </>
  );
}
