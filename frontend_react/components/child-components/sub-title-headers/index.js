import styles from "./styles.module.css";

const SubTitleHeader = ({ text }) => {
  return (
    <span className={styles.container}>
      <p className={styles.text}>{text}</p>
    </span>
  );
};

export default SubTitleHeader;
