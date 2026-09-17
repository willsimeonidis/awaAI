function generateImage() {
    document.getElementById("imageOutput").src =
        "https://placehold.co/600x400?text=Generated+Image";
}

function downloadImage() {
    alert("Download coming soon!");
}

function generateStory() {
    let idea = document.getElementById("storyIdea").value;
    document.getElementById("storyOutput").value =
        "Generated Story:\n\n" + idea + " ... (AI story goes here)";
}

function copyStory() {
    navigator.clipboard.writeText(
        document.getElementById("storyOutput").value
    );
}

function generateMeme() {
    document.getElementById("memeOutput").src =
        "https://placehold.co/600x400?text=Meme";
}

function downloadMeme() {
    alert("Download coming soon!");
}

function generateVideo() {
    document.getElementById("videoOutput").src =
        "https://www.w3schools.com/html/mov_bbb.mp4";
}

function downloadVideo() {
    alert("Download coming soon!");
}

function generateCharacter() {
    let name = document.getElementById("charName").value;
    document.getElementById("charOutput").value =
        "Character: " + name + "\n\n(AI character goes here)";
}

function copyCharacter() {
    navigator.clipboard.writeText(
        document.getElementById("charOutput").value
    );
}

function generateQuiz() {
    let topic = document.getElementById("quizTopic").value;
    document.getElementById("quizOutput").value =
        "Quiz about " + topic + "\n\n(AI quiz goes here)";
}

function copyQuiz() {
    navigator.clipboard.writeText(
        document.getElementById("quizOutput").value
    );
}
