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
                            <Text color="#d1d1d1" size={12}>
                                Oversaw the implementation of software systems for a 120lb competitive robot.
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
                        textGradient: "45deg, $gray600 -10%, $red50 40%",
                    }}
                    weight="bold"
                >
                    McMaster Rocketry Team
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="cadrocket.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                            <Text color="#d1d1d1" size={12}>
                                Project manager for the software controls sub-team
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
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);

export const Macai = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $black -10%, $black 70%",
                    }}
                    weight="bold"
                >
                    McMaster AI Society
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="macai.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Project Lead
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Building an Ethereum fraud detector using convolutional neural networks.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://www.mcmasterai.com/'>
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
                                {/* <Badge size="sm"></Badge> */}


                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Macblock = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $red600 -10%, $red800 70%",
                    }}
                    weight="bold"
                >
                    McMaster Blockchain Club
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="macblock.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Founder and President
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Building a club to promote the study and implementation of Blockchain.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://www.macblockchain.ca/'>
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
                                {/* <Badge size="sm"></Badge> */}


                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Huff = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $gray600 -10%, $red50 40%",
                    }}
                    weight="bold"
                >
                    Huff Docs
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="huff.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Frontend Developer
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Developed the frontend for documentation website, used by over 5 thousand active users.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://docs.huff.sh/'>
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
                                <Badge size="sm">Vuepress</Badge>
                                <Badge size="sm">CSS</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Irc = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $purple600 -5%, $purple50 80%",
                    }}
                    weight="bold"
                >
                    Flashback IRC
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="cmd.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Backend Developer
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Built the models for the back-end using REST framework.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://github.com/UnloadingGnat/Flashback-IRC'>
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
                                <Badge size="sm">React</Badge>
                                <Badge size="sm">Django</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Chari3 = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $green900 -5%, $green50 80%",
                    }}
                    weight="bold"
                >
                    Chari3
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="chari3img.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Full-Stack Developer
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Only solo winner of an award in a hackathon with 430 participants.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://devpost.com/software/chari3'>
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
                                <Badge size="sm">React</Badge>
                                <Badge size="sm">Vite</Badge>
                                <Badge size="sm">Solidity</Badge>
                                <Badge size="sm">CSS</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);

export const Route = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue600 -5%, $blue50 80%",
                    }}
                    weight="bold"
                >
                    Routemixer
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="route.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Hackathon
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Developed the frontend for website, and utilized Google Maps API 
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://devpost.com/software/routemixer'>
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
                                <Badge size="sm">React</Badge>
                                <Badge size="sm">Google Maps API</Badge>
                                <Badge size="sm">CSS</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Engop = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $green600 -5%, $blue50 98%",
                    }}
                    weight="bold"
                >
                    Engineering 1 Operating Committee
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="englogo.png"
                objectFit="cover"
                width="100%"
                height="100%"
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
                                Operating Committee Member
                            </Text>
                            <Text color="#d1d1d1" size={12}>
                                Representing ~1000 engineering 1 students; consulted to review the program.
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://www.eng.mcmaster.ca/programs/engineering-i/#tab-content-our-team'>
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
                                <Badge size="sm">Operations Management </Badge>
                                <Badge size="sm">Academic Advising</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);

export const Student = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, $blue700 -5%, $blue200 98%",
                    }}
                    weight="bold"
                >
                    Engineering Ambassador
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="student.png"
                objectFit="cover"
                width="100%"
                height="100%"
                css={
                    { mt: "-20px" }
                }
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
                                Student Ambassador
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Answering questions about engineering for prospective students
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://api.unibuddy.co/og/mcmaster-university/buddies/students/634df0c2ef5b700e838b408e?buddyPosition=share'>
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
                                <Badge size="sm">Interpersonal Skills</Badge>
                                <Badge size="sm">Communication</Badge>

                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
export const Cucai = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    h1
                    size={16}
                    css={{
                        textGradient: "45deg, $blue900 -5%, $blue800 98%",
                    }}
                    weight="bold"
                >
                    Canadian Undergraduate Conference on AI
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="cucai.png"
                objectFit="cover"
                width="100%"
                height="100%"
                css={
                    { mt: "-20px" }
                }
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
                                Delegate
                            </Text>
                            <Text color="#d1d1d1" size={14}>
                                Invited to Canada&apos;s most prestigious AI conference
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row justify='flex-end'>
                                <a href='https://www.cucai.ca/'>
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
                                {/* <Badge size="sm"></Badge> */}
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
        document.getElementById("html").style.overflowX = "hidden";
        document.getElementById("body").style.overflowX = "hidden";
    }
    return (
        <>
            <Head>
                <title>Jaavin&apos;s Website</title>
                <meta name="description" content="Jaavin's Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        '@media (max-width: 900px)': {
                            fontSize: "40px"
                        }
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
                        <Grid xs={12} sm={4}>
                            <CardMacRocket />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Macai />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Macblock />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Huff />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Chari3 />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Irc />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Route />
                        </Grid>
                    </Grid.Container>
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            display: "flex",
                            justifyContent: "center",
                            '@media (max-width: 900px)': {
                                fontSize: "40px"
                            }
                        }}
                        weight="bold"
                    >
                        Some of my Leadership Experiences!
                    </Text>
                    <Grid.Container gap={1} justify="center">
                        <Grid xs={12} sm={4}>
                            <Cucai />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Engop />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Student />
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
