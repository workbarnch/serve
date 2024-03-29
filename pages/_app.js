import  '../styles/style.scss';
import Layout from "../src/components/layouts/Layout";
function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
