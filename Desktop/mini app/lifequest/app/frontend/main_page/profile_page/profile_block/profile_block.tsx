import ProfileInfo from './profile_info/profile_info';
import PasswordField from './password_field/password_field';
import StatusButton from './status_button/status_button';
import styles from './profile_block.module.css';

export default function ProfileBlock() {
  return (
    <div className={styles.profileBlock}>
      {/* Шапка профиля */}
      <div className={styles.profileHeader}>
        <div className={styles.avatar}>👤</div>
        <div className={styles.profileInfo}>
          <h2 className={styles.username}>PlayerOne</h2>
          <div className={styles.tags}>
            <span className={styles.tag}>Программист</span>
            <span className={styles.tag}>Геймер</span>
          </div>
        </div>
      </div>

      {/* Кнопка статуса */}
      <StatusButton />

      {/* Информация о профиле */}
      <div className={styles.profileDetails}>
        <ProfileInfo label="Email" value="player@example.com" />
        <PasswordField />
        <ProfileInfo label="Двухфакторная аутентификация" value="Включена" isToggle />
        <ProfileInfo label="Последний вход" value="15 янв 2024, 14:32" />
      </div>
    </div>
  );
}