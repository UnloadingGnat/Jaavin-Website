import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import { Button, Grid } from '@nextui-org/react';
import Link from 'next/link'
import { Card, Col, Row, Text, Badge, Avatar, Spacer } from "@nextui-org/react";


export const CardInverse = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $blue50 90%",
                    }}
                    weight="bold"
                >
                    Team 1325 - Inverse Paradox
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="1325.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
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
                        <Col>
                            <Text color="#d1d1d1" size={14}>
                                Software Development Co-Lead
                            </Text>
                            <Text color="#d1d1d1" size={10}>
                                As co-lead for software development, I oversaw the implementation of software systems for a 120lb competitive robot.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='team1325-engineering-notebook.pdf'>
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
                                            See Project ➜
                                        </Text>
                                    </Button>
                                </a>

                            </Row>
                            <Col>
                                <Badge size="sm">Java</Badge>
                                <Badge size="sm">Control Systems</Badge>
                                <Badge size="sm">Computer Vision</Badge>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const CardMacRocket = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $red600 -10%, $red50 80%",
                    }}
                    weight="bold"
                >
                    McMaster Rocketry Team
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="macrocket.png"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
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
                        <Col>
                            <Text color="#d1d1d1" size={14}>
                                Assistant Project Manager
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                I&apos;m currently working here! :)
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://www.macrocketry.ca/'>
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
                                            See Project ➜
                                        </Text>
                                    </Button>
                                </a>

                            </Row>
                            <Col>
                                <Badge size="sm">Project Management</Badge>
                                <Badge size="sm">ROCKETS</Badge>

                            </Col>
                        </Col>
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
                <meta property="og:image" content="metaog.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                >
                    Here are some of my Projects!
                </Text>
                <div className={styles.content}>
                    <Grid.Container gap={1} justify="center">
                        <Grid xs={12} sm={4}>
                            <CardInverse />
                        </Grid>
                        <Grid xs={12} sm={5}>
                            <CardMacRocket />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <CardInverse />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <CardInverse />
                        </Grid>
                    </Grid.Container>


                </div>
                <div className={styles.whitespace}></div>


                <div className={styles.grid}>
                    <a
                        href="#/"
                        className={styles.cardactive}
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
