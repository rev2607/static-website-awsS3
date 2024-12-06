import { FunctionComponent } from "react";
import ProductDetails1 from "../components/ProductDetails1";
import FrameComponent3 from "../components/FrameComponent3";
import ProductDetails from "../components/ProductDetails";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialCard from "../components/TestimonialCard";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.homepageChild} alt="" src="/rectangle-2@2x.png" />
      <div className={styles.signUpAndGet20OffToYouParent}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <ProductDetails1 />
      <FrameComponent3 />
      <ProductDetails />
      <section className={styles.previousPrice}>
        <div className={styles.pradaContainerParent}>
          <div className={styles.pradaContainer}>
            <h1 className={styles.topSelling}>top selling</h1>
          </div>
          <FrameComponent2 />
          <div className={styles.viewAllContainerWrapper}>
            <button className={styles.viewAllContainer}>
              <a className={styles.viewAll}>View All</a>
            </button>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <div className={styles.topSellingTitle}>
        <div className={styles.emptyContainerParent}>
          <div className={styles.emptyContainer}>
            <h1 className={styles.ourHappyCustomers}>OUR HAPPY CUSTOMERS</h1>
          </div>
          <div className={styles.reviewNavigation}>
            <img
              className={styles.arrowDownBold2Icon}
              alt=""
              src="/arrowdownbold-2@2x.png"
            />
            <img
              className={styles.arrowDownBold1Icon}
              alt=""
              src="/arrowdownbold-1@2x.png"
            />
          </div>
        </div>
      </div>
      <section className={styles.testimonialCardParent}>
        <TestimonialCard
          sarahM="Sarah M."
          imBlownAwayByTheQualityAn={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
        />
        <TestimonialCard
          sarahM="Sarah M."
          imBlownAwayByTheQualityAn={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
          propFilter="unset"
          propMinHeight="240px"
        />
        <TestimonialCard
          sarahM="Alex K."
          imBlownAwayByTheQualityAn={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          propFilter="unset"
          propMinHeight="unset"
        />
        <TestimonialCard
          sarahM="James L."
          imBlownAwayByTheQualityAn={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
          propFilter="unset"
          propMinHeight="unset"
        />
        <TestimonialCard
          sarahM="Mooen"
          imBlownAwayByTheQualityAn={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
          propFilter="blur(4px)"
          propMinHeight="unset"
        />
      </section>
      <section className={styles.offerSubscription}>
        <FrameComponent />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
