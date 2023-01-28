import { useRouter } from 'next/router';
import { useRef, Suspense } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ThemeProvider from "../context/theme";
import Layout from '../layout/Layout';
import Loading from "../components/Loading";

import '../styles/globals.css'
import '../styles/home.css';

const MyApp = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return (
    <ThemeProvider>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        location={asPath}
        onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        containerRef={containerRef}
      >
        <Layout containerRef={containerRef}>
          <Component {...pageProps} />
        </Layout>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  )
}

export default MyApp
