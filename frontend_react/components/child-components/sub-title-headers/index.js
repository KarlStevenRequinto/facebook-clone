import styles from "./styles.module.css";

const SubTitleHeader = ({ text, icon, iconSecond, dualIcon = false }) => {
  return (
    <span className={styles.container}>
      <p className={styles.text}>{text}</p>
        {dualIcon ? <span className={styles.iconSecond}>{iconSecond}</span> : <></>}
        <span className={styles.icon}>{icon}</span>
    </span>
  );
};

export default SubTitleHeader;
