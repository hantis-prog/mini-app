'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HobbieButton from './hobbies_button/hob_button';
import ContinueButton from './continue_button/con_button';
import styles from './hobbiesPage.module.css';

const INTERESTS_LIST = [
  'Чтение',
  'Спорт',
  'Музыка',
  'Путешествия',
  'Кулинария',
  'Фотография',
  'Рисование',
  'Программирование',
  'Игры',
  'Кино',
  'Танцы',
  'Садоводство',
];

export default function InterestsPage() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInterestToggle = (interest: string) => {
    setErrorMessage('');

    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      if (selectedInterests.length >= 3) {
        setErrorMessage('Можно выбрать не более 3 увлечений');
        return;
      }
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      setErrorMessage('Выберите от 1 до 3 увлечений');
      return;
    }

    console.log('Выбранные увлечения:', selectedInterests);
    router.push('../frontend/main_page');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какие у вас увлечения?</h1>

      <div className={styles.interestsGrid}>
        {INTERESTS_LIST.map((interest) => (
          <HobbieButton
            key={interest}
            label={interest}
            isSelected={selectedInterests.includes(interest)}
            onClick={() => handleInterestToggle(interest)}
          />
        ))}
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <ContinueButton onClick={handleContinue} />
    </div>
  );
}