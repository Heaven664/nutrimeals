import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <div className={styles.upperLayout}>
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
                <input type="email" placeholder="Email address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lowerFooterLayout}>
          <div className={styles.lowerFooterContainer}>
            <div className={styles.currencyContainer}>
              <p>Canada (CAD $)</p>
            </div>
            <div className={styles.paymentsContainer}>
              <ul>
                <li>
                  <div className={styles.paymentImageContainer}>
                    <Image
                      width={70}
                      height={70}
                      alt="visa"
                      src="/images/footer/visa.png"
                    />
                  </div>
                </li>
                <li>
                  <div className={styles.paymentImageContainer}>
                    <Image
                      width={70}
                      height={70}
                      alt="master-card"
                      src="/images/footer/mastercard.webp"
                    />
                  </div>
                </li>
                <li>
                  <div className={styles.paymentImageContainer}>
                    <Image
                      width={70}
                      height={70}
                      alt="paypal"
                      src="/images/footer/paypal.png"
                    />
                  </div>
                </li>
                <li>
                  <div className={styles.paymentImageContainer}>
                    <Image
                      width={70}
                      height={70}
                      alt="apple-pay"
                      src="/images/footer/apple-pay.png"
                    />
                  </div>
                </li>
                <li>
                  <div className={styles.paymentImageContainer}>
                    <Image
                      width={70}
                      height={70}
                      alt="google-pay"
                      src="/images/footer/google-pay.jpeg"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.rightsContainer}>
              <p>© 2023, nutrimeals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;