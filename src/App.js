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
              Manage, safeguard, and update the most important information at
              your fingertips.
            </h2>
            <p>
              Your family's future is too important be left to some stale piece
              of paper hidden in some box along with winter clothing.
            </p>
          </div>
          <br />
          <span className="Spanoptions">
            Manage all assets and liabilities at your fingertips Link your bank
            accounts, brokerage accounts and loans, add physical assets such as
            jewelery, land etc, and manage how they should get split up.
          </span>
          <br />
          <span className="Spanoptions">
            Leave your loved ones in safe hands Assign legal guardianship for
            your kids. Leave personal notes, images and videos for your loved
            ones as part of your will.
          </span>
          <br />
          <span className="Spanoptions">
            Keep your beneficiaries in the know. Catalog and add physical
            assets, add details including notes, photos, deeds and certificates.
          </span>
        </section>
      </main>

      <footer>my footer</footer>
    </>
  );
}
