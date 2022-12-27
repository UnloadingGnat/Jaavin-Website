import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  if (typeof window !== "undefined") {
    // browser code
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("body").style.overflow = "scroll";
  }
  return (
    <>
      <Head>
        <title>Jaavin Homepage</title>
        <meta name="description" content="Jaavin's Homepage" />
        <meta property="og:image" content="metaog.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.content}>
          <div className={styles.header}>
            Hello👋, I&apos;m Jaavin. 
          </div>
          <div className={styles.headerinfo}>
            I love solving problems and learning! I am an Engineering 1 student at McMaster University interested in robotics and rockets! 
          </div>
          <div className={styles.images}>
            <div className={styles.gallery}>
              <img src='jaavin.png'></img>
              <div className={styles.subtitle}>Me :)</div>
            </div>
            <div className={styles.gallery2}>
              <img src='1325.jpg'></img>
              <div className={styles.subtitle2}>1325 at
                2022 FIRST Ontario Provincial Championship</div>
            </div>
            <div className={styles.gallery3}>
              <img src='macrocket.png'></img>
              <div className={styles.subtitle2}>Marauder 1 at Launch Canada</div>
            </div>
          </div>
          <div className={styles.bio}>
            <div className={styles.biotitle}>What I&apos;m Doing Now</div>
            <div className={styles.biocontent}>
              I am currently the Assistant Project Manager for <a className={styles.link} href='https://www.macrocketry.ca/'>McMaster Rocketry Team</a>. A member of the <a className={styles.link} href='https://www.eng.mcmaster.ca/programs/engineering-i#Our-Team'>Engineering 1 Operating Committee</a>. As well as a <a className={styles.link} href='https://api.unibuddy.co/og/mcmaster-university/buddies/students/634df0c2ef5b700e838b408e?buddyPosition=share'>Student Ambassador</a>  for the Department of Engineering.
            </div>
            <div className={styles.whitespace}></div>
          </div>


        </div>


        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects
            </h2>
          </a>

          <a
            href="#/"
            className={styles.cardactive}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About
            </h2>
          </a>

          <Link
            href="/contact"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact
            </h2>
          </Link>

        </div>
      </main>
    </>
  )
}
