import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Chat from ".";

describe("Chat component", () => {
    const persona = {
        introMessage: "Hello!",
        aiInstruction: "AI, please respond to: ",
    };

    it("renders initial AI message correctly", () => {
        render(<Chat persona={persona} />);
        const aiMessage = screen.getByText(persona.introMessage);
        expect(aiMessage).toBeInTheDocument();
    });
    it("allows user input and message sending", async () => {
        render(<Chat persona={persona} />);

        const input = screen.getByPlaceholderText("Type your message here...");
        const sendButton = screen.getByText("Send");

        input.value = "Hello, AI!";
        fireEvent.change(input);

        expect(input.value).toBe("Hello, AI!");

    });

});
