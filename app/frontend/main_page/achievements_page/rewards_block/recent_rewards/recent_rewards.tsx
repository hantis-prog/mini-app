import RewardItem from '../reward_item/reward_item';
import styles from './recent_rewards.module.css';

// Все награды (скроллятся горизонтально)
const ALL_REWARDS = [
  { id: 1, name: 'Первый шаг', icon: '', playersPercent: 45.2 },
  { id: 2, name: 'Мастер кода', icon: '🎖️', playersPercent: 12.8 },
  { id: 3, name: 'Книжный червь', icon: '📚', playersPercent: 23.5 },
  { id: 4, name: 'Спортсмен', icon: '🏅', playersPercent: 18.9 },
  { id: 5, name: 'Полиглот', icon: '🌍', playersPercent: 8.3 },
  { id: 6, name: 'Творец', icon: '🎨', playersPercent: 15.7 },
  { id: 7, name: 'Лидер', icon: '👑', playersPercent: 5.2 },
  { id: 8, name: 'Филантроп', icon: '💝', playersPercent: 11.4 },
];

export default function RecentRewards() {
  if (ALL_REWARDS.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>Наград пока нет</p>
      </div>
    );
  }

  return (
    <div className={styles.recentRewards}>
      {ALL_REWARDS.map((reward) => (
        <RewardItem
          key={reward.id}
          name={reward.name}
          icon={reward.icon}
          playersPercent={reward.playersPercent}
        />
      ))}
    </div>
  );
}