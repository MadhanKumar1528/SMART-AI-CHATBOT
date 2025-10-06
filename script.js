const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const sendIcon = sendBtn.querySelector("img");

// Add glow on click or Enter
sendBtn.addEventListener("click", () => {
  sendIcon.classList.add("glow");
  setTimeout(() => sendIcon.classList.remove("glow"), 400);
  sendMessage();
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendIcon.classList.add("glow");
    setTimeout(() => sendIcon.classList.remove("glow"), 400);
    sendMessage();
  }
});

// Append message to chat box
function addMessage(message, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender, "fade-in");
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing animation letter by letter
async function typeMessage(element, text) {
  element.textContent = "";
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await new Promise((r) => setTimeout(r, 20)); // 20ms per character
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Send message to backend
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  // Show loading bubble
  const loading = document.createElement("div");
  loading.classList.add("message", "bot", "fade-in");
  loading.textContent = "Typing...";
  chatBox.appendChild(loading);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Animate AI reply
    await typeMessage(loading, data.reply);

  } catch (error) {
    console.error(error);
    loading.textContent = "⚠️ Error connecting to server. Check console.";
  }
}
