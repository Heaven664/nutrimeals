import { JSX } from "react";
import styles from "./CarouselElement.module.css";

interface CarouselElementProps {
  clientName: string;
  feedback: string;
  orders: number;
}

const CarouselElement = ({
  clientName,
  feedback,
  orders,
}: CarouselElementProps): JSX.Element => {
  return (
    <div className={styles.elementContainer}>
      <div className={styles.feedbackTextContainer}>
        <p>{`"${feedback}" - ${clientName}(${orders} orders)`}</p>
      </div>
    </div>
  );
};

export default CarouselElement;
