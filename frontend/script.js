async function generateShayari() {
    const keywordInput = document.getElementById("keyword");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const shayariContainer = document.getElementById("shayari");
    const loader = document.createElement("div");
    loader.className = "loader";
    const baseURL = "https://light-waistcoat-duck.cyclic.app/generate-shayari";

    const keyword = keywordInput.value;

    if (!keyword) {
        alert("Please enter a keyword");
        return;
    }

    // Disable generate button during loading
    generateBtn.disabled = true;
    generateBtn.textContent = "Loading...";

    shayariContainer.innerHTML = "";
    shayariContainer.appendChild(loader);

    try {
        const response = await fetch(`${baseURL}?keyword=${keyword}`);
        console.log("Fetch request successful");

        const dataReceived = await response.json();
        shayariContainer.textContent = dataReceived.Shayari;

        // Change the loading text after receiving Shayari
        generateBtn.textContent = "Get Another Shayari";

        // Remove the 'hidden' class to display the Shayari
        shayariContainer.classList.remove("hidden");
        copyBtn.classList.remove("hidden");
    } catch (error) {
        console.error("Fetch error:", error);
        shayariContainer.textContent = "Failed to fetch Shayari. Please try again later.";

        // Reset the generate button text on error
        generateBtn.textContent = "Get Shayari";
    }
}


function copyShayari() {
    const shayariContainer = document.getElementById("shayari");
    const shayariText = shayariContainer.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = shayariText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Shayari copied to clipboard");
}


