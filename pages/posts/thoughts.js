import Link from 'next/link'

export default function thoughts() {
    return(
        <main>
            <h1>My Thoughts </h1>
            <p>
              <Link href="/"><a>Back to home</a></Link>
            </p>
        </main>
    ) 
}