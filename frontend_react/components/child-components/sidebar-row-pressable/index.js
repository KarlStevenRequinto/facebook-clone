import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const SidebarRowPressable = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.container}>
      <Link href={""} style={{ textDecoration: "none" }}>
        <div
          className={styles.rowContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.outerIconContainer}>
            <div
              className={styles.iconContainer}
              style={{
                backgroundColor: isHovered ? "var(--fds-black-alpha-10)" : null,
              }}
            >
              {icon}
            </div>
          </div>
          <div>
            <div>
              <span>
                <span className={styles.text}>{text}</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SidebarRowPressable;
