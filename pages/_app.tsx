import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Braulo</title>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  if (context.ctx.res?.statusCode === 404) {
    context.ctx.res.writeHead(302, { Location: "/" });
    context.ctx.res.end();
    return;
  }

  return { ...appProps };
};

export default MyApp;
