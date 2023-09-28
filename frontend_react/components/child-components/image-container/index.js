import styles from "./styles.module.css";
const ImageContainer = ({ isOnline = true }) => {
  const imagePath = "/static/images/profile-picture.jpg"; //TO-DO make image a props
  return (
    <div className={styles.container}>
      <div className={styles.profileImageWrapper}>
        <img
          src={imagePath}
          alt="Profile Picture"
          className={styles.profileImage}
        />
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
