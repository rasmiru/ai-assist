import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

});
