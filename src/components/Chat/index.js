import React, { useState } from "react";
import {
    Box,
    Flex,
    Input,
    Button,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";
import openAIRequest from "../../util/openAIRequest";
const Chat = () => {
    // Define some state variables for the user input and the messages
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);

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
                { type: "user", text: userInput },
            ]);
            // Clear the user input
            setUserInput("");
            // Call the AI function to generate a response based on the user input
            await aiResponse(userInput);
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
            console.error('Error fetching AI message:', error);
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
                height="80vh"
                overflowY="auto"
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
                            <Text fontSize="lg">{message.text}</Text>
                        </Box>
                    </Flex>
                ))}
            </VStack>
            {/* Render a form with an input and a button for the user to write messages */}
            <form onSubmit={handleSubmit}>
                <Flex mt={4}>
                    <Input
                        value={userInput}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        mr={2}
                    />
                    <Button type="submit" colorScheme="teal">
                        Send
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default Chat;

