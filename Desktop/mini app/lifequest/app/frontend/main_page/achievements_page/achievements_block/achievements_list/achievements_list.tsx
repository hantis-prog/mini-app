import AchievementItem from '../achievement_item/achievement_item';
import styles from './achievements_list.module.css';

// Все достижения в игре
const ACHIEVEMENTS = [
  {
    id: 1,
    name: 'Первые шаги',
    description: 'Выполните первое задание',
    playersPercent: 78.5,
    unlocked: true,
  },
  {
    id: 2,
    name: 'Неделя активности',
    description: 'Выполняйте задания 7 дней подряд',
    playersPercent: 34.2,
    unlocked: true,
  },
  {
    id: 3,
    name: 'Мастер кода',
    description: 'Напишите 1000 строк кода',
    playersPercent: 12.8,
    unlocked: true,
  },
  {
    id: 4,
    name: 'Книжный червь',
    description: 'Прочитайте 50 книг',
    playersPercent: 23.5,
    unlocked: false,
  },
  {
    id: 5,
    name: 'Марафонец',
    description: 'Пробегите 100 км',
    playersPercent: 8.9,
    unlocked: false,
  },
  {
    id: 6,
    name: 'Полиглот',
    description: 'Выучите 1000 иностранных слов',
    playersPercent: 5.3,
    unlocked: false,
  },
  {
    id: 7,
    name: 'Творец',
    description: 'Создайте 10 проектов',
    playersPercent: 15.7,
    unlocked: false,
  },
  {
    id: 8,
    name: 'Легенда',
    description: 'Достигните 100 уровня',
    playersPercent: 0.7,
    unlocked: false,
  },
  {
    id: 9,
    name: 'Филантроп',
    description: 'Помогите 100 другим игрокам',
    playersPercent: 11.4,
    unlocked: false,
  },
  {
    id: 10,
    name: 'Перфекционист',
    description: 'Выполните все задания с оценкой "отлично"',
    playersPercent: 3.2,
    unlocked: false,
  },
];

export default function AchievementsList() {
  return (
    <div className={styles.achievementsContainer}>
      {ACHIEVEMENTS.map((achievement) => (
        <AchievementItem
          key={achievement.id}
          name={achievement.name}
          description={achievement.description}
          playersPercent={achievement.playersPercent}
          unlocked={achievement.unlocked}
        />
      ))}
    </div>
  );
}