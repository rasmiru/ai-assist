import Navbar from "../NavBar"
import Hero from "../Hero";
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
            <Footer />
        </>
    );
};

export default Homepage;
