'use client';

import { useState } from 'react';
import TaskCard from '../task_card/task_card';
import styles from './tasks_page.module.css';

// Задание дня
const WEEKLY_TASK = {
  title: 'Завершить проект',
  description: 'Завершите текущий проект до конца дня',
  status: 'на проверке',
};

// Текущие задания
const CURRENT_TASKS = [
  { id: 1, title: 'Прочитать 10 страниц', difficulty: 'Легкое', status: 'выполнено' as const },
  { id: 2, title: 'Сделать зарядку', difficulty: 'Легкое', status: 'выполнено' as const },
  { id: 3, title: 'Выучить 5 новых слов', difficulty: 'Среднее', status: 'на проверке' as const },
  { id: 4, title: 'Написать код 30 минут', difficulty: 'Среднее', status: 'не выполнено' as const },
  { id: 5, title: 'Пробежать 3 км', difficulty: 'Сложное', status: 'не выполнено' as const },
];

// Прошедшие задания
const PAST_TASKS = [
  { id: 1, title: 'Прочитать главу книги', date: '15 янв', status: 'выполнено' as const },
  { id: 2, title: 'Сделать 50 отжиманий', date: '15 янв', status: 'выполнено' as const },
  { id: 3, title: 'Написать статью', date: '14 янв', status: 'не выполнено' as const },
  { id: 4, title: 'Выучить 10 слов', date: '14 янв', status: 'выполнено' as const },
  { id: 5, title: 'Пробежать 5 км', date: '13 янв', status: 'выполнено' as const },
  { id: 6, title: 'Посмотреть лекцию', date: '13 янв', status: 'не выполнено' as const },
  { id: 7, title: 'Сделать уборку', date: '12 янв', status: 'выполнено' as const },
  { id: 8, title: 'Написать код 1 час', date: '12 янв', status: 'выполнено' as const },
  { id: 9, title: 'Прочитать 20 страниц', date: '11 янв', status: 'выполнено' as const },
  { id: 10, title: 'Сделать зарядку', date: '11 янв', status: 'выполнено' as const },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  'Легкое': '#00b894',
  'Среднее': '#fdcb6e',
  'Сложное': '#e17055',
};

const STATUS_COLORS: Record<string, string> = {
  'выполнено': '#00b894',
  'не выполнено': '#e17055',
  'на проверке': '#fdcb6e',
};

const STATUS_ICONS: Record<string, string> = {
  'выполнено': '✓',
  'не выполнено': '✕',
  'на проверке': '◐',
};

export default function TasksPage() {
  const [openTask, setOpenTask] = useState<{
    title: string;
    difficulty: string;
    description: string;
    reward: string;
    requiresProof: boolean;
    note?: string;
    isWeekly: boolean;
  } | null>(null);

  const getDifficultyKey = (diff: string): 'easy' | 'medium' | 'hard' => {
    if (diff === 'Легкое') return 'easy';
    if (diff === 'Среднее') return 'medium';
    return 'hard';
  };

  return (
    <div className={styles.tasksContainer}>
      {/* Левая колонка: Текущие задания */}
      <div className={styles.leftColumn}>
        <h2 className={styles.sectionTitle}>Текущие задания</h2>

        {/* Большая карточка задания дня */}
        <div
          className={styles.weeklyTaskCard}
          onClick={() =>
            setOpenTask({
              title: WEEKLY_TASK.title,
              difficulty: 'Сложное',
              description: WEEKLY_TASK.description,
              reward: '+500 XP + достижение «Проектмейстер»',
              requiresProof: true,
              note: 'Проект должен быть завершен полностью, включая тестирование и документацию.',
              isWeekly: true,
            })
          }
        >
          <div className={styles.weeklyTaskHeader}>
            <span className={styles.weeklyBadge}>Задание дня</span>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} />
              {WEEKLY_TASK.status}
            </span>
          </div>
          <h3 className={styles.weeklyTaskTitle}>{WEEKLY_TASK.title}</h3>
          <p className={styles.weeklyTaskDescription}>{WEEKLY_TASK.description}</p>
        </div>

        {/* Список текущих заданий */}
        <div className={styles.currentTasksList}>
          {CURRENT_TASKS.map((task) => (
            <div
              key={task.id}
              className={styles.currentTaskItem}
              onClick={() =>
                setOpenTask({
                  title: task.title,
                  difficulty: task.difficulty,
                  description: `Выполните задание: ${task.title}`,
                  reward: '+50 XP',
                  requiresProof: task.status === 'не выполнено',
                  isWeekly: false,
                })
              }
            >
              <div
                className={styles.taskCheckbox}
                style={{ borderColor: STATUS_COLORS[task.status] }}
              >
                <span style={{ color: STATUS_COLORS[task.status], fontSize: '12px' }}>
                  {STATUS_ICONS[task.status]}
                </span>
              </div>
              <span className={styles.currentTaskTitle}>{task.title}</span>
              <span
                className={styles.difficultyBadge}
                style={{ color: DIFFICULTY_COLORS[task.difficulty] }}
              >
                {task.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Правая колонка: Прошедшие задания */}
      <div className={styles.rightColumn}>
        <h2 className={styles.sectionTitle}>Прошедшие задания</h2>
        <div className={styles.pastTasksList}>
          {PAST_TASKS.map((task) => (
            <div
              key={task.id}
              className={styles.pastTaskItem}
              onClick={() =>
                setOpenTask({
                  title: task.title,
                  difficulty: 'Легкое',
                  description: `Задание: ${task.title}`,
                  reward: '+50 XP',
                  requiresProof: false,
                  isWeekly: false,
                })
              }
            >
              <span
                className={styles.pastStatusIcon}
                style={{ color: STATUS_COLORS[task.status] }}
              >
                {STATUS_ICONS[task.status]}
              </span>
              <span className={styles.pastTaskTitle}>{task.title}</span>
              <span className={styles.pastTaskDate}>{task.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Карточка задания */}
      {openTask && (
        <TaskCard
          title={openTask.title}
          difficulty={getDifficultyKey(openTask.difficulty)}
          description={openTask.description}
          reward={openTask.reward}
          requiresProof={openTask.requiresProof}
          note={openTask.note}
          isWeekly={openTask.isWeekly}
          onClose={() => setOpenTask(null)}
          onCheck={() => console.log('Проверка задания:', openTask.title)}
          onVote={openTask.isWeekly ? () => console.log('Голосование') : undefined}
        />
      )}
    </div>
  );
}