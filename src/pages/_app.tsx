// pages/_app.js

import { AppProps } from "next/app";
// import '../styles.css'; // Import any global styles or CSS files

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
