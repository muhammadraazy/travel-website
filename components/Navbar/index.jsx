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

    useEffect(() => {
       if(!showNav) {
         navRef.current.style.display = "hidden"
        }

        navRef.current.style.visibility = "visible"
        console.log('deleted')

    }, [showNav])

  return (
    <Fragment>

      <CgDetailsMore 
          onClick={showNavbar} 
          className="text-5xl relative md:hidden sm:hidden top-6 text-white z-20 left-10 cursor-pointer" 
        />

      <nav ref={navRef} className={`${styles.nav} transition-all duration-500 ${ showNav ? "hideNav" : 'showNav' } flex justify-between items-center relative left-20 right-20 top-16 h-6 z-10`}>
          <h2 className={`${styles.navTitle}`}> MNTN </h2>
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-9 text-lg font-bold leading-5">
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
          <div className="flex gap-3 items-center md:mr-20 text-lg leading-6">
              <VscAccount />
              <h3> Account </h3>
          </div>
      </nav>
    </Fragment>
  )
}

export default Navbar