import styles from "./styles.module.css";

const RowButton = ({icon,text}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default RowButton;
