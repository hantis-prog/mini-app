import styles from './current_task.module.css';

interface CurrentTaskProps {
  title: string;
  description: string;
  status: 'не выполнено' | 'на проверке' | 'выполнено';
}

const STATUS_COLORS = {
  'не выполнено': '#e17055',
  'на проверке': '#fdcb6e',
  'выполнено': '#00b894',
};

const STATUS_ICONS = {
  'не выполнено': '○',
  'на проверке': '◐',
  'выполнено': '✓',
};

export default function CurrentTask({ title, description, status }: CurrentTaskProps) {
  const color = STATUS_COLORS[status];
  const icon = STATUS_ICONS[status];

  return (
    <div className={styles.currentTaskCard}>
      <div className={styles.taskHeader}>
        <span className={styles.taskBadge}>Задание дня</span>
        <div className={styles.statusBadge} style={{ backgroundColor: color }}>
          <span className={styles.statusIcon}>{icon}</span>
          <span className={styles.statusText}>{status}</span>
        </div>
      </div>
      <h3 className={styles.taskTitle}>{title}</h3>
      <p className={styles.taskDescription}>{description}</p>
    </div>
  );
}