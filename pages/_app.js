import Link from "next/link"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='navbar'>
        <ul className=''>
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
