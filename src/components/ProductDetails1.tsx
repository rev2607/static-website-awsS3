import { FunctionComponent } from "react";
import styles from "./ProductDetails1.module.css";

export type ProductDetails1Type = {
  className?: string;
};

const ProductDetails1: FunctionComponent<ProductDetails1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.productDetails, className].join(" ")}>
      <div className={styles.brandInfoParent}>
        <div className={styles.brandInfo}>
          <a className={styles.shopco}>SHOP.CO</a>
          <div className={styles.navigation}>
            <div className={styles.shopLink}>
              <a className={styles.shop}>Shop</a>
              <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
            </div>
            <a className={styles.onSale}>On Sale</a>
            <a className={styles.newArrivals}>New Arrivals</a>
            <a className={styles.brands}>Brands</a>
          </div>
          <div className={styles.search}>
            <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
            <a className={styles.searchForProducts}>Search for products...</a>
          </div>
          <div className={styles.icons}>
            <img
              className={styles.userIcons}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
            <img
              className={styles.userIcons1}
              loading="lazy"
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.heroTitleWrapper}>
            <div className={styles.heroTitle}>
              <h1 className={styles.findClothesThat}>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <div className={styles.heroCta}>
                <div className={styles.shopNowLinkWrapper}>
                  <div className={styles.shopNowLink}>
                    <div className={styles.browseThroughOurDiverseRanParent}>
                      <div className={styles.browseThroughOur}>
                        Browse through our diverse range of meticulously crafted
                        garments, designed to bring out your individuality and
                        cater to your sense of style.
                      </div>
                      <button className={styles.shopNowContainer}>
                        <div className={styles.shopNow}>Shop Now</div>
                      </button>
                    </div>
                    <div className={styles.imageDescription}>
                      <div className={styles.imageDetails}>
                        <div className={styles.attributesWrapper}>
                          <b className={styles.attributes}>200+</b>
                        </div>
                        <div className={styles.internationalBrands}>
                          International Brands
                        </div>
                      </div>
                      <div className={styles.imageDetails1} />
                      <div className={styles.imageDetails2}>
                        <div className={styles.wrapper}>
                          <b className={styles.b}>2,000+</b>
                        </div>
                        <div className={styles.highQualityProducts}>
                          High-Quality Products
                        </div>
                      </div>
                      <div className={styles.imageDetails3} />
                      <div className={styles.imageDetails4}>
                        <div className={styles.container}>
                          <b className={styles.b1}>30,000+</b>
                        </div>
                        <div className={styles.happyCustomers}>
                          Happy Customers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.heroImageIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.backgroundImageIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails1;
