import styles from "./KioskForm.module.css";

const KioskForm = () => {
  return (
    <form action="" className={styles.visitForm}>
      <div className={styles.fieldContainer}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" placeholder="Enter your number" />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email address" />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="messages">Message:</label>
        <textarea id="messages" placeholder="Enter your text..." />
      </div>
      <button type="button" id={styles.submitButton}>Submit</button>
    </form>
  );
};

export default KioskForm;
