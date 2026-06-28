import Link from 'next/link';
import styles from './rulesPage.module.css';

export default function RulesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/frontend/main_page" className={styles.backButton}>
          ← Назад
        </Link>
        <h1 className={styles.title}>Правила сервиса</h1>
        <div className={styles.rulesContent}>
          <p>Здесь будут описаны правила сервиса.</p>
        </div>
      </div>
    </div>
  );
}