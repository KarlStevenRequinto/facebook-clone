import styles from "./styles.module.css";
const ImageContainer = ({
  isOnline = true,
  isForIcon = false,
  width,
  height,
  imagePath,
  altText,
  icon,
}) => {
  //TO-DO make image a props

  return (
    // TO-DO: make background color dynamic
    <div className={styles.container}>
      <div className={styles.profileImageWrapper}>
        {isForIcon ? (
          <div className={styles.iconContainer}>{icon}</div>
        ) : (
          <img
            src={imagePath}
            alt={altText}
            className={styles.profileImage}
            style={{ width, height }}
          />
        )}
      </div>
      {isOnline ? (
        <div className={styles.onlineBadge}>
          <span className={styles.onlineDot}></span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageContainer;
