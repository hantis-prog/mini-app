// Импортируем стили компонента
import styles from './navigation_bar.module.css';

/**
 * Интерфейс пропсов для панели навигации.
 * activeTab — идентификатор активной вкладки.
 * onTabChange — функция-обработчик смены вкладки.
 */
interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * Массив вкладок навигации.
 * Каждая вкладка имеет id, отображаемое название и иконку.
 */
const TABS = [
  { id: 'главная', label: 'Главная', icon: '🏠' },
  { id: 'задания', label: 'Задания', icon: '📋' },
  { id: 'достижения', label: 'Достижения', icon: '🏆' },
  { id: 'профиль', label: 'Профиль', icon: '👤' },
];

/**
 * Компонент нижней панели навигации.
 * Расположен внизу страницы, не растягивается на всю ширину.
 */
export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>
        {/* Перебираем вкладки и рендерим кнопки */}
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            // Добавляем класс active, если вкладка выбрана
            className={`${styles.navButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.navIcon}>{tab.icon}</span>
            <span className={styles.navLabel}>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}