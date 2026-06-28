'use client';

import { useState } from 'react';
import TaskCard from '../task_card/task_card';
import styles from './personal_task.module.css';

interface PersonalTaskProps {
  title: string;
  difficulty: string;
}

export default function PersonalTask({ title, difficulty }: PersonalTaskProps) {
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

  return (
    <>
      <div className={styles.taskCard} onClick={handleOpenCard}>
        <div className={styles.taskContent}>
          <div className={styles.taskCheckbox} />
          <div className={styles.taskInfo}>
            <span className={styles.taskTitle}>{title}</span>
            <span className={styles.taskDifficulty}>{difficulty}</span>
          </div>
        </div>
      </div>

      {isCardOpen && (
        <TaskCard
          title={title}
          difficulty={getDifficultyKey(difficulty)}
          description={`Выполните задание: ${title}. Это поможет вам развить навыки и получить опыт.`}
          reward="+50 XP"
          requiresProof={false}
          isWeekly={false}
          onClose={handleCloseCard}
          onCheck={handleCheck}
        />
      )}
    </>
  );
}