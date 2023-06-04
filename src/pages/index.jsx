import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
// import globalIcone from "../../public/images/ícone.png";
import Image from "next/image";
import check from "../../public/images/check.png";
import cardOne from "../../public/images/card1.png";
import cardTwo from "../../public/images/card2.png";
import cardThree from "../../public/images/card3.png";
import { useState, useEffect } from "react";
import { Api } from "../providers/Api/api";

import Card from "../components/Card/Card";

export default function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Api.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        console.log(response);
        return setInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Teste-Prático</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <main className={styles.principalImageContainer}>
        <div className={styles.principalImage} />
      </main>
      <section className={styles.infoPage}>
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
              <h2>{info.length != 0 && info[0].title}</h2>
              <p>{info.length != 0 && info[0].body}</p>
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
        <section className={styles.shutterstockContainer}>
          <div className={styles.shutterstock}>
            <div className={styles.shutterstockContent}>
              <Image
                // src={globalIcone}
                src="/images/ícone.png"
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
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.text}>
              <h2>Vivamus convallis nulla id est egestas mattis.</h2>
              <p>
                Nullam eu porttitor mauris, vitae sodales dui. Nunc malesuada,
                diam sit amet laoreet rhoncus, arcu metus vehicula ipsum, a
                dictum libero eros sit amet mi. Maecenas elementum, ex nec porta
                fermentum, lacus urna porta ante, imperdiet rutrum sapien mauris
                at ligula. In justo orci, rutrum ac leo in, iaculis pulvinar
                nisi. In id mi tristique, dictum ligula eget, gravida arcu.
                Vivamus laoreet fringilla arcu ut consequat. Nam nec venenatis
                neque. Fusce quis nunc nec velit finibus consectetur. Nulla sem
                diam, laoreet nec elit id, semper malesuada neque. Mauris sit
                amet viverra quam, at egestas mauris. Morbi convallis nisl non
                metus suscipit, ac dapibus justo dictum.
              </p>
            </div>

            <div className={styles.checkText}>
              <p>
                <Image
                  src={check}
                  width={12}
                  height={9}
                  alt="Global Image"
                  className={styles.check}
                />
                Suspendisse tempor justo sed dui bibendum
              </p>
              <p>
                <Image
                  src={check}
                  width={12}
                  height={9}
                  alt="Global Image"
                  className={styles.check}
                />
                Integer eget nibh facilisis posuere
              </p>
              <p>
                <Image
                  src={check}
                  width={12}
                  height={9}
                  alt="Global Image"
                  className={styles.check}
                />
                In venenatis ex nisi ut aliquam
              </p>
              <p>
                <Image
                  src={check}
                  width={12}
                  height={9}
                  alt="Global Image"
                  className={styles.check}
                />
                Suspendisse facilisis mauris eget augue
              </p>
            </div>

            <div className={styles.text}>
              <p>
                Ut laoreet risus vel mi rhoncus condimentum. Nunc eget urna
                enim. Donec et dui erat. Suspendisse pretium, nulla eget auctor
                finibus, arcu velit sagittis mi, id viverra augue magna sit amet
                nisl. Mauris mattis ut tellus sed imperdiet. Ut porttitor ex eu
                dolor fringilla, in commodo lectus lacinia. Integer feugiat
                libero placerat sem rutrum posuere. Donec consectetur congue
                elit in dapibus.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.sectionCards}>
          <h2 className={styles.knowMore}>Você pode se interessar também</h2>
          <div className={styles.cardsContainer}>
            <Card
              title={info[52]?.title}
              body={info[52]?.body}
              imageSrc={cardOne}
            />
            <Card
              title={info[7]?.title}
              body={info[7]?.body}
              imageSrc={cardTwo}
            />
            <Card
              title={info[14]?.title}
              body={info[14]?.body}
              imageSrc={cardThree}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
