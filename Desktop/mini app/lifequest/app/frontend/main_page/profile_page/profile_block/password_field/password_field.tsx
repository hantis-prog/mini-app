'use client';

import { useState } from 'react';
import styles from './password_field.module.css';

export default function PasswordField() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.passwordRow}>
      <span className={styles.passwordLabel}>Пароль</span>
      <div className={styles.passwordValueContainer}>
        <span className={styles.passwordValue}>
          {isVisible ? 'mypassword123' : '••••••••'}
        </span>
        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => setIsVisible(!isVisible)}
          aria-label={isVisible ? 'Скрыть пароль' : 'Показать пароль'}
        >
          {isVisible ? '🙈' : '👁️'}
        </button>
        <button type="button" className={styles.changeButton}>
          Сменить
        </button>
      </div>
    </div>
  );
}