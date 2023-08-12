import {
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";

const Hero = ({ heading, text }) => {
    return (
        <Box padding={10} bg="gray.100">
            <Heading as="h1" size="2xl" mb={4}>
                {heading}
            </Heading>
            <Text marginX={'auto'} width={'50%'} lineHeight={'10'} fontSize="xl">
                {text}
            </Text>
        </Box>
    );
};

export default Hero