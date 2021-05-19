import '../styles/globals.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import AOS from "aos"
import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const loadingBarRef = React.createRef(null)

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({

    });
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
