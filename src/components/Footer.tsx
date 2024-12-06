import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerBrandInfoParent}>
        <div className={styles.footerBrandInfo}>
          <b className={styles.shopco}>SHOP.CO</b>
          <div className={styles.brandDescriptionContainer}>
            <div className={styles.weHaveClothes}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <div className={styles.brandSocialLinks}>
              <img
                className={styles.icons}
                loading="lazy"
                alt=""
                src="/1.svg"
              />
              <img
                className={styles.icons1}
                loading="lazy"
                alt=""
                src="/2.svg"
              />
              <img
                className={styles.icons2}
                loading="lazy"
                alt=""
                src="/3.svg"
              />
              <img
                className={styles.icons3}
                loading="lazy"
                alt=""
                src="/4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.menuLinks}>
          <div className={styles.helpMenu}>Company</div>
          <div className={styles.aboutFeaturesWorksContainer}>
            <p className={styles.about}>{`About          `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.features}>{`Features          `}</p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.works}>{`Works          `}</p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <p className={styles.career}>{`Career  `}</p>
          </div>
        </div>
        <div className={styles.menuLinks1}>
          <div className={styles.helpMenu1}>Help</div>
          <div className={styles.aboutFeaturesWorksContainer1}>
            <p className={styles.customerSupport}>Customer Support</p>
            <p className={styles.blankLine3}>&nbsp;</p>
            <p className={styles.deliveryDetails}>Delivery Details</p>
            <p className={styles.blankLine4}>&nbsp;</p>
            <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
            <p className={styles.blankLine5}>&nbsp;</p>
            <p className={styles.privacyPolicy}>Privacy Policy</p>
          </div>
        </div>
        <div className={styles.menuLinks2}>
          <div className={styles.helpMenu2}>FAQ</div>
          <div className={styles.aboutFeaturesWorksContainer2}>
            <p className={styles.account}>Account</p>
            <p className={styles.blankLine6}>&nbsp;</p>
            <p className={styles.manageDeliveries}>Manage Deliveries</p>
            <p className={styles.blankLine7}>&nbsp;</p>
            <p className={styles.orders}>Orders</p>
            <p className={styles.blankLine8}>&nbsp;</p>
            <p className={styles.payments}>Payments</p>
          </div>
        </div>
        <div className={styles.menuLinks3}>
          <div className={styles.helpMenu3}>Resources</div>
          <div className={styles.aboutFeaturesWorksContainer3}>
            <p className={styles.freeEbooks}>Free eBooks</p>
            <p className={styles.blankLine9}>&nbsp;</p>
            <p className={styles.developmentTutorial}>Development Tutorial</p>
            <p className={styles.blankLine10}>&nbsp;</p>
            <p className={styles.howTo}>How to - Blog</p>
            <p className={styles.blankLine11}>&nbsp;</p>
            <p className={styles.youtubePlaylist}>Youtube Playlist</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightChild} />
        <div className={styles.copyrightSocial}>
          <div className={styles.allRightsReservedWrapper}>
            <div className={styles.allRightsReserved}>
              Shop.co © 2000-2023, All Rights Reserved
            </div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.wrapperBadge}>
              <img
                className={styles.badgeIcon}
                loading="lazy"
                alt=""
                src="/badge.svg"
              />
            </div>
            <div className={styles.wrapperBadge1}>
              <img
                className={styles.badgeIcon1}
                loading="lazy"
                alt=""
                src="/badge-1.svg"
              />
            </div>
            <div className={styles.wrapperBadge2}>
              <img
                className={styles.badgeIcon2}
                loading="lazy"
                alt=""
                src="/badge-2.svg"
              />
            </div>
            <div className={styles.wrapperBadge3}>
              <img
                className={styles.badgeIcon3}
                loading="lazy"
                alt=""
                src="/badge-3.svg"
              />
            </div>
            <div className={styles.wrapperBadge4}>
              <img
                className={styles.badgeIcon4}
                loading="lazy"
                alt=""
                src="/badge-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
