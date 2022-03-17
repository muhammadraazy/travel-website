import Head from 'next/head'
import Image from 'next/image'
import { Contents, RightSide, Sidebar } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <Sidebar />
       <Contents />
       <RightSide />
    </div>
  )
}
