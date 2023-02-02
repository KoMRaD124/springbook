import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
import { logo, burger } from "../../../assets/main";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import classNames from "classnames";

export const Header = () => {
  const [isActive, setActive] = React.useState(false);
  isActive ? disableBodyScroll(document) : enableBodyScroll(document);
  return (
    <header className={styles.body} id="header">
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="springbook" />
        </div>
        <div
          onClick={() => setActive(!isActive)}
          className={classNames(styles.burger, { [styles.active]: isActive })}
        >
          <div
            className={classNames(styles.burger1, {
              [styles.active]: isActive,
            })}
          >
            <img src={burger} alt="" />
          </div>
          <div
            className={classNames(styles.burger2, {
              [styles.active]: isActive,
            })}
          >
            <img src={burger} alt="" />
          </div>
        </div>
        <div
          className={classNames(styles.navlink, { [styles.active]: isActive })}
        >
          <Link
            onClick={() => setActive(false)}
            to="aboutMe"
            smooth={true}
            className={styles.navlinkItem}
          >
            Обо мне
          </Link>
          <Link
            onClick={() => setActive(false)}
            to="myProject"
            smooth={true}
            className={styles.navlinkItem}
          >
            <span className={styles.myProj}>Мои проекты</span>
            <span className={styles.myProjMob}>Проекты</span>
          </Link>
          <Link
            onClick={() => setActive(false)}
            to="footer"
            smooth={true}
            className={styles.navlinkItem}
          >
            Контакты
          </Link>
          <a
            onClick={() => setActive(false)}
            className={styles.BlockEmail}
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
                  fill="#242424"
                />
              </svg>
              <div className={styles.emailtext}>springbook.pro@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
