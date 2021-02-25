import Head from "next/head"
import Link from "next/link"

import { blogPosts } from "../data/data"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-5'>
        <h1>Kojo's Blog Corner</h1>
      </main>
      <div className=''>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <div className=''>
              <div classNmae='contents'>
                <div className='p'>
                  <Link href={`/blog/${item.slug}`}>
                    <a>
                      <img
                        className='object-cover'
                        src={item.image}
                        alt={item.slug}
                        width='100%'
                      />
                    </a>
                  </Link>
                  <div class='p-8'>
                    <h1 className=''>
                      <Link href={`/blog/${item.slug}`}>
                        <a class=''>
                          {item.title}
                        </a>
                      </Link>
                    </h1>
                    <div className=''>
                      {item.date.toString()}
                    </div>
                    <p className=''>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
{/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div> */}
