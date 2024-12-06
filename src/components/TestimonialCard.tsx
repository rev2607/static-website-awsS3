import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialCard.module.css";

export type TestimonialCardType = {
  className?: string;
  sarahM?: string;
  imBlownAwayByTheQualityAn?: string;

  /** Style props */
  propFilter?: CSSProperties["filter"];
  propMinHeight?: CSSProperties["minHeight"];
};

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  className = "",
  sarahM,
  imBlownAwayByTheQualityAn,
  propFilter,
  propMinHeight,
}) => {
  const testimonialCardStyle: CSSProperties = useMemo(() => {
    return {
      filter: propFilter,
      minHeight: propMinHeight,
    };
  }, [propFilter, propMinHeight]);

  return (
    <div
      className={[styles.testimonialCard, className].join(" ")}
      style={testimonialCardStyle}
    >
      <div className={styles.testimonialContent}>
        <div className={styles.customerReview}>
          <div className={styles.rating}>
            <img className={styles.starsIcon} alt="" src="/star-1-8.svg" />
            <img className={styles.starsIcon1} alt="" src="/star-2-8.svg" />
            <img className={styles.starsIcon2} alt="" src="/star-3-8.svg" />
            <img className={styles.starsIcon3} alt="" src="/star-4-6.svg" />
            <img className={styles.starsIcon4} alt="" src="/star-5-6.svg" />
          </div>
          <div className={styles.customerInfo}>
            <div className={styles.sarahMParent}>
              <b className={styles.sarahM}>{sarahM}</b>
              <img
                className={styles.locationIcon}
                loading="lazy"
                alt=""
                src="/frame-5.svg"
              />
            </div>
            <blockquote className={styles.imBlownAway}>
              {imBlownAwayByTheQualityAn}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
