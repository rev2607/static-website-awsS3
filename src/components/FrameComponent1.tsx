import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.browseByDressStyleWrapper}>
        <h1 className={styles.browseByDress}>BROWSE BY dress STYLE</h1>
      </div>
      <div className={styles.styleImageGrid}>
        <div className={styles.styleImageRowOne}>
          <div className={styles.image11Parent}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <h1 className={styles.casual}>Casual</h1>
          </div>
          <div className={styles.image13Parent}>
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
            <h1 className={styles.formal}>Formal</h1>
          </div>
        </div>
        <div className={styles.styleImageRowOne1}>
          <div className={styles.image12Parent}>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <h1 className={styles.party}>Party</h1>
          </div>
          <div className={styles.image14Parent}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
            <h1 className={styles.gym}>Gym</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
