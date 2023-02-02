import React from "react";
import styles from "./Banner.module.scss";
import { contentText, pdf, downloadPDF,downloadPDFMob } from "../../../assets/main";
export const Banner = () => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.h1}>
          <img
            className={styles.contentImg}
            src={contentText}
            alt="Создаю тактичный контент для бизнеса"
          />
          <h1 className={styles.contentBannerText}>
            Создаю тактичный
            <br /> контент
            <br /> для бизнеса
          </h1>
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
            <div className={styles.linkMob}>
              <div className={styles.linkSvg}>
                <img src={downloadPDFMob} alt="" />
              </div>
              <div className={styles.linkText}>
                Скачать
                <br /> резюме
              </div>
            </div>
            <div className={styles.linkTextAbout}>
              Пишу продуманные коммерческие тексты для&nbsp;бизнеса из разных
              областей.
            </div>
            {/* Пишу продуманные коммерческие тексты для&nbsp;бизнеса из разных
            областей. */}
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={styles.link}
        >
          <div className={styles.linkText}>Скачать резюме</div>
          <div className={styles.linkSvg}>
            <img src={isHover ? downloadPDF : pdf} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
