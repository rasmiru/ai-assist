import React from "react";
import {
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
                    <Link to={"/"} mr={6}>
                        AI Assist
                    </Link>
                </Heading>
            </Flex>
            <Spacer />
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Link to={"/"} mr={6}>
                    Home
                </Link>
            </Stack>
        </Flex>
    );
};

export default Navbar