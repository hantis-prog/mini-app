// Импортируем стили компонента
import styles from './balance_display.module.css';

/**
 * Интерфейс пропсов для отображения баланса.
 * balance — текущий баланс пользователя.
 */
interface BalanceDisplayProps {
  balance: number;
}

/**
 * Компонент отображения баланса.
 * Показывает иконку монеты и числовое значение.
 */
export default function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return (
    <div className={styles.balanceContainer}>
      <span className={styles.balanceIcon}>💰</span>
      <span className={styles.balanceAmount}>{balance}</span>
    </div>
  );
}