import Link from 'next/link';
import styles from './developerPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/frontend/main_page" className={styles.backButton}>
          ← Назад
        </Link>
        <h1 className={styles.title}>Информация о разработчике</h1>
        <div className={styles.aboutContent}>
          <p>Здесь будет информация о разработчике.</p>
        </div>
      </div>
    </div>
  );
}