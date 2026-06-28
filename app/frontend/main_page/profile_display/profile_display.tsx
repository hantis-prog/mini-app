'use client';

import { useRouter } from 'next/navigation';
import styles from './profile_display.module.css';

interface ProfileDisplayProps {
  nickname: string;
  tags: string[];
}

export default function ProfileDisplay({ nickname, tags }: ProfileDisplayProps) {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/frontend/main_page?tab=профиль');
  };

  return (
    <div className={styles.profileContainer}>
      {/* Кликабельная аватарка */}
      <div 
        className={styles.avatar} 
        onClick={handleProfileClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleProfileClick();
          }
        }}
      >
        <div className={styles.avatarPlaceholder}>👤</div>
      </div>
      
      {/* Никнейм и теги - не кликабельные */}
      <div className={styles.profileInfo}>
        <span className={styles.nickname}>{nickname}</span>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}