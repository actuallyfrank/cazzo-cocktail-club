import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cazzo Cocktail Club</title>
        <meta
          name="description"
          content="De mooiste cocktailbar van Nederland. SCHERPE PRIJS Met onze scherpe tarieven gegarandeerd de beste prijs/kwaliteit-verhouding. Bekijk foto's van onze cocktails, de cocktailbar en de heerlijke cocktails bekijk de galerij Wij hebben voor meer dan 2.500 klanten gewerkt. Bekijk er een aantal."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
