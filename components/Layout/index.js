import Head from "next/head"

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <meta name="music dashboard" content="building a music app dashboard" />
            <title> Music Dashboard </title>
        </Head>
        { children }
    </div>
  )
}

export default Layout