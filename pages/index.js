import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mytholotls</title>
        <meta
          name="Your stop for all things axolotls."
          content="E-commernce and learning center for axolotls."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Welcome!</h3>
        <p>
          We are a Veteran-owned & operated axolotl breeder. All of our axolotls
          are raised in a happy, comfortable environment and given a LOTL of
          love! We are always excited to meet fellow axolotl enthusiasts and
          share our passion for these adorable little creatures! Visit our STORE
          to see our lovely ‘lotls we have for sale.
        </p>
      </main>

      <footer></footer>
    </div>
  );
}
