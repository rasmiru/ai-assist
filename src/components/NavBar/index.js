import React from "react";
import {
    Box,
    Flex,
    Heading,
    Link,
    Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    AI Assist
                </Heading>
            </Flex>
            <Spacer />
            <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }}>
                <Link href="#" mr={6}>
                    Home
                </Link>
                <Link href="#" mr={6}>
                    Persona 1
                </Link>
                <Link href="#" mr={6}>
                    Persona 2
                </Link>
                <Link href="#">Persona 3</Link>
            </Box>
        </Flex>
    );
};

export default Navbar