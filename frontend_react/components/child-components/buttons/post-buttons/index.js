import styles from "./styles.module.css";

const PostButtons = ({ buttonText,imagePath }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.iconContainer}>
          <img className={styles.iconImage} alt="" src={imagePath} />
        </span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.btnText}>{buttonText}</span>
      </div>
    </div>
  );
};

export default PostButtons;
