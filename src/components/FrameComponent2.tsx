import { FunctionComponent } from "react";
import ProductRow from "./ProductRow";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <ProductRow
        frame38="/frame-32-1@2x.png"
        lEEVE="ERTICAL"
        sHIRT="HIRT"
        star5="/star-5-4.svg"
        prop="5.0/"
        empty="$212"
        empty1="$232"
        productImagePlaceholder="-20%"
      />
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-33@2x.png"
        />
        <div className={styles.courageGraphicTShirtParent}>
          <b className={styles.courageGraphicTShirtContainer}>
            C<span className={styles.ourage}>OURAGE</span> G
            <span className={styles.raphic}>RAPHIC</span> T-
            <span className={styles.shirt}>SHIRT</span>
          </b>
          <div className={styles.frameContainer}>
            <div className={styles.starParent}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/star-2.svg"
              />
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star-3.svg"
              />
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/star-4.svg"
              />
            </div>
            <div className={styles.div}>
              <span>4.0/</span>
              <span className={styles.span}>5</span>
            </div>
          </div>
          <b className={styles.b}>$145</b>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-34-1@2x.png"
        />
        <div className={styles.looseFitBermudaShortsParent}>
          <b className={styles.looseFitBermudaContainer}>
            <span>
              L<span className={styles.oose}>OOSE</span> F
              <span className={styles.it}>IT</span> B
              <span className={styles.ermuda}>ERMUDA</span> S
              <span className={styles.horts}>HORTS</span>
            </span>
          </b>
          <div className={styles.frameParent1}>
            <div className={styles.starGroup}>
              <img
                className={styles.frameChild2}
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <img className={styles.frameChild3} alt="" src="/star-2.svg" />
              <img className={styles.frameChild4} alt="" src="/star-3.svg" />
            </div>
            <div className={styles.div1}>
              <span>3.0/</span>
              <span className={styles.span1}>5</span>
            </div>
          </div>
          <b className={styles.b1}>$80</b>
        </div>
      </div>
      <div className={styles.topSellingProductContainers}>
        <div className={styles.image10Wrapper}>
          <img
            className={styles.image10Icon}
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
        <div className={styles.fadedSkinnyJeansParent}>
          <b className={styles.fadedSkinnyJeansContainer}>
            F<span className={styles.aded}>ADED</span> S
            <span className={styles.kinny}>KINNY</span> J
            <span className={styles.eans}>EANS</span>
          </b>
          <div className={styles.frameParent2}>
            <div className={styles.starContainer}>
              <img className={styles.frameChild5} alt="" src="/star-1.svg" />
              <img className={styles.frameChild6} alt="" src="/star-2.svg" />
              <img className={styles.frameChild7} alt="" src="/star-3.svg" />
              <img className={styles.frameChild8} alt="" src="/star-4.svg" />
              <img className={styles.frameChild9} alt="" src="/star-5.svg" />
            </div>
            <div className={styles.div2}>
              <span>4.5/</span>
              <span className={styles.span2}>5</span>
            </div>
          </div>
          <b className={styles.b2}>$210</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;