'use client';

import { useState } from 'react';
import TaskCard from '../task_card/task_card';
import styles from './personal_task_with_status.module.css';

interface PersonalTaskWithStatusProps {
  title: string;
  difficulty: string;
  status: 'не выполнено' | 'на проверке' | 'выполнено';
}

const DIFFICULTY_COLORS: Record<string, string> = {
  'Легкое': '#00b894',
  'Среднее': '#fdcb6e',
  'Сложное': '#e17055',
};

const STATUS_COLORS: Record<string, string> = {
  'не выполнено': '#e17055',
  'на проверке': '#fdcb6e',
  'выполнено': '#00b894',
};

const STATUS_ICONS: Record<string, string> = {
  'не выполнено': '○',
  'на проверке': '◐',
  'выполнено': '✓',
};

export default function PersonalTaskWithStatus({
  title,
  difficulty,
  status,
}: PersonalTaskWithStatusProps) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleCheck = () => {
    console.log('Проверка задания:', title);
  };

  const getDifficultyKey = (diff: string): 'easy' | 'medium' | 'hard' => {
    if (diff === 'Легкое') return 'easy';
    if (diff === 'Среднее') return 'medium';
    return 'hard';
  };

  const difficultyColor = DIFFICULTY_COLORS[difficulty] || '#6c5ce7';
  const statusColor = STATUS_COLORS[status] || '#888';
  const statusIcon = STATUS_ICONS[status] || '○';

  return (
    <>
      <div className={styles.taskCard} onClick={handleOpenCard}>
        <div className={styles.taskContent}>
          <div className={styles.taskCheckbox} style={{ borderColor: statusColor }}>
            <span className={styles.checkboxIcon} style={{ color: statusColor }}>
              {statusIcon}
            </span>
          </div>

          <div className={styles.taskInfo}>
            <span className={styles.taskTitle}>{title}</span>
            <span className={styles.taskDifficulty} style={{ color: difficultyColor }}>
              {difficulty}
            </span>
          </div>
        </div>
      </div>

      {isCardOpen && (
        <TaskCard
          title={title}
          difficulty={getDifficultyKey(difficulty)}
          description={`Выполните задание: ${title}. Текущий статус: ${status}.`}
          reward="+50 XP"
          requiresProof={status === 'не выполнено'}
          isWeekly={false}
          onClose={handleCloseCard}
          onCheck={handleCheck}
        />
      )}
    </>
  );
}