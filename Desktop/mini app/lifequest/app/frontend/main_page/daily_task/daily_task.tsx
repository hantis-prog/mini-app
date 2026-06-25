// Импортируем стили компонента
import styles from './daily_task.module.css';

/**
 * Компонент задания дня.
 * Содержит иконку, бейдж "Задание дня", название, описание и кнопку.
 */
export default function DailyTask() {
  return (
    <div className={styles.dailyTaskCard}>
      {/* Шапка задания: иконка и бейдж */}
      <div className={styles.taskHeader}>
        <div className={styles.taskIcon}></div>
        <span className={styles.taskBadge}>Задание дня</span>
      </div>
      {/* Название задания */}
      <h2 className={styles.taskTitle}>Завершить проект</h2>
      {/* Описание задания мелким текстом */}
      <p className={styles.taskDescription}>
        Завершите текущий проект до конца дня, чтобы получить бонусные очки и повысить свой уровень.
      </p>
      {/* Кнопка открытия задания (пока не работает) */}
      <button type="button" className={styles.taskButton}>
        Открыть задание →
      </button>
    </div>
  );
}