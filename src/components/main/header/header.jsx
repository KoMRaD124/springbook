import React from "react";
import styles from "./header.module.scss";
import { Link} from "react-scroll";
import { logo } from "../../../assets/main";

export const Header = () => {
  return (
    <div className={styles.body} id="header">
      <div className={styles.wrapper}>
        <div className={styles.logo}><img className={styles.logoImg} src={logo} alt="springbook" /></div>
        <div className={styles.navlink}>
          <Link to="aboutMe" smooth={true} className={styles.navlinkItem}>Обо мне</Link>
          <Link to="myProject" smooth={true} className={styles.navlinkItem}>Мои проекты</Link>
          <Link to="footer" smooth={true} className={styles.navlinkItem}>Контакты</Link>
        </div>
      </div>
    </div>
  );
};
