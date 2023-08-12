import React from "react";
import {
    Flex,
    Spacer,
} from "@chakra-ui/react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            align="center"
            justify="center"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <span>&copy; {currentYear} AI Assist. All rights reserved.</span>
            <Spacer />
        </Flex>
    );
};

export default Footer;
