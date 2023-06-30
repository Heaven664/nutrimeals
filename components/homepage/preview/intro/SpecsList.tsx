import { JSX } from "react";
import Image from "next/image";

import styles from "./SpecsList.module.css";

const SpecsList = (): JSX.Element => {
  return (
    <ul className={styles.specsList}>
      <li>
        <div className={styles.specImage}>
          <Image
            src="/images/specs/spec1.png"
            width={100}
            height={100}
            alt="spec1"
          />
        </div>
        <div className={styles.specText}>
          <p>
            Meals are <strong>always</strong> delivered fresh, never frozen
          </p>
        </div>
      </li>
      <li>
        <div className={styles.specImage}>
          <Image
            src="/images/specs/spec2.png"
            width={100}
            height={100}
            alt="spec2"
          />
        </div>
        <div className={styles.specText}>
          <p>Bigger serving sizes</p>
        </div>
      </li>
      <li>
        <div className={styles.specImage}>
          <Image
            src="/images/specs/spec3.png"
            width={100}
            height={100}
            alt="spec3"
          />
        </div>
        <div className={styles.specText}>
          <p>No additives or preservatives</p>
        </div>
      </li>
      <li>
        <div className={styles.specImage}>
          <Image
            src="/images/specs/spec4.png"
            width={100}
            height={100}
            alt="spec4"
          />
        </div>
        <div className={styles.specText}>
          <p>
            <strong>Fresh ingredients</strong> used to make each meal
          </p>
        </div>
      </li>
      <li>
        <div className={styles.specImage}>
          <Image
            src="/images/specs/spec5.png"
            width={100}
            height={100}
            alt="spec5"
          />
        </div>
        <div className={styles.specText}>
          <p>Delivered right to your door, no grocery store, no prep</p>
        </div>
      </li>
    </ul>
  );
};

export default SpecsList;
