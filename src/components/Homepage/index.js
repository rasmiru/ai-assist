import Navbar from "../NavBar"
import Hero from "../Hero";
import { Flex } from "@chakra-ui/layout";
import PersonaCard from "../PersonaCard";
import Footer from "../Footer";

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
                <PersonaCard image="images/persona1.png" name="Persona 1" />
                <PersonaCard image="images/persona2.png" name="Persona 2" />
                <PersonaCard image="images/persona3.png" name="Persona 3" />
            </Flex>
            <Footer />
        </>
    );
};

export default Homepage;
