import { useRouter } from 'next/navigation';
import styles from './status_button.module.css';

export default function StatusButton() {
  const router = useRouter();

  const handleClick = () => {
    // Переход в магазин
    // router.push('/shop');
    console.log('Переход в магазин');
  };

  return (
    <button type="button" className={styles.statusButton} onClick={handleClick}>
      <span className={styles.statusIcon}>⭐</span>
      <span className={styles.statusText}>Обычный</span>
      <span className={styles.statusArrow}>→</span>
    </button>
  );
}