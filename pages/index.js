import Head from 'next/head'
import siteInfo from "../public/static/siteinfo.json"
import Layout from '../components/layout'
import Footer from '../components/footer'
import Link from 'next/link'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteInfo.site_title}</title>
        <meta name="description" content={siteInfo.about} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <div>
            <h1>Welcome to Glug blogs</h1>
            <p>Welcome to JEC Glug</p>
            <h3>Blogs Written by memebers of Glug</h3>
            <div className="read-box">
              <Link href="/blogs">
                <a>
                  <h3 className="read-blg">Read Blogs</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>

      </Layout>
    </div>
  )
}
