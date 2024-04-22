const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatBotCloseBtn = document.querySelector(".close-btn");
let userMsg;
const API_KEY = "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"; // Replace with your actual OpenAI API key
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        sk - cDntLy2KLdgrCngVyjmFT3BlbkFJzANbxSBAo2av3eCuvg9f
      }`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMsg }],
    }),
  };

  // Send POST request to API, get response
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch((error) => {
      console.error("Error:", error);
      messageElement.textContent =
        "Something went wrong! Please try again later.";
    })
    .finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
};

const handleChat = () => {
  userMsg = chatInput.value.trim();
  if (!userMsg) return;

  // Append user msg to chatbox
  chatBox.appendChild(createChatLi(userMsg, "outgoing"));
  chatBox.scrollTo(0, chatBox.scrollHeight);

  // Showing bot thinking dots
  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);

    // Set a timeout for the API request
    const requestTimeout = setTimeout(() => {
      incomingChatLi.querySelector("p").textContent =
        "The request is taking too long. Please try again later.";
    }, 5000); // Timeout after 5 seconds

    generateResponse(incomingChatLi).finally(() =>
      clearTimeout(requestTimeout)
    );
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

sendChatbtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
chatBotCloseBtn.addEventListener("click", () =>
  document.body.classList.toggle("close-btn")
);
