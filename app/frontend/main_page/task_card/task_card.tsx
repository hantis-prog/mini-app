'use client';

import styles from './task_card.module.css';

interface TaskCardProps {
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  reward: string;
  requiresProof: boolean;
  note?: string;
  isWeekly: boolean;
  onClose: () => void;
  onCheck: () => void;
  onVote?: () => void;
}

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Легкое',
  medium: 'Среднее',
  hard: 'Сложное',
};

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: '#00b894',
  medium: '#fdcb6e',
  hard: '#e17055',
};

export default function TaskCard({
  title,
  difficulty,
  description,
  reward,
  requiresProof,
  note,
  isWeekly,
  onClose,
  onCheck,
  onVote,
}: TaskCardProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        {/* Крестик закрытия */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Заголовок и сложность */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span
            className={styles.difficultyBadge}
            style={{ backgroundColor: DIFFICULTY_COLORS[difficulty] }}
          >
            {DIFFICULTY_LABELS[difficulty]}
          </span>
        </div>

        {/* Описание задания */}
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Награда */}
        <div className={styles.rewardSection}>
          <span className={styles.rewardLabel}>Награда:</span>
          <span className={styles.rewardText}>{reward}</span>
        </div>

        {/* Область прикрепления доказательства (если требуется) */}
        {requiresProof && (
          <div className={styles.proofSection}>
            <span className={styles.proofLabel}>Доказательство выполнения:</span>
            <div className={styles.proofArea}>
              <span className={styles.proofPlaceholder}>
                Вставьте текст или прикрепите фотографию
              </span>
            </div>
          </div>
        )}

        {/* Примечание (если есть) */}
        {note && (
          <div className={styles.noteSection}>
            <span className={styles.noteLabel}>Примечание:</span>
            <p className={styles.noteText}>{note}</p>
          </div>
        )}

        {/* Кнопки */}
        <div className={styles.buttonRow}>
          <button type="button" className={styles.checkButton} onClick={onCheck}>
            Проверить задание
          </button>
          {isWeekly && onVote && (
            <button type="button" className={styles.voteButton} onClick={onVote}>
              Проголосовать
            </button>
          )}
        </div>
      </div>
    </div>
  );
}