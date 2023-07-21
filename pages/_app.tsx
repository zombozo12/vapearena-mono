import "../styles/tailwind.css"
import { AppProps } from "next/app"
import Head from "next/head"
import { Navigation } from "../components/Navigation/Navigation"

function MyApp({ Component, pageProps: { ...pageProps }, router }: AppProps) {
  const { pathname } = router
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Next.js Enterprise Boilerplate</title>
      </Head>
      {pathname !== "/auth/in" && pathname !== "/auth/up" && (
        <header className="bg-white">
          <Navigation is_logged_in={true} />
        </header>
      )}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
