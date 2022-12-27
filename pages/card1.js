import { Card, Col, Text } from "@nextui-org/react";

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