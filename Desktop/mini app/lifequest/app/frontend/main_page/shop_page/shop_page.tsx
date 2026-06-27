import styles from './shop_page.module.css';

export default function ShopPage() {
  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopContent}>
        <div className={styles.shopIcon}>🛒</div>
        <h2 className={styles.shopTitle}>Магазин</h2>
        <p className={styles.shopText}>
          Здесь скоро появятся товары и бонусы для улучшения вашего опыта!
        </p>
        <div className={styles.comingSoon}>
          <span className={styles.comingSoonText}>Скоро открытие</span>
        </div>
      </div>
    </div>
  );
}