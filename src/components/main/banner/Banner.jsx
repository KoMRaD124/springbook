import React from "react";
import styles from "./Banner.module.scss";
import { contentText,pdf, downloadPDF } from "../../../assets/main";
export const Banner = () => {
let icon=pdf
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.h1}>
          <img src={contentText} alt="Создаю тактичный контент для бизнеса" />
        </div>
        <div className={styles.about}>
          <div className={styles.contentText}>
            <div className={styles.name}>
              Староста
              <br />
              Юлия
            </div>
            <div className={styles.job}>копирайтер</div>
          </div>
          <div className={styles.aboutWork}>
            Пишу продуманные коммерческие тексты для&nbsp;бизнеса из разных
            областей.
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.linkText}>Скачать резюме</div>
          <div onMouseOver={icon=downloadPDF} onMouseOut={icon=pdf} className={styles.linkSvg}><img src={icon} alt="" /></div>
        </div>
      </div>
    </div>
  );
};
