import React from "react";
import styles from "./Cases.module.scss";
import {CaseItem} from "./CaseItem/CaseItem"
export const Cases = () => {
  return (
    <div id="myProject" className={styles.wrapper}>
      <div className={styles.header}>
        Работала над этими проектами в роли<br /> копирайтера
      </div>
      <CaseItem/>
      <CaseItem/>
    </div>
  );
};
