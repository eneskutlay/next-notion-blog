import "../styles/globals.css";
import PageLayout from "../layout/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
