import React from "react";
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Stack
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

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
            {/* <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }}> */}
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Link to={"/"} mr={6}>
                    Home
                </Link>
            </Stack>
            {/* </Box> */}
        </Flex>
    );
};

export default Navbar