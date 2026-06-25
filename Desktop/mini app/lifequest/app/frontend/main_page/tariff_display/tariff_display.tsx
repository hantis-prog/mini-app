// Импортируем стили компонента
import styles from './tariff_display.module.css';

/**
 * Интерфейс пропсов для отображения тарифа.
 * tariff — название тарифа пользователя.
 */
interface TariffDisplayProps {
  tariff: string;
}

/**
 * Компонент отображения тарифа.
 * Показывает бейдж с иконкой короны и названием тарифа.
 */
export default function TariffDisplay({ tariff }: TariffDisplayProps) {
  return (
    <div className={styles.tariffBadge}>
      <span className={styles.tariffIcon}></span>
      <span className={styles.tariffName}>{tariff}</span>
    </div>
  );
}