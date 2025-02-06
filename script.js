const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-image");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateMeme = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerText = title;
    memeAuthor.innerText = `Meme by: ${author || "Unknown"}`;
    
    // Add class to trigger pop-up effect
    memeImage.classList.add("show");
};

const generateMeme = async () => {
    try {
        memeTitle.innerText = "Fetching meme...";
        memeImage.src = "";
        memeAuthor.innerText = "";
        memeImage.classList.remove("show"); // Hide image before loading

        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();

        setTimeout(() => {
            updateMeme(data.url, data.title, data.author);
        }, 300); // Small delay for smooth transition
    } catch (error) {
        memeTitle.innerText = "Failed to load meme 😢";
        memeAuthor.innerText = "Please try again!";
    }
};

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
