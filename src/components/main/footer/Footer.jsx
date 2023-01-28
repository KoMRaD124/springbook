import React from "react";
import styles from "./Footer.module.scss";
import { Link} from "react-scroll";
import { logo, MailHover, DownloadFooter } from "../../../assets/main";

export const Footer = () => {
  return (
    <div id="footer" className={styles.wrapper}>
      <div className={styles.logoCol}>
        <Link smooth={true} to="header">
          <img className={styles.logoimg} src={logo} alt="logo" />
        </Link>
        {/* <img className={styles.logoimg} src={logo} alt="logo" /> */}
        <div className={styles.logoText}>
          Староста Юлия
          <br />
          копирайтер
        </div>
      </div>
      <div className={styles.firstcol}>
        <div className={styles.colHead}>Связаться со мной</div>
        <a href="mailto:springbook.pro@gmail.com" className={styles.colitem}>
          <img src={MailHover} alt="mail" />
          <span className={styles.colitemText}>springbook.pro@gmail.com</span>
        </a>
        <div className={styles.colitem}>
          <img src={DownloadFooter} alt="download CV" />
          <span className={styles.colitemText}>скачать резюме</span>
        </div>
      </div>
      <div className={styles.secondcol}>
        <div className={styles.colHead}>Меню</div>
        <Link to="aboutMe" smooth={true} className={styles.colitem}>Обо мне</Link>
        <Link to="myProject" smooth={true}  className={styles.colitem}>Мои проекты</Link>
      </div>
    </div>
  );
};
