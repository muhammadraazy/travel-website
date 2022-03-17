import { HiLocationMarker } from "react-icons/hi"
import { IoIosBrowsers, IoIosAlbums } from "react-icons/io"
import { FaPodcast } from "react-icons/fa"
import { ImRadioChecked2 } from "react-icons/im"
import { BsFileMusicFill, BsFillPeopleFill } from "react-icons/bs"


export const sidebarBodyTop = [
    { id: 1, title: 'Home', icon: <AiTwotoneHome className="text-3xl text-white" /> },
    { id: 2, title: 'Discover', icon: <HiLocationMarker className="text-3xl text-white" /> },
    { id: 3, title: 'Browse', icon: <IoIosBrowsers className="text-3xl text-white" /> },
    { id: 4, title: 'Podcast', icon: <FaPodcast className="text-3xl text-white" /> },
    { id: 5, title: 'Radio', icon: <ImRadioChecked2 className="text-3xl text-white" /> },
]

export const sidebarBodyBottom = [
    { id: 1, title: 'Albums', icon: <IoIosAlbums className="text-3xl text-white" /> },
    { id: 2, title: 'Songs', icon: <BsFileMusicFill className="text-3xl text-white" /> },
    { id: 3, title: 'Artist', icon: <BsFillPeopleFill className="text-3xl text-white" /> },
]