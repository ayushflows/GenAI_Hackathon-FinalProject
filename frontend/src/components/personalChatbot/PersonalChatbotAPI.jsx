const serverHit= import.meta.env.VITE_APP_SERVER_LINK;

const PersonalChatbotAPI = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (message === "hi") resolve("Hi! Welcome to the Soulbuddy Chatbot, How can I assist you today?");
          else resolve("Ayush, your personal growth is driven by resilience, adaptability, and a thirst for knowledge. By maintaining balance in health, relationships, and finances, you can achieve holistic success. Focus on continuous learning, open communication, and mindfulness to navigate challenges and unlock opportunities. With discipline and clarity, your journey will be marked by meaningful connections, professional achievements, and overall well-being.");
        }, 4000);
      });
    },

    GetTextFromQuestion: async (message) =>{
      try {
        const response = await fetch(serverHit+ '/data/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({chat: message}),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        let formattedMessage = data.message
        .replace(/\*/g, '')
        .replace(/\/n/g, '')
        .replace(/(\d+\.)\s*/g, '\n$1 ')
        .trim();
  
      return formattedMessage;
  
      } catch (error) {
        return "Sorry, we can't answer this question at the moment, please try again later!";
      }

    }
  };
  
  export default PersonalChatbotAPI;
  