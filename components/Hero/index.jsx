import Image from "next/image"
import styles from "./style.module.scss"

import { heroBg, MG, VG } from '../../assets'
import {GrTwitter, GrInstagram} from "react-icons/gr"
import {AiOutlineArrowDown} from "react-icons/ai"

const Hero = () => {

  return (
    <div className={`${styles.hero} absolute top-px`}>
       <div className={`${styles.heroContents} flex justify-between absolute top-80 w-full`}>
        <div className={`${styles.heroLeft} flex flex-col justify-between absolute left-8 w-40 items-center gap-14`}>
           <h3 className={`${styles.heroLeft_title} text-lg leading-6 font-bold rotate-90`}>
              Follow Us
           </h3>
           <div className={`${styles.heroLeft_icons} flex flex-col gap-6`}>
              {/* icons */}
              <GrInstagram className="text-xl cursor-pointer hover:scale-150 transition-transform duration-500" />
              <GrTwitter className="text-xl cursor-pointer hover:scale-150 transition-transform duration-500" />
           </div>
        </div>
        <div className={`${styles.heroCenter} flex flex-col h-52 absolute`}>
           <div className={`${styles.small_title} flex items-center gap-5`}>
              <hr />
              <h4> A Hiking Guide </h4>
           </div>
           <div className={`${styles.large_title}`}>
               <h2> Be Prepared For The Mountains And Beyond </h2>
           </div>
           <div className="scroll_down flex items-center gap-4 mt-10">
               <span> scroll down </span>
               <AiOutlineArrowDown />
           </div>
        </div>
        <div className={`${styles.heroRight}`}>
            <div className="slide_title ml-10 flex flex-col justify-between h-full text-lg">
                <p className="text-lg leading-6"> Start </p>
                <p className="text-lg leading-6"> 01 </p>
                <p className="text-lg leading-6"> 02 </p>
                <p className="text-lg leading-6"> 03 </p>
            </div>
            <div className={`${styles.line} flex flex-col`}>
              <hr />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero