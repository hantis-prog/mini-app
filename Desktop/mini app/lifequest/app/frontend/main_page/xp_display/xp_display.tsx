// Импортируем стили компонента
import styles from './xp_display.module.css';

/**
 * Интерфейс пропсов для XP-дисплея.
 * xp — текущее количество очков опыта.
 * maxXp — максимальное количество очков до следующего уровня.
 */
interface XPDisplayProps {
  xp: number;
  maxXp: number;
}

/**
 * Компонент отображения XP.
 * Показывает текстовое значение и прогресс-бар.
 */
export default function XPDisplay({ xp, maxXp }: XPDisplayProps) {
  // Вычисляем процент заполнения прогресс-бара
  const percentage = (xp / maxXp) * 100;

  return (
    <div className={styles.xpContainer}>
      {/* Текстовая метка с иконкой и значением XP */}
      <div className={styles.xpLabel}>
        <span className={styles.xpIcon}>⚡</span>
        <span className={styles.xpText}>{xp}/{maxXp} XP</span>
      </div>
      {/* Прогресс-бар XP */}
      <div className={styles.xpBar}>
        {/* Заполненная часть прогресс-бара */}
        <div
          className={styles.xpFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}