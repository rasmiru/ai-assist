import openAIRequest from "./openAIRequest";

// Write a test suite
describe('openAIRequest', () => {
    // Write test case for a successful response
    test('should return a message from OpenAI when status is 200', async () => {

        // Mock the fetch function to return a fake response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve({ choices: [{ message: { content: mockAIMessage } }] }),
            })
        );

        const mockAIMessage = 'Hello, this is OpenAI'
        const userQuery = 'How are you?';


        // Invoke the function with a sample query
        const aiMessage = await openAIRequest(userQuery);

        // Check if the output matches the expected value
        expect(aiMessage).toBe(mockAIMessage);
    });

    // Write a test case for a rate limit exceeded response
    test('should return a message to try again later when status is 429', async () => {
        // Mock the fetch function to return a fake response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 429,
            })
        );
        const mockAIMessage = 'Please try again after 60 secs.'
        const userQuery = 'What is your name?';

        // Invoke the function with any query
        const aiMessage = await openAIRequest(userQuery);

        // Check if the output matches the expected value
        expect(aiMessage).toBe(mockAIMessage);
    });

    // Write a test case for an error response
    test('should return a message to refresh the page when status is not 200 or 429', async () => {
        // Mock the fetch function to return a fake response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 500,
            })
        );

        const mockAIMessage = 'An error has occurred, please refresh the page and try again.'
        const userQuery = 'What is your favorite color?';

        // Invoke the function with any query
        const aiMessage = await openAIRequest(userQuery);

        // Check if the output matches the expected value
        expect(aiMessage).toBe(mockAIMessage);
    });
});
