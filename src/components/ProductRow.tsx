import { FunctionComponent } from "react";
import styles from "./ProductRow.module.css";

export type ProductRowType = {
  className?: string;
  frame38?: string;
  lEEVE?: string;
  sHIRT?: string;
  star5?: string;
  prop?: string;
  empty?: string;
  empty1?: string;
  productImagePlaceholder?: string;
};

const ProductRow: FunctionComponent<ProductRowType> = ({
  className = "",
  frame38,
  lEEVE,
  sHIRT,
  star5,
  prop,
  empty,
  empty1,
  productImagePlaceholder,
}) => {
  return (
    <div className={[styles.productRow, className].join(" ")}>
      <img
        className={styles.productRowChild}
        loading="lazy"
        alt=""
        src={frame38}
      />
      <div className={styles.sleeveStripedTShirtParent}>
        <b className={styles.sleeveStripedTShirtContainer}>
          S<span className={styles.leeve}>{lEEVE}</span> S
          <span className={styles.triped}>TRIPED</span> T-
          <span className={styles.shirt}>{sHIRT}</span>
        </b>
        <div className={styles.frameParent}>
          <div className={styles.starParent}>
            <img className={styles.frameChild} alt="" src="/star-1.svg" />
            <img className={styles.frameItem} alt="" src="/star-2.svg" />
            <img className={styles.frameInner} alt="" src="/star-3.svg" />
            <img className={styles.starIcon} alt="" src="/star-4.svg" />
            <img className={styles.frameChild1} alt="" src={star5} />
          </div>
          <div className={styles.div}>
            <span>{prop}</span>
            <span className={styles.span}>5</span>
          </div>
        </div>
        <div className={styles.emptyParent}>
          <b className={styles.empty}>{empty}</b>
          <b className={styles.empty1}>{empty1}</b>
          <div className={styles.imageContainerWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.productImagePlaceholder}>
                {productImagePlaceholder}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
