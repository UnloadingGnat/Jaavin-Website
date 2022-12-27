import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import { Button, Grid } from '@nextui-org/react';
import Link from 'next/link'
import { Card, Col, Row, Text } from "@nextui-org/react";



export const Card1 = () => (
    <Card>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Take a look at my
                </Text>
                <Text h4 color="white">
                    Github
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="github.webp"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />

    </Card>
);

export const Card2 = () => (
    <Card css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Send me an
                </Text>
                <Text h4 color="white">
                    Email
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="email.webp"
            width="100%"
            height={340}
            objectFit="cover"
        />
    </Card>
);


export const Card3 = () => (
    <Card css={{ bg: "$black", w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Download my
                </Text>
                <Text h4 color="white">
                    Resume
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="resume.webp"
            width="100%"
            height={340}
            objectFit="cover"
        />
    </Card>
);


export const Card5 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                    Connect with me on
                </Text>
                <Text h3 color="white">
                    Linkedin
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="linked.png"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Linkedin Logo"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Row>
                        <Col span={3}>
                            <Card.Image
                                src="linklogo.png"
                                css={{ bg: "black", br: "50%" }}
                                height={40}
                                width={40}
                                alt="linkedin"
                            />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <a href="https://www.linkedin.com/in/jaavin/">
                            <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            >

                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Connect
                                </Text>
                            </Button>
                        </a>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);

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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.headertext}>
                            <Text
                                h1
                                size={60}
                                css={{
                                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                }}
                                weight="bold"
                            >
                                Say Hi!
                            </Text>
                            <Text
                                h1
                                size={20}
                                css={{
                                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                    marginTop: "-35px",
                                }}
                                weight="bold"
                            >
                                Feel free to contact me for any offers, questions, and inquiries, or it&apos;s cool to just say hi too :) 
                            </Text>
                        </div>
                            <a href='https://simple.jaavin.ca/'>
                                <Button color="gradient" auto ghost>
                                    Simple Portfolio!
                                </Button>
                            </a>
                    </div>
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
                    <Link
                        href="/projects"
                        className={styles.card}
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Projects
                        </h2>
                    </Link>

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
