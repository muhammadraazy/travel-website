import { Fragment } from "react"
import styles from "../../styles/Sidebar.module.scss";
import { sidebarBodyTop } from "./sidebarData.js"

import { FiSearch, FiMoreHorizontal } from "react-icons/fi"
import { GrApple } from "react-icons/gr"
import { AiOutlineArrowLeft } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} p-4 bg-cyan-400 flex flex-col justify-between`}>
        <div className={`${styles.sidebar_header} flex flex-col justify-between`}>
           <div className="header_details flex justify-between items-center">
              <div className="header_title flex items-center">
                  <GrApple className="text-3xl text-white" />
                  <h2 className="text-3xl text-white"> Music </h2>
              </div>
              <div className="header_arrow">
                  <AiOutlineArrowLeft className="text-3xl text-white" />
              </div>
           </div>
           <div className={`${styles.header_search} flex items-center px-2 py-1 ml-4 rounded-lg`}>
               <FiSearch className="text-3xl text-white" />
               <input className={`${styles.headerSearch_input} focus:outline-0 text-white `} placeholder="Search ..." />
           </div>
        </div>

        <div className="sidebar_body">
            <div className="sidebarBody_top">
               <div className="sidebarBody_topHead flex justify-between items-center mb-4">
                  <p className="text-gray-400 font-semibold"> Menu: <span className="text-white foont-semibold">5</span> </p>
                  <FiMoreHorizontal />
               </div>
               <div className="sidebarBody_topBottom grid grid-col-1 gap-y-10">
                       { sidebarBodyTop.map(bodyTop => (
                      <div className="topBottom_item flex items-center">
                            { bodyTop.icon }
                            <h2 className="text-md text-white ml-3 font-semibold"> { bodyTop.title } </h2>
                      </div>
                       )) }
               </div>
            </div>
            <div className="sidebarBody_bottom">

            </div>
        </div>
    </div>
  )
}

export default Sidebar