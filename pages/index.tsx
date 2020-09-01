import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Index
        </h1>
        
        <p>Probando Primereact sobre NextJS</p>
      </main>
    </div>
    </Layout>
  )
}
