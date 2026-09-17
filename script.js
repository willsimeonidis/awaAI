const OPENAI_KEY = "";

/* IMAGE GENERATION */
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

/* STORY GENERATION */
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

/* MEME GENERATION */
async function generateMeme() {
    const idea = document.getElementById("memeIdea").value;

    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-image-1",
            prompt: "Meme: " + idea,
            size: "1024x1024"
        })
    });

    const data = await response.json();
    document.getElementById("memeOutput").src = data.data[0].url;
}

function downloadMeme() {
    const img = document.getElementById("memeOutput").src;
    const a = document.createElement("a");
    a.href = img;
    a.download = "awaAI_meme.png";
    a.click();
}

/* VIDEO GENERATION */
async function generateVideo() {
    const idea = document.getElementById("videoIdea").value;

    document.getElementById("videoOutput").src =
        "https://www.w3schools.com/html/mov_bbb.mp4";
}

function downloadVideo() {
    alert("Video download coming soon!");
}

/* CHARACTER GENERATION */
async function generateCharacter() {
    const name = document.getElementById("charName").value;
    const type = document.getElementById("charType").value;
    const vibe = document.getElementById("charVibe").value;

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
                content: `Create a ${vibe} ${type} character named ${name}. Include personality, backstory, and a catchphrase.`
            }]
        })
    });

    const data = await response.json();
    document.getElementById("charOutput").value = data.choices[0].message.content;
}

function copyCharacter() {
    navigator.clipboard.writeText(
        document.getElementById("charOutput").value
    );
}

/* QUIZ GENERATION */
async function generateQuiz() {
    const topic = document.getElementById("quizTopic").value;
    const difficulty = document.getElementById("quizDifficulty").value;
    const amount = document.getElementById("quizAmount").value;

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
                content: `Create ${amount} ${difficulty} multiple-choice questions about ${topic}. Include answers.`
            }]
        })
    });

    const data = await response.json();
    document.getElementById("quizOutput").value = data.choices[0].message.content;
}

function copyQuiz() {
    navigator.clipboard.writeText(
        document.getElementById("quizOutput").value
    );
}
