import Head from "next/head"
import { useRecoilValue } from "recoil"
import { themeState } from "../recoil/atoms"
import { GlobalStyle } from "../styles/reset"
import { Container } from "../styles/layoutStyle"
import { Theme, DarkTheme } from "../styles/theme"
import { ThemeProvider } from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = ({ children, title }) => {
  const darkTheme = useRecoilValue(themeState)

  return (
    <ThemeProvider theme={!darkTheme ? Theme : DarkTheme}>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next" />
        <meta name="og:title" content="Next" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
