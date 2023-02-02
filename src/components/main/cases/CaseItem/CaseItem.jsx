import React from "react";
import styles from "./CaseItem.module.scss";
import { CaseImg } from "../../../../assets/main";

export const CaseItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.divider}></div>
      <div className={styles.body}>
        <div className={styles.imgBlock}>
          <img className={styles.img} src={CaseImg} alt="case" />
        </div>
        <div className={styles.header}>
          Студия веб-дизайна А тут даже на три фига
        </div>
        <div className={styles.text}>
          Полное текстовое и SEO-сопровождение, поддержание, которое может
          заниматься целые 4 сроки, сейчас ещё текст дополню и&nbsp;как раз будет,
          весело же ну
        </div>
      </div>
    </div>
  );
};
