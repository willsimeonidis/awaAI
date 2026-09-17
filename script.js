const OPENAI_KEY = "YOUR_OPENAI_KEY_HERE";

async function generateImage() {
    const prompt = document.getElementById("imagePrompt").value;
    const style = document.getElementById("imageStyle").value;

    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-image-1",
            prompt: prompt + " | styles: " + style,
            size: "1024x1024"
        })
    });

    const data = await response.json();
    document.getElementById("imageOutput").src = data.data[0].url;
}

function downloadImage() {
    const img = document.getElementById("imageOutput").src;
    const a = document.createElement("a");
    a.href = img;
    a.download = "awaAI_image.png";
    a.click();
}

async function generateStory() {
    const idea = document.getElementById("storyIdea").value;
    const length = document.getElementById("storyLength").value;
    const mode = document.getElementById("storyMode").value;
    const chars = document.getElementById("storyCharacters").value;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: `Make a ${length} story in ${mode} mode. Idea: ${idea}. Characters: ${chars}. Make it extremely funny.`
            }]
        })
    });

    const data = await response.json();
    document.getElementById("storyOutput").value = data.choices[0].message.content;
}

function copyStory() {
    navigator.clipboard.writeText(
        document.getElementById("storyOutput").value
    );
}
