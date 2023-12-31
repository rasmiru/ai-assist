import React, { useState } from "react";
import {
    Box,
    Flex,
    Input,
    Button,
    Text,
    VStack,
    useColorModeValue,
    Spinner,
} from "@chakra-ui/react";
import openAIRequest from "../../util/openAIRequest";

const Chat = ({ persona }) => {
    // Define some state variables for the user input and the messages
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([
        { type: "ai", text: persona.introMessage },
    ]);
    // Define a state variable for indicating loading state
    const [isLoading, setIsLoading] = useState(false);

    // Define a function to handle the user input change
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    // Define a function to handle the user input submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if the user input is not empty
        if (userInput.trim()) {
            // Add the user input to the messages array as an object with a type of "user"
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: "user", text: userInput.trim() },
            ]);
            // Clear the user input
            setUserInput("");
            // Set the loading state to true
            setIsLoading(true);
            // Call the AI function to generate a response based on the user input
            await aiResponse(persona.aiInstruction + userInput);
        }
    };

    const aiResponse = async (userInput) => {
        try {
            const response = await openAIRequest(userInput);

            // Update the state with the AI message
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: "ai", text: response },
            ]);
        } catch (error) {
            // Handle any errors here
            // Update the state with the error message.
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: "ai", text: `Error fetching AI response, please try again later.` },
            ]);
            console.error("Error fetching AI message:", error);
        } finally {
            // Set the loading state to false
            setIsLoading(false);
        }
    };

    // Define some colors for the message bubbles based on the color mode
    const userBubbleColor = useColorModeValue("blue.500", "blue.200");
    const userBubbleTextColor = useColorModeValue("white", "gray.800");
    const aiBubbleColor = useColorModeValue("gray.100", "gray.700");
    const aiBubbleTextColor = useColorModeValue("black", "white");

    return (
        <Box p={10}>
            <VStack
                align="stretch"
                spacing={4}
                height="75vh"
                overflowY="auto"
                border="1px solid lightgray"
                borderRadius={"5"}
                padding={"5"}
                tabIndex="0"
            >
                {/* Map over the messages array and render each message based on its type */}
                {messages.map((message, index) => (
                    <Flex
                        key={index}
                        align="center"
                        justify={message.type === "user" ? "flex-end" : "flex-start"}
                    >
                        <Box
                            maxW="70%"
                            p={3}
                            borderRadius={8}
                            color={
                                message.type === "user"
                                    ? userBubbleTextColor
                                    : aiBubbleTextColor
                            }
                            bg={message.type === "user" ? userBubbleColor : aiBubbleColor}
                        >
                            <Text textAlign={"left"} fontSize="lg" css={{ whiteSpace: "pre-wrap" }}>
                                {message.text}
                            </Text>
                        </Box>
                    </Flex>
                ))}
                {/* Render the spinner component if the loading state is true */}
                {isLoading && (
                    <Flex justify="flex-start">
                        <Spinner size="xl" color="teal.500" />
                    </Flex>
                )}
            </VStack>
            {/* Render a form with an input and a button for the user to write messages */}
            <form onSubmit={handleSubmit}>
                <Flex mt={4}>
                    <Input isDisabled={isLoading}
                        value={userInput}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        mr={2}
                    />
                    <Button type="submit" colorScheme="teal" isDisabled={userInput === "" || isLoading}>
                        Send
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default Chat;