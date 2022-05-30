import { useState } from "react"
import {Hero} from "../components"
import { Section } from "../sections"

import { AiOutlineArrowRight } from "react-icons/ai"
import { content1, content2, content3 } from "../assets"
// import 

const sectionData = [
  { 
    id: '01', 
    src: content1, 
    smallTitle: 'Get Started', 
    largeTitle: 'What level of hiker are you?', 
    desc: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ', 
    more: 'read more',
    Icon: AiOutlineArrowRight 
  },
  { 
    id: '02', 
    src: content2, 
    smallTitle: 'Hiking Essentials', 
    largeTitle: 'Picking the right Hiking Gear!', 
    desc: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Lets start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.', 
    more: 'read more',
    Icon: AiOutlineArrowRight 
  },
  { 
    id: '03', 
    src: content3, 
    smallTitle: 'Where You Go Is The Key', 
    largeTitle: 'Understand Your Map & Timing', 
    desc: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..', 
    more: 'read more',
    Icon: AiOutlineArrowRight 
  }
]

const Home = () => {

  return (
    <div className="home">
       <Hero />
       { sectionData.map(section => (
         <Section section={section} />
       )) }
    </div>
  )
}

export default Home