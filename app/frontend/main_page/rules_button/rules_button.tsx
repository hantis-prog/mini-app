import Link from 'next/link';
import styles from './rules_button.module.css';

export default function RulesButton() {
  return (
    <Link href="/frontend/rules_page" className={styles.rulesButton} aria-label="Правила">
      <span className={styles.rulesIcon}>📋</span>
    </Link>
  );
}