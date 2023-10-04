import styles from "./styles.module.css";

const RowButton = ({icon,text}) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default RowButton;
