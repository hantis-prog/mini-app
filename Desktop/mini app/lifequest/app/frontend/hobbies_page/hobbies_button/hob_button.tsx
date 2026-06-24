import styles from './hob_button.module.css';

interface HobbieButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function HobbieButton({ label, isSelected, onClick }: HobbieButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.interestButton} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}