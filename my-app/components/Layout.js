import NavBar from "./NavBar";
import Footer from "./Footer";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico"></link>
        <title>PokeNext.JS</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main> 
      {/** renderiza o que está dentro do index.tsx */}
      {/** este comnponente Layout recebe este chidren que exibimos na linha acima dentro do arquivo _app.tsx */}
      <Footer />
    </>
  );
}
