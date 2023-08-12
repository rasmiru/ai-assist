import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Stack,
    Badge
} from "@chakra-ui/react";
import { personaData } from "../../data/personaData";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
const PersonaPage = () => {
    const { id } = useParams(); // Get the persona name from URL parameter
    const persona = personaData[id]; // Get persona details from data based on id

    return (<>
        <NavBar />
        <Box p={10}>
            <Flex direction="column" alignItems="center">
                <Box maxW="sm" mr={10}>
                    <Image src={persona.image} alt={persona.name} />
                </Box>
                <Heading as="h1" size="xl" mb={2} textAlign="center">
                    {persona.name}
                </Heading>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    {persona.title}
                </Text>
                <Box maxW="lg">
                    <Stack direction="row" justifyContent={'center'} spacing={2} flexWrap="wrap">
                        {persona.skills.map((skill) => (
                            <Badge
                                key={skill}
                                colorScheme="teal"
                                mb={2}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </Stack>
                </Box>
            </Flex>
        </Box>
        {/* <Footer /> */}
    </>
    );
};

export default PersonaPage;
