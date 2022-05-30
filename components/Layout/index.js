import Head from "next/head"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <meta name="music dashboard" content="building a music app dashboard" />
            <title> Travel Ling </title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main>
          { children }
        </main>
        <footer>
           <Footer />
        </footer>
    </div>
  )
}

export default Layout