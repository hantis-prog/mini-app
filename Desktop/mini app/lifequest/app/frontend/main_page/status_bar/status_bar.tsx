// Импортируем все компоненты строки состояния
import XPDisplay from '../xp_display/xp_display';
import LevelDisplay from '../level_display/level_display';
import ProfileDisplay from '../profile_display/profile_display';
import TariffDisplay from '../tariff_display/tariff_display';
import BalanceDisplay from '../balance_display/balance_display';

// Импортируем стили строки состояния
import styles from './status_bar.module.css';

/**
 * Компонент строки состояния.
 * Расположен вверху страницы и содержит:
 * - XP-бар и уровень (слева)
 * - Профиль пользователя (по центру)
 * - Тариф и баланс (справа)
 */
export default function StatusBar() {
  return (
    <div className={styles.statusBar}>
      {/* Левая секция: XP и уровень */}
      <div className={styles.leftSection}>
        <XPDisplay xp={1250} maxXp={2000} />
        <LevelDisplay level={12} />
      </div>

      {/* Центральная секция: профиль пользователя */}
      <div className={styles.centerSection}>
        <ProfileDisplay
          nickname="PlayerOne"
          tags={['Программист', 'Геймер']}
        />
      </div>

      {/* Правая секция: тариф и баланс */}
      <div className={styles.rightSection}>
        <TariffDisplay tariff="Premium" />
        <BalanceDisplay balance={450} />
      </div>
    </div>
  );
}