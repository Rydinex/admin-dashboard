import Link from "next/link";
import { prdPhaseOneGroups, prdPhaseOneHeadline } from "../lib/prdPhaseOne";
import styles from "./page.module.css";

export default function PrdExplorerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <header className={styles.hero}>
          <div className={styles.topBar}>
            <Link href="/" className={styles.backLink}>
              Back to Desktop Home
            </Link>
            <Link href="/connect" className={styles.backLink}>
              Connectivity Center
            </Link>
            <Link href="/admin" className={styles.backLink}>
              Admin Console
            </Link>
          </div>
          <p className={styles.eyebrow}>PRD Explorer</p>
          <h1>Track what from the PRD is already bridged into the live apps.</h1>
          <p className={styles.copy}>{prdPhaseOneHeadline}</p>
        </header>

        <section className={styles.grid}>
          {prdPhaseOneGroups.map(group => (
            <article key={group.app} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <p className={styles.appTag}>{group.app}</p>
                  <h2>{group.title}</h2>
                </div>
                <Link href={group.currentRoute} className={styles.routeLink}>
                  Open {group.currentRoute}
                </Link>
              </div>

              <p className={styles.summary}>{group.summary}</p>
              <p className={styles.meta}>Primary launch target: {group.deepLink}</p>

              <ul className={styles.screenList}>
                {group.screens.map(screen => (
                  <li key={`${group.app}-${screen.path}`} className={styles.screenRow}>
                    <div>
                      <strong>{screen.name}</strong>
                      <span>{screen.path}</span>
                    </div>
                    <em className={screen.status === "phase-1" ? styles.phaseOne : styles.planned}>
                      {screen.status === "phase-1" ? "Phase 1" : "Planned"}
                    </em>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}