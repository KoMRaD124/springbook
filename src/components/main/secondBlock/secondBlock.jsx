import React from "react";
import styles from "./secondBlock.module.scss";
export const SecondBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Погружаюсь в&nbsp;тему и&nbsp;подбираю ключи,
       а&nbsp;после пишу текст
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
              Готовлю неординарные тексты под&nbsp;бренд для&nbsp;новых решений
              задач в&nbsp;продажах и&nbsp;в&nbsp;рекламном привлечении.
            </div>
          </div>
        </div>
        <div className={styles.secondcol}>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Посты</div>
            <div className={styles.desktext}>
              Оптимизирую текст под&nbsp;аудиторию, планирую стратегию развития
              на&nbsp;месяц вперёд.
            </div>
          </div>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Описание товаров</div>
            <div className={styles.desktext}>
              Характеризую товары под&nbsp;вопросы покупателей и&nbsp;выделяю их&nbsp;среди
              конкурентов.
            </div>
          </div>
        </div>
        <div className={styles.secondcol}>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Для сайтов</div>
            <div className={styles.desktext}>
              Формирую структуру SEO-текста для&nbsp;блоков, комплексно усиливаю УТП
              для&nbsp;проекта.
            </div>
          </div>
          <div className={styles.deskitem}>
            <div className={styles.deskhead}>Адаптация текстов</div>
            <div className={styles.desktext}>
              Перевожу английские материалы и&nbsp;делаю живую реконструкцию текста
              под&nbsp;русский язык.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
