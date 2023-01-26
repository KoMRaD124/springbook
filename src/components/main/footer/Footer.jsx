import React from "react";
import styles from "./Footer.module.scss";
import { logo } from "../../../assets/main";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoCol}>
        <img className={styles.logoimg} src={logo} alt="logo" />
        <div className={styles.logoText}>
          Староста Юлия
          <br />
          копирайтер
        </div>
      </div>
      <div className={styles.firstcol}>
        <div className={styles.colHead}>Связаться со мной</div>
        <div className={styles.colitem}>springbook.pro@gmail.com</div>
        <div className={styles.colitem}>скачать резюме</div>
      </div>
      <div className={styles.secondcol}>
        <div className={styles.colHead}>Меню</div>
        <div className={styles.colitem}>Обо мне</div>
        <div className={styles.colitem}>Мои проекты</div>
      </div>
    </div>
  );
};
