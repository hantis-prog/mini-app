// Импортируем стили компонента
import styles from './profile_display.module.css';

/**
 * Интерфейс пропсов для отображения профиля.
 * nickname — никнейм пользователя.
 * tags — массив тегов пользователя.
 */
interface ProfileDisplayProps {
  nickname: string;
  tags: string[];
}

/**
 * Компонент отображения профиля.
 * Содержит иконку-аватар, никнейм и теги.
 */
export default function ProfileDisplay({ nickname, tags }: ProfileDisplayProps) {
  return (
    <div className={styles.profileContainer}>
      {/* Аватар пользователя */}
      <div className={styles.avatar}>
        <div className={styles.avatarPlaceholder}>👤</div>
      </div>
      {/* Информация о пользователе */}
      <div className={styles.profileInfo}>
        <span className={styles.nickname}>{nickname}</span>
        {/* Список тегов */}
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}