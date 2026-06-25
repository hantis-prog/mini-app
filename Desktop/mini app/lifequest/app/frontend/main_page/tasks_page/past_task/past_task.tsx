import styles from './past_task.module.css';

interface PastTaskProps {
  title: string;
  date: string;
  status: 'выполнено' | 'не выполнено';
}

const STATUS_COLORS = {
  'выполнено': '#00b894',
  'не выполнено': '#e17055',
};

const STATUS_ICONS = {
  'выполнено': '✓',
  'не выполнено': '✗',
};

export default function PastTask({ title, date, status }: PastTaskProps) {
  const color = STATUS_COLORS[status];
  const icon = STATUS_ICONS[status];

  return (
    <div className={styles.pastTaskCard}>
      <div className={styles.taskContent}>
        <div className={styles.statusIcon} style={{ color }}>
          {icon}
        </div>
        
        <div className={styles.taskInfo}>
          <span className={styles.taskTitle}>{title}</span>
          <span className={styles.taskDate}>{date}</span>
        </div>
      </div>
    </div>
  );
}