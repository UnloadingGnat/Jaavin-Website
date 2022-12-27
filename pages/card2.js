import { Card, Col, Text } from "@nextui-org/react";

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
            alt="Card image background"
        />
    </Card>
);