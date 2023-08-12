import {
    Box,
    Text,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { personaData } from "../../data/personaData";
import { identity } from "lodash";

const PersonaCard = ({ image, id }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" marginRight={'7'} marginBottom={'7'}>
            <Link to={`/personas/${id}`} >
                <Image src={image} alt={id} />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Text fontWeight="semibold" fontSize="lg">
                            {personaData[id].name}
                        </Text>
                        <Text fontWeight="semibold" fontSize="sm">
                            {personaData[id].title.toUpperCase()}
                        </Text>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};


export default PersonaCard