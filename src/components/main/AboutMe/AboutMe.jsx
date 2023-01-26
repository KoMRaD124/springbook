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
          <a
            className={styles.aboutMeBlockEmail}
            href="mailto:springbook.pro@gmail.com"
          >
            <div className={styles.emailBody}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.035 3H1.965C1.7059 3.00907 1.46044 3.11842 1.28041 3.30499C1.10038 3.49155 0.999841 3.74074 1 4V20C0.999841 20.2593 1.10038 20.5085 1.28041 20.695C1.46044 20.8816 1.7059 20.9909 1.965 21H22.035C22.2941 20.9909 22.5396 20.8816 22.7196 20.695C22.8996 20.5085 23.0002 20.2593 23 20V4C23.0002 3.74074 22.8996 3.49155 22.7196 3.30499C22.5396 3.11842 22.2941 3.00907 22.035 3ZM21.59 4.5V4.585L12.145 11.5C12.1033 11.5316 12.0524 11.5488 12 11.5488C11.9476 11.5488 11.8967 11.5316 11.855 11.5L2.41 4.575V4.5H21.59ZM2.41 19.5V6.385L11.45 13C11.6113 13.1128 11.8032 13.1738 12 13.175C12.1971 13.1758 12.3896 13.1146 12.55 13L21.59 6.385V19.5H2.41Z"
                  fill="#FCFCFC"
                  
                />
              </svg>
              <div className={styles.emailtext}>springbook.pro@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
