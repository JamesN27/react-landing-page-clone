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
        <section className="Topsection">
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
      </main>

      <footer>my footer</footer>
    </>
  );
}
