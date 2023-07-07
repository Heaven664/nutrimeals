import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <div className={styles.upperFooterContainer}>
          <div className={styles.footerLinksContainer}>
            <p>Quick links</p>
            <ul className={styles.footerLinksList}>
              <li>Contact</li>
              <li>FAQ</li>
              <li>About us</li>
              <li>How it works</li>
              <li>Order Schedule</li>
              <li>Shipping locations</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Friends & Partners</li>
              <li>Terms of Service</li>
              <li>Refund policy</li>
              <li>Allergy Policy</li>
            </ul>
          </div>
          <div className={styles.footerSubscribeContainer}>
            <p>sign up for offers</p>
            <div className={styles.footerSubscribeInput}>
              <input type="text" placeholder="Email address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className={styles.lowerFooterLayout}>
          <div className={styles.lowerFooterContainer}>
            <div>Canada CAD$</div>
            <div>Payment Methods</div>
            <div>2023, nutrimeals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
