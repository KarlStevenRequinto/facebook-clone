import styles from "./styles.module.css";

const Tooltip = ({text}) => {
  return <div className={styles.container}>{text}</div>;
};

export default Tooltip;
