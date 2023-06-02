import "../styles/globals.scss";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
