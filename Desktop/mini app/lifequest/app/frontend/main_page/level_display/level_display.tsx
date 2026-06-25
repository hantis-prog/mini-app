// Импортируем стили компонента
import styles from './level_display.module.css';

/**
 * Интерфейс пропсов для отображения уровня.
 * level — текущий уровень пользователя.
 */
interface LevelDisplayProps {
  level: number;
}

/**
 * Компонент отображения уровня.
 * Показывает бейдж с надписью "LVL" и номером уровня.
 */
export default function LevelDisplay({ level }: LevelDisplayProps) {
  return (
    <div className={styles.levelBadge}>
      <span className={styles.levelLabel}>LVL</span>
      <span className={styles.levelNumber}>{level}</span>
    </div>
  );
}