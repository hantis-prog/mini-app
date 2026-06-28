import CurrentTask from './current_task/current_task';
import PersonalTaskWithStatus from './personal_task_with_status/personal_task_with_status';
import PastTasksList from './past_tasks_list/past_tasks_list';
import styles from './tasks_page.module.css';

const CURRENT_PERSONAL_TASKS = [
  { id: 1, title: 'Прочитать 10 страниц', difficulty: 'Легкое', status: 'выполнено' as const },
  { id: 2, title: 'Сделать зарядку', difficulty: 'Легкое', status: 'выполнено' as const },
  { id: 3, title: 'Выучить 5 новых слов', difficulty: 'Среднее', status: 'на проверке' as const },
  { id: 4, title: 'Написать код 30 минут', difficulty: 'Среднее', status: 'не выполнено' as const },
  { id: 5, title: 'Пробежать 3 км', difficulty: 'Сложное', status: 'не выполнено' as const },
];

export default function TasksPage() {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.currentTasksBlock}>
        <h2 className={styles.sectionTitle}>Текущие задания</h2>
        
        <CurrentTask
          title="Завершить проект"
          description="Завершите текущий проект до конца дня"
          status="на проверке"
        />

        <div className={styles.personalTasksList}>
          {CURRENT_PERSONAL_TASKS.map((task) => (
            <PersonalTaskWithStatus
              key={task.id}
              title={task.title}
              difficulty={task.difficulty}
              status={task.status}
            />
          ))}
        </div>
      </div>

      <div className={styles.pastTasksBlock}>
        <h2 className={styles.sectionTitle}>Прошедшие задания</h2>
        <PastTasksList />
      </div>
    </div>
  );
}