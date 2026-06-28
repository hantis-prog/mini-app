'use client';

import { useState } from 'react';
import GiftDisplay from './gift_display/gift_display';
import GiftNavigation from './gift_navigation/gift_navigation';
import styles from './gifts_block.module.css';

// Все подарки с редкостью и дарителем
const GIFTS = [
  {
    id: 1,
    name: 'Бонус опыта',
    description: 'Получите двойной опыт за все задания на 24 часа',
    reward: '+100% XP на 24 часа',
    rarity: 'Обычный',
    giver: 'Система',
  },
  {
    id: 2,
    name: 'Золотой ключ',
    description: 'Откройте любой закрытый уровень без ограничений. Действует на все премиум-контент в игре.',
    reward: 'Доступ к премиум-контенту',
    rarity: 'Редкий',
    giver: 'Admin',
  },
  {
    id: 3,
    name: 'Энергетик',
    description: 'Восстановите всю энергию мгновенно',
    reward: '+100 энергии',
    rarity: 'Легендарный',
    giver: 'PlayerOne',
  },
];

export default function GiftsBlock() {
  const [currentGiftIndex, setCurrentGiftIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentGiftIndex((prev) => (prev > 0 ? prev - 1 : GIFTS.length - 1));
  };

  const handleNext = () => {
    setCurrentGiftIndex((prev) => (prev < GIFTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={styles.giftsBlock}>
      <div className={styles.giftContent}>
        <GiftDisplay gift={GIFTS[currentGiftIndex]} />
        <GiftNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={currentGiftIndex}
          total={GIFTS.length}
        />
      </div>
    </div>
  );
}