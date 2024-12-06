import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.logoContainerWrapper, className].join(" ")}>
      <header className={styles.logoContainer}>
        <div className={styles.logoContainerChild} />
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <img
          className={styles.zaraLogo11Icon}
          loading="lazy"
          alt=""
          src="/zaralogo1-1.svg"
        />
        <div className={styles.gucciLogo11Wrapper}>
          <img
            className={styles.gucciLogo11Icon}
            loading="lazy"
            alt=""
            src="/guccilogo1-1.svg"
          />
        </div>
        <div className={styles.pradaLogo11Wrapper}>
          <img
            className={styles.pradaLogo11Icon}
            loading="lazy"
            alt=""
            src="/pradalogo1-1.svg"
          />
        </div>
        <div className={styles.groupContainer}>
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
