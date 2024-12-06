import { FunctionComponent } from "react";
import ProductRow from "./ProductRow";
import styles from "./ProductDetails.module.css";

export type ProductDetailsType = {
  className?: string;
};

const ProductDetails: FunctionComponent<ProductDetailsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.productDetails, className].join(" ")}>
      <div className={styles.shopNowButtonParent}>
        <div className={styles.shopNowButton}>
          <h1 className={styles.newArrivals}>NEW ARRIVALS</h1>
        </div>
        <div className={styles.productRowParent}>
          <div className={styles.productRow}>
            <img
              className={styles.productRowChild}
              loading="lazy"
              alt=""
              src="/frame-32@2x.png"
            />
            <div className={styles.newArrivalsProductDetails}>
              <b className={styles.tShirtWithTapeContainer}>
                T-
                <span className={styles.shirt}>SHIRT</span>
                {` `}
                <span className={styles.with}>WITH</span> T
                <span className={styles.ape}>APE</span> D
                <span className={styles.etails}>ETAILS</span>
              </b>
              <div className={styles.frameParent}>
                <div className={styles.starParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/star-3.svg"
                  />
                  <img className={styles.starIcon} alt="" src="/star-4.svg" />
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/star-5.svg"
                  />
                </div>
                <div className={styles.separator}>
                  <span>4.5/</span>
                  <span className={styles.span}>5</span>
                </div>
              </div>
              <b className={styles.b}>$120</b>
            </div>
          </div>
          <div className={styles.productRow1}>
            <div className={styles.image8Wrapper}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
            </div>
            <div className={styles.skinnyFitJeansParent}>
              <b className={styles.skinnyFitJeansContainer}>
                S<span className={styles.kinny}>KINNY</span> F
                <span className={styles.it}>IT</span> J
                <span className={styles.eans}>EANS</span>
              </b>
              <div className={styles.jeansStarsParent}>
                <div className={styles.jeansStars}>
                  <img
                    className={styles.jeansStarList}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.jeansStarList1}
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.jeansStarList2}
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className={styles.jeansStarsChild}
                    alt=""
                    src="/star-5-1.svg"
                  />
                </div>
                <div className={styles.jeansPrice}>
                  <span>3.5/</span>
                  <span className={styles.span1}>5</span>
                </div>
              </div>
              <div className={styles.emptyDataParent}>
                <b className={styles.emptyData}>$240</b>
                <b className={styles.emptyData1}>$260</b>
                <div className={styles.pricePlaceholderWrapper}>
                  <div className={styles.pricePlaceholder}>
                    <div className={styles.empty}>-20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productRow2}>
            <img
              className={styles.productRowItem}
              loading="lazy"
              alt=""
              src="/frame-34@2x.png"
            />
            <div className={styles.checkeredShirtParent}>
              <b className={styles.checkeredShirt}>
                <span>
                  C<span className={styles.heckered}>HECKERED</span> S
                  <span className={styles.hirt}>HIRT</span>
                </span>
              </b>
              <div className={styles.shirtStarsParent}>
                <div className={styles.shirtStars}>
                  <img
                    className={styles.shirtStarList}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.shirtStarList1}
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.shirtStarList2}
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className={styles.shirtStarList3}
                    alt=""
                    src="/star-4.svg"
                  />
                  <img
                    className={styles.shirtStarsChild}
                    alt=""
                    src="/star-5.svg"
                  />
                </div>
                <div className={styles.shirtPrice}>
                  <span>4.5/</span>
                  <span className={styles.span2}>5</span>
                </div>
              </div>
              <b className={styles.empty1}>$180</b>
            </div>
          </div>
          <ProductRow
            frame38="/frame-38@2x.png"
            lEEVE="LEEVE"
            sHIRT="SHIRT"
            star5="/star-5.svg"
            prop="4.5/"
            empty="$130"
            empty1="$160"
            productImagePlaceholder="-30%"
          />
        </div>
        <div className={styles.frameWrapper}>
          <button className={styles.viewAllWrapper}>
            <a className={styles.viewAll}>View All</a>
          </button>
        </div>
        <div className={styles.lineDiv} />
      </div>
    </section>
  );
};

export default ProductDetails;
