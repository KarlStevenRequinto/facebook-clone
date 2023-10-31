import styles from "./styles.module.css";

const NavButtons = ({ icon, color }) => {
  return (
    <div className={styles.btnContainer} style={{ backgroundColor: color }}>
      {icon}
    </div>
  );
};

export default NavButtons;
