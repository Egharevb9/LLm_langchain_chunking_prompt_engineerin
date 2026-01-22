import { create } from "zustand";

const useChatStore = create((set) => ({
    // state
    messages: [],
    isAgentTyping :false,
    

    // Actions
    addMessage: (mesage) => set ((state) => ({
        mesages: [... state. messages, message]
    })),
    setAgentTyping: (isTyping) => set({isAgentTyping: isTyping

    }),
    clearMessages : () => set({messages: []})
}))
export default useChatStore;

//store/chatStore.js
import { create } from "zustand";


const UseChatStore = create((set, get) => ({
    messages: [],
    isAgentTyping: false,
    error: null,


    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),

    // Async action to send message to AI backend
    sendMessageToAgent: async (userMessage) => {
        const { addMessage,} = get()  // Acess other actions

        // Add user message immediately
        addMessage({role: 'user', content: userMessage});

        // set loading state
        set({isAgentTyping: true, error: null});

        try {
            // call fastApi backend
            const response = await fetch(http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message: userMessage})
            });
            if  (!response.ok) throw new Error('failed to get response')
                const data = await response.JSON()

            // Add agent response
            addMessage({role: 'agent', content: data.response})
        
    }catch (error) {
        set({error: error.message})
        addMessage({
            role: 'agent', 
            content: "Sorry, there was an error processing your request."
        })
    } finally {
        set({isAgentTyping: false})
    }
},
clearMessages: () =>set({messages: [], error:null})
 })),