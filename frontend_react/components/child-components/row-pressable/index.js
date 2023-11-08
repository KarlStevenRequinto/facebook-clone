import ImageContainer from "../image-container";
import styles from "./styles.module.css";

const RowPressable = ({ iconComponent, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.iconContainer}>{iconComponent}</div>
        <div>
          <span className={styles.text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default RowPressable;
