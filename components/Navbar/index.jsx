import Link from "next/link"
import styles from "./style.module.scss"
import { VscAccount } from "react-icons/vsc"

const Navbar = () => {
  return (
    <nav className={`${styles.nav} flex justify-between items-center relative left-20 right-20 top-16 h-6 z-10`}>
        <h2 className={`${styles.navTitle}`}> MNTN </h2>
        <ul className="grid grid-cols-3 gap-9 text-lg font-bold leading-5">
            <Link href="#" passHref>
              <li> Equipment </li>
            </Link>
            <Link href="#" passHref>
              <li> About Us </li>
            </Link>
            <Link href="#" passHref>
              <li> Blog </li>
            </Link>
        </ul>
        <div className="flex gap-3 items-center mr-20 text-lg leading-6">
            <VscAccount />
            <h3> Account </h3>
        </div>
    </nav>
  )
}

export default Navbar