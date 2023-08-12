import {
    Box,
    Text,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

const PersonaCard = ({ image, name }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" marginRight={'7'} marginBottom={'7'}>
            <Link to={`/personas/${name}`} >
                <Image src={image} alt={name} />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Text fontWeight="semibold" fontSize="lg">
                            {name}
                        </Text>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};


export default PersonaCard