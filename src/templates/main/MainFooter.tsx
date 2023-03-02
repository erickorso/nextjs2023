import Link from 'next/link'
import style from './style.module.scss'
export default function MainFooter() {
  return (
    <footer className={style.container}>
      <ul>
        <li>
          <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Faq
          </Link>
        </li>
        <li>
          <Link href="/store" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Store
          </Link>
        </li>
        <li>
          <Link href="/test" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Test
          </Link>
        </li>
      </ul>
    </footer>
  )
}
