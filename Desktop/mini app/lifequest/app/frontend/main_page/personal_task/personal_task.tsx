// Импортируем стили компонента
import styles from './personal_task.module.css';

/**
 * Интерфейс пропсов для персонального задания.
 * title — название задания.
 * difficulty — уровень сложности.
 */
interface PersonalTaskProps {
  title: string;
  difficulty: string;
}

/**
 * Словарь цветов для уровней сложности.
 * Каждому уровню соответствует свой цвет.
 */
const DIFFICULTY_COLORS: Record<string, string> = {
  'Легкое': '#00b894',
  'Среднее': '#fdcb6e',
  'Сложное': '#e17055',
};

/**
 * Компонент одного персонального задания.
 * Отображает чекбокс, название и бейдж сложности.
 */
export default function PersonalTask({ title, difficulty }: PersonalTaskProps) {
  // Получаем цвет для текущего уровня сложности
  const color = DIFFICULTY_COLORS[difficulty] || '#6c5ce7';

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskContent}>
        {/* Чекбокс задания */}
        <div className={styles.taskCheckbox} />
        {/* Информация о задании */}
        <div className={styles.taskInfo}>
          <span className={styles.taskTitle}>{title}</span>
          {/* Бейдж сложности с динамическим цветом */}
          <span className={styles.taskDifficulty} style={{ color }}>
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}