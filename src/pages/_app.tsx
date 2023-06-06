import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import {Layout} from '@/components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <Layout>
<Head> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
</Head>
    <Component {...pageProps} />
    </Layout>
    );
}
