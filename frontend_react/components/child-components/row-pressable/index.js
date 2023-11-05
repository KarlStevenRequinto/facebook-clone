import ImageContainer from "../image-container";
import styles from "./styles.module.css";

const RowPressable = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <ImageContainer width={36} height={36}/>
        <div>
          <span className={styles.text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default RowPressable;
