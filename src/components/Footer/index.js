import {
    Flex,
    Stack,
    Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

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
        // position="fixed"
        // bottom={0}
        // left={0}
        // right={0}
        // flex={1}
        >
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Link to={"#"}>About</Link>
                <Link to={"#"}>Contact</Link>
                <Link to={"#"}>Privacy</Link>
                <Link to={"#"}>Terms</Link>
            </Stack>
            <Spacer />
        </Flex>
    );
};

export default Footer