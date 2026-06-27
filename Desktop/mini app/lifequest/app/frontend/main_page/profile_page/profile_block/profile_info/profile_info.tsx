import styles from './profile_info.module.css';

interface ProfileInfoProps {
  label: string;
  value: string;
  isToggle?: boolean;
}

export default function ProfileInfo({ label, value, isToggle }: ProfileInfoProps) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{label}</span>
      <div className={styles.infoValueContainer}>
        <span className={styles.infoValue}>{value}</span>
        {isToggle && (
          <div className={styles.toggleSwitch}>
            <div className={styles.toggleKnob} />
          </div>
        )}
      </div>
    </div>
  );
}