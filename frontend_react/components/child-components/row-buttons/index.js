import styles from "./styles.module.css";

const RowButton = ({ icon, text, onHandleRowButtonClick }) => {
  return (
    <div className={styles.container} onClick={onHandleRowButtonClick}>
      <div className={styles.iconContainer}>
        <div className={styles.iconInnerContainer}>{icon}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default RowButton;
