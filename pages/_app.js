import Link from "next/link"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='bg-purple-900'>
        <ul className='flex p-4 justify-center space-x-4 .'>
          <li className=''>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
