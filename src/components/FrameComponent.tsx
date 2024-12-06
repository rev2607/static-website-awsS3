import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.newsletterFormWrapper, className].join(" ")}>
      <div className={styles.newsletterForm}>
        <h1 className={styles.stayUptoDate}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className={styles.inputFields}>
          <div className={styles.emailField}>
            <img className={styles.inputIcon} alt="" src="/frame-10.svg" />
            <input
              className={styles.enterYourEmail}
              placeholder="Enter your email address"
              type="text"
            />
          </div>
          <button className={styles.subscribeButton}>
            <div className={styles.subscribeToNewsletter}>
              Subscribe to Newsletter
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
