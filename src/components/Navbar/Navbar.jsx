import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
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
              src="/images/Vector.png"
              width={1920}
              height={76}
              alt="Search Image"
              className={styles.searchIcon}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
