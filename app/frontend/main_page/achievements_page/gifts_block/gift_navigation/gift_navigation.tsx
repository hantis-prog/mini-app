import styles from './gift_navigation.module.css';

interface GiftNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export default function GiftNavigation({
  onPrevious,
  onNext,
  currentIndex,
  total,
}: GiftNavigationProps) {
  return (
    <div className={styles.navigation}>
      <button
        type="button"
        className={styles.navButton}
        onClick={onPrevious}
        aria-label="Предыдущий подарок"
      >
        ↑
      </button>
      <span className={styles.counter}>
        {currentIndex + 1}/{total}
      </span>
      <button
        type="button"
        className={styles.navButton}
        onClick={onNext}
        aria-label="Следующий подарок"
      >
        ↓
      </button>
    </div>
  );
}