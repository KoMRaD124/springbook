import React from "react";
import styles from "./header.module.scss";
import { logo } from "../../../assets/main";

export const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.logo}><img className={styles.logoImg} src={logo} alt="springbook" /></div>
        <div className={styles.navlink}>
          <div className={styles.navlinkItem}>Обо мне</div>
          <div className={styles.navlinkItem}>Мои проекты</div>
          <div className={styles.navlinkItem}>Контакты</div>
        </div>
      </div>
    </div>
  );
};
