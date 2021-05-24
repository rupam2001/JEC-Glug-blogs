import Head from 'next/head'
import siteInfo from "../public/static/siteinfo.json"
import Layout from '../components/layout'
import Footer from '../components/footer'
import Link from 'next/link'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className="container-fluid h-100" id="wrapper">
      <Head>
        <title>{siteInfo.site_title}</title>
        <meta name="description" content={siteInfo.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>


          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-sm-1 ">

              <h1>Welcome to Glug blogs</h1>
              <p> Blogs written by members of glug</p>

            <a href="/blogs" className="btn btn-outline-primary">Read Blogs </a>

            </div>
            
            <div className="col-md-6 order-1 order-sm-2 logo ">
            <img src="/logo.png" class="img" alt="logo"></img>
            </div>
          </div>





      </Layout>
    </div>
  )
}
