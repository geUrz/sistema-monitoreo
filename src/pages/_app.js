import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import SegoviaProvider from "./residenciales/segovia/Provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SegoviaProvider> */}
      <Component {...pageProps} />;{/* </SegoviaProvider> */}
    </>
  );
}
