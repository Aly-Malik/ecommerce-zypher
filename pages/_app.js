import '../styles/globals.css'
import React from 'react'
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return( 
  <Layout>
  <Component {...pageProps} />
  </Layout>
)}

export default MyApp
