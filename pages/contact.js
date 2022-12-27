import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import { Button, Grid } from '@nextui-org/react';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    if (typeof window !== "undefined") {
        // browser code
        document.getElementById("html").style.overflow = "scroll";
        document.getElementById("body").style.overflow = "hidden";
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
                    <a href='https://jaavin.ca/'>
                        <Button color="gradient" auto ghost>
                            Click here for my simple portfolio!
                        </Button>
                    </a>
                    <Grid.Container gap={1} justify="center">
                        <Grid xs={12} sm={4}>
                            <a href='https://github.com/UnloadingGnat'>
                                <Card1 />
                            </a>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <a href='https://mailhide.io/e/oWP2nJjq'>
                                <Card2 />
                            </a>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <a href='Jaavin_Mohanakumar_Resume.pdf'>
                                <Card3 />
                            </a>
                        </Grid>
                        <Grid xs={12} sm={7}>
                            <Card5 />
                        </Grid>
                    </Grid.Container>


                </div>
                <div className={styles.whitespace}></div>


                <div className={styles.grid}>
                    <a
                        href="/projects"
                        className={styles.card}
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Projects
                        </h2>
                    </a>

                    <Link
                        href="/"
                        className={styles.card}
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            About
                        </h2>
                    </Link>

                    <a
                        href="#/"
                        className={styles.cardactive}
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Contact
                        </h2>
                    </a>

                </div>
            </main>
        </>
    )
}
