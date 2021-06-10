import '../styles/globals.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import AOS from "aos"
import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Helmet } from 'react-helmet'

const loadingBarRef = React.createRef(null)

function MyApp({ Component, pageProps }) {
  useEffect(() => {

  }, [])
  return (
    <>

      <LoadingBar color='#00910f' ref={loadingBarRef} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
export { loadingBarRef }
