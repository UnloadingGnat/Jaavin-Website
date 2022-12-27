import { Card, Col, Row, Button, Text } from "@nextui-org/react";

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
                src="linked.avif"
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
                        <Col span={3}>
                            <Card.Image
                                src="linklogo.png"
                                css={{ bg: "black", br: "50%" }}
                                height={40}
                                width={40}
                                alt="Breathing app icon"
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