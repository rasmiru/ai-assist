import {
    Flex,
    Link,
    Button,
    Stack,
    Spacer,
} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex
            as="footer"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            flex={1}
        >
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Link href="#">About</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Terms</Link>
            </Stack>
            <Spacer />
        </Flex>
    );
};

export default Footer