import Link from 'next/link';
import styles from './about_button.module.css';

export default function AboutButton() {
  return (
    <Link href="/frontend/developer_page" className={styles.aboutButton} aria-label="О разработчике">
      <span className={styles.aboutText}>О разработчике</span>
    </Link>
  );
}