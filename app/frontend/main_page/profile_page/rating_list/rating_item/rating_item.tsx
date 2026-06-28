import styles from './rating_item.module.css';

interface RatingItemProps {
  place: number;
  name: string;
  level: number;
  xp: number;
  isCurrentUser: boolean;
}

export default function RatingItem({ place, name, level, xp, isCurrentUser }: RatingItemProps) {
  return (
    <div className={`${styles.ratingItem} ${isCurrentUser ? styles.currentUser : ''}`}>
      <span className={styles.place}>{place}</span>
      <div className={styles.playerInfo}>
        <span className={styles.playerName}>{name}</span>
        <span className={styles.playerLevel}>Ур. {level}</span>
      </div>
      <span className={styles.playerXp}>{xp} XP</span>
    </div>
  );
}