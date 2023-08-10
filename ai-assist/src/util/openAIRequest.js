const openAIRequest = async (userQuery) => {

    const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userQuery }],
            temperature: 0.7
        })
    };

    const response = await fetch(apiUrl, requestData)
    if (response.status === 200) {
        const body = await response.json()
        const aiMessage = await body.choices[0].message.content
        // console.log(aiMessage)
        return aiMessage
    }
    else if (response.status === 429) {
        // Rate limit exceeded 3 per min.
        return 'Please try again after 60 secs.';
    }
    else {
        return 'An error has occurred, please refresh the page and try again.'
    }

}

export default openAIRequest