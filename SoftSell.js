/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SoftSell() {
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const baseColors = {
    light: {
      background: "bg-gray-50",
      section: "bg-white",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      card: "bg-white",
      input: "bg-white text-black",
      toggleBtn: "bg-gray-200 hover:bg-blue-100 text-gray-800",
    },
    dark: {
      background: "bg-gray-900",
      section: "bg-gray-800",
      text: "text-white",
      secondaryText: "text-gray-300",
      card: "bg-gray-700",
      input: "bg-gray-700 text-white",
      toggleBtn: "bg-gray-700 hover:bg-blue-900 text-white",
    },
  };

  const theme = darkMode ? baseColors.dark : baseColors.light;

  const handleSend = () => {
    if (!input.trim()) return;
    setChatMessages([
      ...chatMessages,
      { sender: "user", text: input },
      { sender: "bot", text: "Thanks for your message! We'll get back to you soon." },
    ]);
    setInput("");
  };

  return (
    <div className={`${theme.background} ${theme.text} font-sans relative`}>
      <head>
        <title>SoftSell - Sell Your Software Licenses</title>
        <meta name="description" content="Easily sell your unused software licenses and get paid fast. Trusted by professionals." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Light/Dark Toggle */}
      <div className="p-4 text-right">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-full font-medium shadow-md transition duration-300 ${theme.toggleBtn}`}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section className={`min-h-screen flex flex-col items-center justify-center text-center ${theme.section} p-6`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Turn Unused Software Into Cash
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Sell your old licenses in 3 easy steps and get paid fast.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          Sell My Licenses
        </motion.button>
      </section>

      {/* How It Works */}
      <section className={`py-16 px-6 ${theme.background} text-center`}>
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Upload License", icon: "📂" },
            { title: "Get Valuation", icon: "💸" },
            { title: "Get Paid", icon: "💵" },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className={`p-6 ${theme.card} rounded-xl shadow-md hover:shadow-xl transition`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-16 px-6 ${theme.section} text-center`}>
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Fast Payouts", desc: "Receive payment within 24 hours." },
            { title: "Secure Deals", desc: "End-to-end encrypted transactions." },
            { title: "Expert Valuations", desc: "Fair and accurate pricing." },
            { title: "No Hidden Fees", desc: "Transparent and honest pricing." },
          ].map((feature, idx) => (
            <div key={idx} className={`p-6 ${theme.card} rounded-xl shadow hover:shadow-xl transition`}>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className={`${theme.secondaryText}`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-16 px-6 ${theme.section} text-center`}>
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-2xl mx-auto grid gap-4 text-left">
          <input type="text" placeholder="Name" required className={`p-3 border rounded ${theme.input}`} />
          <input type="email" placeholder="Email" required className={`p-3 border rounded ${theme.input}`} />
          <input type="text" placeholder="Company" className={`p-3 border rounded ${theme.input}`} />
          <select required className={`p-3 border rounded ${theme.input}`}>
            <option value="">Select License Type</option>
            <option value="software">Software</option>
            <option value="enterprise">Enterprise</option>
            <option value="custom">Custom</option>
          </select>
          <textarea placeholder="Your Message" required className={`p-3 border rounded ${theme.input}`}></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 hover:shadow-md transition"
          >
            Submit
          </motion.button>
        </form>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <div className={`w-80 max-h-[400px] flex flex-col justify-between p-4 shadow-lg rounded-xl ${theme.card}`}>
            <div className="flex justify-between mb-2">
              <span className="font-bold">SoftSell Assistant</span>
              <button onClick={() => setShowChat(false)} className="text-red-500 hover:text-red-700">×</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 mb-2">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded ${msg.sender === "bot" ? "bg-blue-100 text-black" : "bg-green-100 text-black"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 p-2 rounded border text-black"
              />
              <button onClick={handleSend} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowChat(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
          >
            Chat
          </motion.button>
        )}
      </div>

      {/* Footer */}
      <footer className={`py-6 text-center text-sm ${theme.secondaryText}`}>
        © {new Date().getFullYear()} SoftSell. All rights reserved.
      </footer>
    </div>
  );
}
