import Head from 'next/head'
import siteInfo from "../public/data/siteinfo.json"
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteInfo.site_title}</title>
        <meta name="description" content={siteInfo.about} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <div>
            <h1>Welcome to Glug blogs</h1>
            <p>@JEC</p>
            <h3>Blogs Written by memebers of Glug</h3>
          </div>
        </div>
      </Layout>
    </div>
  )
}
