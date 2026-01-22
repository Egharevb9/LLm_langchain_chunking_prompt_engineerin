import { useState } from "react";
import useChatStore  from "../Chatstore";

function ChatInput() {
    const [input, setInput] = useState("");

    // Get actions from store
    const addMessage = useChatStore((state) => state.addMessage);
    const setAgentTyping = useChatStore((state) => state.setAgentTyping);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;


        // Add user message
        addMessage({role: 'user', content: input});
        setInput("");


        // simulate AI response
        setAgentTyping(true);

        // in real app, this would call your fastApi backend
        setTimeout(() => {
            addMessage({
                role: 'agent', 
                content: "This is a simulated response."
            });
            setAgentTyping(false);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
}
export default ChatInput