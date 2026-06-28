import RatingItem from './rating_item/rating_item';
import { RATING_PLAYERS } from './rating_list_data';
import styles from './rating_list.module.css';

export default function RatingList() {
  return (
    <div className={styles.ratingBlock}>
      <h3 className={styles.ratingTitle}>Рейтинг</h3>
      <div className={styles.ratingContainer}>
        {RATING_PLAYERS.map((player) => (
          <RatingItem
            key={player.id}
            place={player.place}
            name={player.name}
            level={player.level}
            xp={player.xp}
            isCurrentUser={player.isCurrentUser}
          />
        ))}
      </div>
    </div>
  );
}