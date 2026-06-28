import Link from 'next/link';
import styles from './supportPage.module.css';

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/frontend/main_page" className={styles.backButton}>
          ← Назад
        </Link>
        <h1 className={styles.title}>Поддержка</h1>
        <div className={styles.supportContent}>
          <p>Если у вас возникли вопросы или проблемы, свяжитесь с нами:</p>
          <div className={styles.contactInfo}>
            <p>📧 Email: support@lifequest.ru</p>
            <p>💬 Telegram: @lifequest_support</p>
          </div>
        </div>
      </div>
    </div>
  );
}