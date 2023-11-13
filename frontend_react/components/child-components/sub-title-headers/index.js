import styles from "./styles.module.css";

const SubTitleHeader = ({ text,icon }) => {
  return (
    <span className={styles.container}>
      <p className={styles.text}>{text}</p>
      <span className={styles.icon}>{icon}</span>
    </span>
  );
};

export default SubTitleHeader;
