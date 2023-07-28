import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.productLayout}>
      <div className={styles.productContainer}>
        <div className={styles.productImages}>Images</div>
        <div className={styles.productDetails}>
          <div className={styles.productHeader}>
            <h1>Autumn Bowl</h1>
            <h2>$16.99</h2>
          </div>
          <div>
            <label htmlFor="quantity-input">Quantity</label>
            <input id="quantity-input" type="number" />
          </div>
          <div>
            <button>Add to card</button>
          </div>
          <div>
            <p>
              Enjoy this delicious ready to eat meal anytime! Oven baked
              seasoned chicken with roasted sweet potatoes, Brussels sprouts,
              sautéed apples and onions, and crispy bacon. Take your meal prep
              to the next level with this delicious protein packed meal!
            </p>
            <p>No modifications are available for this dish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
