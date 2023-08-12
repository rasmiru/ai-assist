import Navbar from "../NavBar"
import Hero from "../Hero";
import { Flex } from "@chakra-ui/layout";
import PersonaCard from "../PersonaCard";
import Footer from "../Footer";
import { personaData } from "../../data/personaData";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero heading={"AI Assist"} text={
                `AI Assist lets you chat with different AI characters. 
                They all have their own names, styles, and skills. 
                They can help you with all kinds of things, like health, learning, cooking, finance, or fitness.            
                `
            } />
            <Flex justify="center" wrap="wrap" p={10}>
                {Object.values(personaData).map((persona) =>
                    <PersonaCard key={persona.id} image={persona.image} id={persona.id} />)
                }
            </Flex>
            <Footer />
        </>
    );
};

export default Homepage;
