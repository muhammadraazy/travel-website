import {useState, useRef, useEffect, Fragment} from "react"
import Link from "next/link"
import styles from "./style.module.scss"

import { VscAccount } from "react-icons/vsc"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { CgDetailsMore } from "react-icons/cg"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const navRef = useRef(null);

    const showNavbar = () => {
        setShowNav(!showNav)
    }
    
  return (
    <Fragment>

      <CgDetailsMore 
          onClick={showNavbar} 
          className={`${styles.navToggle} text-5xl relative top-6 text-white z-20 left-10 cursor-pointer md:hidden`} 
        />

      <nav className={`${styles.nav} ${ showNav ? styles.showNav : styles.hideNav } `}>
          <h2 className={styles.navTitle}> MNTN </h2>
          <ul className={styles.navLinks}>
             <li className="text-lg leading-6">About</li>
             <li className="text-lg leading-6">Equipment</li>
             <li className="text-lg leading-6">Blog</li>
          </ul>
          <div className={`${styles.navRight} text-lg leading-5`}>
             <VscAccount />
             <h3> Account </h3>
          </div>
      </nav>
      
    </Fragment>
  )
}

export default Navbar