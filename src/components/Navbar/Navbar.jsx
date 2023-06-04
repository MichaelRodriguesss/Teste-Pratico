import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import navbarIcon from "../../../public/images/vector.png";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <ul>
          <Link href="#" className={styles.active}>
            <li>Lorem ipsum</li>
          </Link>
          <Link href="#">
            <li>Lorem ipsum</li>
          </Link>
          <Link href="#">
            <li>Lorem ipsum</li>
          </Link>
          <Link href="#">
            <li>Lorem ipsum</li>
          </Link>
          <Link href="#">
            <li>Lorem ipsum</li>
          </Link>
        </ul>

        <div className={styles.search}>
          <input type="text" placeholder="Buscar" />
          <Image
            src={navbarIcon}
            width={1920}
            height={76}
            alt="Header Image"
            className={styles.searchIcon}
          />
        </div>
      </div>
    </nav>
  );
}
