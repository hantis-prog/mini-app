'use client';

import { useState } from 'react';
import styles from './tags_block.module.css';

// Все доступные теги
const AVAILABLE_TAGS = [
  'Программист',
  'Геймер',
  'Спортсмен',
  'Читатель',
  'Музыкант',
  'Художник',
  'Путешественник',
  'Кулинар',
];

export default function TagsBlock() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Программист', 'Геймер']);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  return (
    <div className={styles.tagsBlock}>
      <h3 className={styles.tagsTitle}>Выберите теги</h3>
      <div className={styles.tagsList}>
        {AVAILABLE_TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => handleTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}