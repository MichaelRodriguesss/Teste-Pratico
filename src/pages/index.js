import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import globalIcone from "../../public/images/ícone.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teste-Prático</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <div className={styles.principalImageContainer}>
        <div className={styles.principalImage} />
      </div>
      <main className={styles.main}>
        <div className={styles.tagContainer}>
          <ul>
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
        </div>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipiscing elit nunc
              rhoncus aliquam arcu
            </h1>

            <div className={styles.text}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p>
                Nunc rhoncus aliquam arcu. Mauris molestie vestibulum massa,
                congue ultrices sem imperdiet dignissim. Etiam tristique arcu
                magna. Fusce euismod mattis diam, at ultrices ex varius vitae.
                Ut maximus libero nec tincidunt pulvinar. Etiam a auctor dui.
                Sed vehicula eros eu elit elementum ultricies. In egestas lacus
                dolor, in faucibus arcu scelerisque quis. Aliquam urna dolor,
                eleifend at dapibus ac, dapibus at odio. Ut condimentum
                pellentesque lacinia. Mauris tincidunt, mi id venenatis
                porttitor, nibh ipsum laoreet neque, sit amet viverra mauris leo
                vel dui. Maecenas ac lectus tincidunt, consequat quam nec,
                mollis massa.
              </p>
            </div>

            <div className={styles.text}>
              <h2>Ut finibus semper viverra.</h2>
              <p>
                Donec pellentesque finibus neque, eget fermentum massa tempor
                at. Aenean id tempor erat. Vestibulum fringilla est pulvinar
                purus viverra pharetra. Etiam ac auctor nisl. In nunc risus,
                volutpat maximus tellus consequat, placerat viverra leo. Aliquam
                ac finibus ex, non fermentum mi. Morbi maximus vel nisi quis
                fringilla. Nam hendrerit orci a elementum hendrerit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Suspendisse
                dapibus, ex non accumsan vehicula, tellus purus volutpat ante,
                sit amet tincidunt urna ante ac tortor. Donec hendrerit, odio at
                rutrum imperdiet, quam metus finibus risus, ut lobortis augue
                arcu id eros. Vestibulum nec magna blandit, venenatis dolor id,
                molestie risus.
              </p>
            </div>

            <div className={styles.text}>
              <h2>
                Fusce ut nibh ornare, ullamcorper velit vitae, dignissim tellus.
              </h2>
              <p>
                Nullam mattis auctor leo, sit amet aliquet odio pellentesque ut.
                Mauris molestie turpis eget egestas venenatis. Duis nec elit
                consequat, iaculis nibh quis, tristique ex. In quis bibendum
                nisi, in aliquet mauris. Aliquam volutpat, elit at sagittis
                euismod, est mi ornare lectus, a hendrerit turpis urna id urna.
                Integer neque tortor, vestibulum sed suscipit eu, porta id orci.
                Sed a neque turpis. Maecenas id quam et lorem bibendum pulvinar
                sed et orci. Vestibulum id urna eget dui pulvinar luctus.
                Praesent a mi sed urna condimentum eleifend non quis urna.
              </p>

              <p>
                Sed tempor nulla turpis, eu molestie mauris tincidunt a. Nullam
                pretium lectus quis eros auctor, at congue leo mattis. Phasellus
                tincidunt justo id efficitur interdum. Nulla vulputate tortor a
                quam commodo hendrerit. Vivamus ornare est lorem, ut lobortis
                dui ultricies quis. Proin mollis tempus lorem, a eleifend odio
                mattis vitae. Suspendisse blandit dui id rhoncus laoreet.
                Praesent pharetra augue nulla, mollis rhoncus augue scelerisque
                at. Quisque in vulputate nulla, sed mollis dolor. Maecenas
                finibus odio quis orci vulputate, vel commodo nisi tempus. In
                vel est vel magna finibus placerat. Fusce blandit nisi vitae
                sapien faucibus, eget pulvinar justo aliquet.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.shutterstock}>
          <div className={styles.shutterstockContainer}>
            <Image
              src={globalIcone}
              width={39}
              height={39}
              alt="Global Image"
              className={styles.globalIcone}
            />
            <div className={styles.imageText}>
              <h2>Lorem ipsum dolor amet consectetur</h2>
              <p>adipiscing elit vitae mattis</p>
              <ul>
                <Link href="#">
                  <li>Lorem ipsum</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.shutterstockImage} />
        </section>
        <section>
          <div></div>
        </section>
      </main>
    </div>
  );
}