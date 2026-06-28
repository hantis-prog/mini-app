// Импортируем стили компонента
import styles from './settings_button.module.css';

/**
 * Компонент кнопки настроек.
 * Расположен в левом нижнем углу страницы.
 */
export default function SettingsButton() {
  return (
    <button type="button" className={styles.settingsButton} aria-label="Настройки">
      <span className={styles.settingsIcon}>⚙️</span>
    </button>
  );
}