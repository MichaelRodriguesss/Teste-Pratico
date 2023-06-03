import styles from "../../styles/Home.module.scss";
import arrow from "../../../public/images/arrow.png";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, body, imageSrc }) {
  return (
    <div className={styles.cardsContent}>
      <div className={styles.card}>
        <div>
          <Link href="#" className={styles.cardOrangeLink}>
            <p>Lorem ipsum</p>
          </Link>
          <Image
            src={imageSrc}
            width={326}
            height={170}
            alt="Card Image"
            className={styles.cardImage}
          />
        </div>

        <div className={styles.cardText}>
          <h2>{title && title}</h2>
          <p>{body && body}</p>
        </div>

        <div className={styles.cardLinkContainer}>
          <Link href="#" className={styles.cardLink}>
            <p>Leia mais</p>
            <Image
              src={arrow}
              width={12}
              height={9}
              alt="Card Image"
              className={styles.arrow}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
