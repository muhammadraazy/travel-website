import { useState } from "react"
import styles from "./style.module.scss"
import Image from "next/image"

import { content1 } from "../../assets"

const SectionOne = ({section: { id, src, smallTitle, largeTitle, desc, Icon, more }}) => {
    const [reverse, setReverse] = useState(true)

    console.log(id)

    console.log(content1)

  return (
    <div className={`${styles.sectionOne} } `}>
        <h2 className={`${styles.number} text-black`}> { id } </h2>
            <div className={`${styles.sectionContent} ${ reverse && 'reverse'}`}>
                <div className={`${styles.sectionLeft}`}>
                    <div className={`${styles.smallTitle} capitalize`}>
                        <hr />
                        <h4> { smallTitle } </h4>
                    </div>
                    <div className={`${styles.largeTitle}`}>
                        <h2> { largeTitle } </h2>
                    </div>
                    <div className={`${styles.description}`}>
                        <p> { desc } </p>
                    </div>
                    <div className={`${styles.moreContent}`}>
                        <p> { more } </p>
                        <Icon />
                    </div>
                </div>
                <div className={`${styles.sectionRight}`}>
                    <Image src={src} blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontent1.213e523c.png&w=8&q=70' alt="image" height={720} width={566} />
                </div>
            </div>
        </div>
  )
}

export default SectionOne