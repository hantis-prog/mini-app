import styles from './con_button.module.css';

interface ContinueButtonProps {
  onClick: () => void;
}

export default function ContinueButton({ onClick }: ContinueButtonProps) {
  return (
    <button type="button" className={styles.continueButton} onClick={onClick}>
      Продолжить
    </button>
  );
}