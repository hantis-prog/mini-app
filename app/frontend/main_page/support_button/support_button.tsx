import Link from 'next/link';
import styles from './support_button.module.css';

export default function SupportButton() {
  return (
    <Link href="/frontend/support_page" className={styles.supportButton} aria-label="Поддержка">
      <span className={styles.supportIcon}>💬</span>
    </Link>
  );
}