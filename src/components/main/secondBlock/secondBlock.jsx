import React from "react";
import styles from "./secondBlock.module.scss";
export const SecondBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Погружаюсь в тему и подбираю ключи,
        <br />а после пишу текст
      </div>
      <div className={styles.desk}>
        <div className={styles.firstcol}>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Статьи</div>
            <div className={styles.desktext}>
              Анализирую и&nbsp;изучаю тему, подготавливаю ключевые слова,
              прорабатываю текст и&nbsp;корректирую его.
            </div>
          </div>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Креативный копирайтинг</div>
            <div className={styles.desktext}>
              Готовлю неординарные тексты под&nbsp;бренд для&nbsp;новых решений задач в&nbsp;продажах и&nbsp;в&nbsp;рекламном привлечении.
            </div>
          </div>
        </div>
        <div className={styles.deskitem}>
          <div className={styles.deskhead}></div>
          <div className={styles.desktext}></div>
        </div>
        <div className={styles.deskitem}>
          <div className={styles.deskhead}></div>
          <div className={styles.desktext}></div>
        </div>
      </div>
    </div>
  );
};
