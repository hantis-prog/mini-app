import PastTask from '../past_task/past_task';
import styles from './past_tasks_list.module.css';

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

export default function PastTasksList() {
  if (PAST_TASKS.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}>📭</span>
        <p className={styles.emptyText}>Здесь пока пусто</p>
      </div>
    );
  }

  return (
    <div className={styles.pastTasksContainer}>
      {PAST_TASKS.map((task) => (
        <PastTask
          key={task.id}
          title={task.title}
          date={task.date}
          status={task.status}
        />
      ))}
    </div>
  );
}