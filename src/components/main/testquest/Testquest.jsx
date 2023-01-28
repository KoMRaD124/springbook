import React from "react";
import styles from "./Testquest.module.scss";
import { avatarka } from "../../../assets/main";
export const Testquest = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <div className={styles.avatarImg}>
            <img src={avatarka} alt="" />
          </div>
          <div className={styles.avatarText}>
            <div className={styles.avatarTextName}>Староста Юлия</div>
            <div className={styles.avatarTextText}>
              Владелец сайта<br />Виновник торжества
            </div>
          </div>
        </div>
        <div className={styles.text}>
          Если сомневаетесь в моей кандидатуре, смело отправляйте мне ваше
          тестовое задание. Считаю лучший способ доказать свою эффективность —
          продемонстрировать .
        </div>
      </div>
    </div>
  );
};
