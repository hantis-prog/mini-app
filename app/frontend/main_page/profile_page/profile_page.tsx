import ProfileBlock from './profile_block/profile_block';
import TagsBlock from './tags_block/tags_block';
import LevelBlock from './level_block/level_block';
import StreakBlock from './streak_block/streak_block';
import RatingList from './rating_list/rating_list';
import GoalBlock from './goal_block/goal_block';
import styles from './profile_page.module.css';

export default function ProfilePage() {
  return (
    <div className={styles.profileContainer}>
      {/* Левая половина */}
      <div className={styles.leftColumn}>
        <ProfileBlock />
        <TagsBlock />
      </div>

      {/* Правая половина */}
      <div className={styles.rightColumn}>
        <div className={styles.topRow}>
          <LevelBlock />
          <StreakBlock />
        </div>
        <RatingList />
        <GoalBlock />
      </div>
    </div>
  );
}