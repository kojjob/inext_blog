import Head from "next/head"

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-2xl text-center my-4'>About Me</h1>
      </main>
    </div>
  )
}
