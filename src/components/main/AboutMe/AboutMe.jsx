import React from "react";
import styles from "./AboutMe.module.scss";
import { photo } from "../../../assets/main";
export const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.imgBlock}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.aboutMeBlock}>
          <div className={styles.aboutMeBlockTitle}>ОБО МНЕ</div>
          <div className={styles.aboutMeBlockHead}>
            Училась в Нетологии
            <br /> Сейчас сотрудничаю с{" "}
            <a className={styles.link} target="_blank" href="https://кодим.рф">
              веб-студией
            </a>
          </div>
          <div className={styles.aboutMeBlockText}>
            Мне 23 года, я люблю своё дело и&nbsp;продолжаю активно развиваться
            в&nbsp;нём. Открыта для&nbsp;нового сотрудничества, также
            рассматриваю предложения о&nbsp;постоянной работе.
          </div>
          <a className={styles.aboutMeBlockEmail} href="mailto:springbook.pro@gmail.com"></a>
        </div>
      </div>
    </div>
  );
};
