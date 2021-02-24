import Head from "next/head"

import { blogPosts } from "../../data/data"


export default function BlogPage({title, date, content, image, slug}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto px-4'>
        <h1 className='text-6xl text-center py-4 text-purple-400 uppercase mt-20'>
          {title}
        </h1>
        <h6 className='text-center font-extralight text-xs text-gray-900'>
          {date}
        </h6>
        <img className='py-4 object-cover' src={image} alt={slug} />
        <div className='m-auto py-4'>{content}</div>
      </main>
    </div>
  )
}
export async function getStaticProps(context) {
  const { params }  = context 
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}
