import MessengerIcon from "../../../ui/svg/messenger-icon";
import styles from "./styles.module.css";
const ImageContainer = ({
  isOnline = true,
  isForIcon = false,
  width,
  height,
  imagePath,
  altText
}) => {
  //TO-DO make image a props
  const Icon = ({ width, height }) => {
    return (
      <div className={styles.iconContainer}>
        <MessengerIcon width={width} height={height} />
      </div>
    );
  };
  return (
    // TO-DO: make background color dynamic
    <div className={styles.container}>
      <div className={styles.profileImageWrapper}>
        {isForIcon ? (
          <Icon width={20} height={20} />
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
