function toggleChat() {
  document.getElementById("chatbot").classList.toggle("hidden");
}

function quickAsk(type) {
  sendMessage(type);
}

function sendMessage(pre = null) {
  const input = document.getElementById("user-input");
  const msg = pre || input.value.trim();
  if (!msg) return;

  addMsg("user", msg);

  setTimeout(() => {
    addMsg("bot", getReply(msg.toLowerCase()));
  }, 400);

  input.value = "";
}

function addMsg(type, text) {
  const box = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function getReply(msg) {
  if (msg.includes("about")) return "I'm a Full Stack Developer 🚀";
  if (msg.includes("skills")) return "HTML, CSS, JS, React, Node.js 💻";
  if (msg.includes("projects")) return "AI Chatbot, Inventory System 📦";
  if (msg.includes("contact")) return "Use contact form 📩";
  if (msg.includes("hi")) return "Hello 👋 Ask me anything!";
  return "Try: about / skills / projects";
}