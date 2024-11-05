import { AnimatePresence } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import PageTransition from '../components/PageTransition'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

export default MyApp 