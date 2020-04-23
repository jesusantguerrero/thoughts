import Link from 'next/link'
import Head from 'next/head'
import Layout from './../../components/layout'

export default function thoughts() {
    return(
        <Layout>
            <Head>
                <title> .:IC Thoughts - List :.</title>
            </Head>
            <main>
                <h1 className="title"> 
                <span className="emoji">📕</span>
                    My Thoughts
                </h1>
                <h2> <small><Link href="/"><a>Back to home</a></Link></small></h2>
          
            </main>
        </Layout>
    ) 
}