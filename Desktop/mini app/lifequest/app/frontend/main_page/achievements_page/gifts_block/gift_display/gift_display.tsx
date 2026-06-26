import styles from './gift_display.module.css';

interface GiftDisplayProps {
  gift: {
    name: string;
    description: string;
    reward: string;
    rarity: string;
    giver: string;
  };
}

// Цвета для редкости
const RARITY_COLORS: Record<string, string> = {
  'Обычный': '#888',
  'Редкий': '#6c5ce7',
  'Легендарный': '#ffd700',
};

export default function GiftDisplay({ gift }: GiftDisplayProps) {
  const rarityColor = RARITY_COLORS[gift.rarity] || '#888';

  return (
    <div className={styles.giftCard}>
      {/* Верхняя строка: иконка + название + редкость */}
      <div className={styles.giftHeader}>
        <div className={styles.giftTitleRow}>
          <span className={styles.giftIcon}>🎁</span>
          <h3 className={styles.giftName}>{gift.name}</h3>
        </div>
        <span className={styles.giftRarity} style={{ color: rarityColor }}>
          {gift.rarity}
        </span>
      </div>

      {/* Описание - за что получен подарок (до 2 строк) */}
      <p className={styles.giftDescription}>{gift.description}</p>

      {/* Нижняя строка: что дает + никнейм дарителя */}
      <div className={styles.giftFooter}>
        <span className={styles.giftReward}>{gift.reward}</span>
        <span className={styles.giftGiver}>от {gift.giver}</span>
      </div>
    </div>
  );
}