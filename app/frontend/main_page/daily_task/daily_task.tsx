'use client';

import { useState } from 'react';
import TaskCard from '../task_card/task_card';
import styles from './daily_task.module.css';

export default function DailyTask() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleCheck = () => {
    console.log('Проверка задания дня');
  };

  const handleVote = () => {
    console.log('Голосование за задание недели');
  };

  return (
    <>
      <div className={styles.dailyTaskCard} onClick={handleOpenCard}>
        <div className={styles.taskHeader}>
          <div className={styles.taskIcon}></div>
          <span className={styles.taskBadge}>Задание дня</span>
        </div>
        <h2 className={styles.taskTitle}>Завершить проект</h2>
        <p className={styles.taskDescription}>
          Завершите текущий проект до конца дня, чтобы получить бонусные очки и повысить свой уровень.
        </p>
        <button
          type="button"
          className={styles.taskButton}
          onClick={(e) => {
            e.stopPropagation();
            handleOpenCard();
          }}
        >
          Открыть задание →
        </button>
      </div>

      {isCardOpen && (
        <TaskCard
          title="Завершить проект"
          difficulty="hard"
          description="Завершите текущий проект до конца дня, чтобы получить бонусные очки и повысить свой уровень. Это задание недели, поэтому после выполнения нужно будет проголосовать за лучший ответ."
          reward="+500 XP + достижение «Проектмейстер»"
          requiresProof={true}
          note="Проект должен быть завершен полностью, включая тестирование и документацию."
          isWeekly={true}
          onClose={handleCloseCard}
          onCheck={handleCheck}
          onVote={handleVote}
        />
      )}
    </>
  );
}