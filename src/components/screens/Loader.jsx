import styles from './../../assets/styles/screens/screens.module.css';

const Loader = () => {
  return (
    <div className={styles.content}>
        <div className={styles.player_one}></div>
        <div className={styles.player_two}></div>
        <div className={styles.ball}></div>
    </div>
  );
};

export default Loader;
