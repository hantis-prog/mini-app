'use client';

import { useState } from 'react';
import StatusBar from './status_bar/status_bar';
import NavigationBar from './navigation_bar/navigation_bar';
import DailyTask from './daily_task/daily_task';
import PersonalTask from './personal_task/personal_task';
import SettingsButton from './settings_button/settings_button';
import TasksPage from './tasks_page/tasks_page';
import AchievementsPage from './achievements_page/achievements_page';
import styles from './mainPage.module.css';

const PERSONAL_TASKS = [
  { id: 1, title: 'Прочитать 10 страниц', difficulty: 'Легкое' },
  { id: 2, title: 'Сделать зарядку', difficulty: 'Легкое' },
  { id: 3, title: 'Выучить 5 новых слов', difficulty: 'Среднее' },
  { id: 4, title: 'Написать код 30 минут', difficulty: 'Среднее' },
  { id: 5, title: 'Пробежать 3 км', difficulty: 'Сложное' },
];

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('главная');

  return (
    <div className={styles.mainContainer}>
      <StatusBar />

      <div className={styles.contentArea}>
        {activeTab === 'главная' && (
          <div className={styles.tasksRow}>
            <div className={styles.dailyTaskBlock}>
              <DailyTask />
            </div>
            <div className={styles.personalTasksBlock}>
              <h2 className={styles.sectionTitle}>Ежедневные задания</h2>
              <div className={styles.tasksList}>
                {PERSONAL_TASKS.map((task) => (
                  <PersonalTask
                    key={task.id}
                    title={task.title}
                    difficulty={task.difficulty}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'задания' && <TasksPage />}
        {activeTab === 'достижения' && <AchievementsPage />}
      </div>

      <SettingsButton />
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}