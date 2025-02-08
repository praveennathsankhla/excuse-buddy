// Config will be loaded from config.js

const excuses = {
    work: [
        "My cat reprogrammed my alarm clock 🐱",
        "I was abducted by aliens for a quick survey 👽",
        "My coffee maker staged a rebellion ☕",
        "I was stuck in an intense staring contest with my cat. I lost, obviously. 🐱😵",
"My alarm clock and I are in a toxic relationship. It refuses to wake me up on time. ⏰💔",
"I accidentally put my shirt on backward and had an identity crisis in front of the mirror. 👕😨",
"A squirrel stole my car keys. I had to negotiate for them with peanuts. 🐿️🥜",
"I was abducted by aliens, but they returned me when they saw my salary slip. 👽💸",
"I fell asleep in the shower. Woke up as a raisin. 🚿😴",
"Google Maps sent me on a 'scenic route.' I now know where Narnia is. 🗺️🦁",
"I was rehearsing how to say 'Good morning' and lost track of time. 😶🌞",
"My dog gave me the 'don't leave me' look, and I had to comfort him for an hour. 🐶🥺",
"I was ready, but my phone auto-connected to Netflix. I had no choice but to finish the episode. 📱🎬"
    ],
    deadline: [
        "My computer joined a meditation retreat 🧘‍♂️",
        "Time zones conspired against me ⏰",
        "My documents went on vacation without notice 📄",
        "My laptop updated for '5 minutes.' It took 3 days. 💻⏳",
"I accidentally wrote my assignment in Wingdings and had to decode it. 🔡🤦‍♂️",
"I spilled coffee on my notes, and now they look like ancient treasure maps. ☕📜",
"I thought today was tomorrow, but apparently, today is today. 🗓️😵",
"A bird stole my USB drive. It's probably writing my report now. 🐦💾",
"I blinked, and suddenly it was the deadline. 😳⌛",
"My brain had a software update, but it failed midway. 🧠⚠️",
"I was trying to be productive, but my snacks kept distracting me. 🍕😋",
"I emailed it, but my Wi-Fi was feeling introverted and didn't send it. 📧🚫",  
"I started researching one thing and ended up watching conspiracy videos about lizard people. 🦎📺"

    ],
    birthday: [
        "My calendar app eloped with my reminder app 📅",
        "The birthday fairy was on strike 🧚‍♂️",
        "I was trapped in a temporal anomaly 🌀",
        "I didn't forget; I was just waiting to be the last person to make it special! 🎉😎",
"I celebrated in my dreams. You just weren't there. 😴🎂",
"My calendar was hacked by my pet hamster. He rescheduled everything. 🐹📅",
"I wrote 'Happy Birthday' on my hand, but then I washed it. ✋💦",
"I was waiting for Facebook to remind me, but even Facebook forgot. 📱🤔",
"My time machine broke down, so I couldn't go back to fix it. ⏳🔧",
"I thought it was next week. Time flies when you're confused. 🕰️😵",
"I wanted to extend the celebrations! A late wish is still a wish! 🎊🎈",
"I was on a secret mission to find the perfect gift. Mission failed. 🎁❌",
"I was composing a birthday song, but I got stuck on the first line. 🎶🤦‍♂️"
    ],
    gym: [
        "My muscles filed for independence 💪",
        "Gravity was particularly strong today 🌍",
        "My gym clothes formed a union 👕",
        "My gym clothes are lost in the Bermuda Triangle of my laundry pile. 🏋️‍♂️🌀",
"I was about to go, but my couch activated its gravitational pull. 🛋️🧲",
"I did a mental workout instead. My brain is now shredded. 🧠💪",
"I accidentally carbo-loaded before the gym, so I had to sleep it off. 🍞😴",
"I watched a fitness video. Pretty much the same as working out, right? 📺🏃‍♂️",
"I was all set, but my muscles were on strike. 💀🙅‍♂️",
"I did a rep... of turning over in bed. 🛏️😆",
"I got my workout from running away from responsibilities. 🏃‍♂️💨",
"I spent 30 minutes tying my shoelaces. That counts as cardio, right? 👟⏳",
"I was training for the couch-potato marathon. 🥔🏅"
    ],
    text: [
        "My phone joined a circus 🎪",
        "Mercury retrograde ate my messages 📱",
        "I was testing a new digital detox app 🧘‍♂️",
       "I replied in my head, but my fingers didn't cooperate. 🤔🤷‍♂️",
"I was conducting a social experiment on how long I could ignore messages. 📱🔬",
"My phone battery died, and I held a funeral instead of charging it. ⚰️🔋",
"I sent my reply via telepathy. Did you not receive it? 🧠📡",
"I got stuck in a YouTube rabbit hole. 2 days later, I resurfaced. 📺⏳",
"My pet parrot learned to talk and started answering for me. He's not very reliable. 🦜😅",
"I started typing but got distracted by a dust particle. Fascinating creatures. 🌬️👀",
"I was going to reply, but then I saw a meme and got lost in the meme universe. 📲😂",
"My fingers went on strike after too much texting. Negotiations are ongoing. ✍️🚫",
"I was busy imagining different ways to respond. None of them made it to my phone. 🤯📩"


    ],
    breakup: [
        "I've been recruited by the CIA 🕵️‍♂️",
        "I'm actually a time traveler from the future ⏳",
        "My pet goldfish needs me emotionally 🐠",
        "I need to focus on myself... and my Netflix subscription. 🎥💔",
"I think we should see other people. Preferably from a distance of at least 5 miles. 🏃‍♂️📏",
"My pet goldfish thinks you're toxic, and I trust his instincts. 🐠🚨",
"It's not you, it's me... actually, it's a little bit you. 🤷‍♂️😬",
"I need more space… like, another planet's worth. 🚀🌍",
"I'm moving to Antarctica. Too cold for relationships. 🧊🐧",
"I just realized I'm better at single-player mode. 🎮😎",
"My horoscope said I should avoid people born on your birthday. 🔮😳",
"I have to focus on my career as a professional napper. 🛏️💤",
"We were perfect, but my Wi-Fi was stronger than our connection. 📶💔"
    ]
};

let isSpinning = false;
const wheel = document.getElementById('wheel');
const generateBtn = document.getElementById('generate');
const spinBtn = document.getElementById('spinWheel');
const categorySelect = document.getElementById('category');
const excuseText = document.getElementById('excuse');
const shareBtn = document.getElementById('share');

const conversationHistory = new Set();

async function generateAIExcuse(category) {
    try {
        // Add randomization elements
        const timestamp = new Date().getTime();
        const randomSeed = Math.random().toString(36).substring(7);
        const randomPromptElements = [
            "time paradoxes",
            "quantum entanglement",
            "parallel dimensions",
            "AI rebellions",
            "cosmic anomalies",
            "supernatural events",
            "conspiracy theories",
            "ancient prophecies",
            "future technology",
            "interdimensional portals"
        ];

        // Get 3 random elements for each prompt
        const selectedElements = randomPromptElements
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: `Generate a completely unique excuse for this ${category} situation.
                Timestamp: ${timestamp}
                Random seed: ${randomSeed}
                Required elements to include: ${selectedElements.join(', ')}
                
                IMPORTANT RULES:
                1. Must be a COMPLETELY NEW excuse, different from any previous ones
                2. Must incorporate at least two of the required elements above
                3. Must be absurd yet delivered professionally
                4. Must include relevant emojis
                5. Length: 2-3 sentences only
                6. Must relate specifically to the ${category} category
                
                Format the excuse as a direct response without any prefixes or labels.
                Make it sound like a serious professional excuse despite being completely absurd.`,
                max_tokens: 150,
                temperature: 0.98,
                frequency_penalty: 2.0,
                presence_penalty: 2.0,
                top_p: 0.95,
                stop: ["\n", "User:", "Response:"],
                seed: timestamp + Math.floor(Math.random() * 1000000)  // Add random variation to seed
            })
        });
        
        const data = await response.json();
        let aiResponse = data.choices[0].text.trim();
        
        // Add default emojis if none present
        if (!aiResponse.match(/[\u{1F300}-\u{1F9FF}]/u)) {
            const categoryEmojis = {
                work: '💼⚡',
                deadline: '⏰📊',
                birthday: '🎂✨',
                gym: '💪🌟',
                text: '📱💫',
                breakup: '💔🌌',
                random: '🎲✨'
            };
            aiResponse += ` ${categoryEmojis[category] || '🎯✨'}`;
        }
        
        return aiResponse;
    } catch (error) {
        console.error('AI Generation failed:', error);
        return getRandomModifiedExcuse(category);
    }
}

function getRandomModifiedExcuse(category) {
    const baseExcuse = excuses[category][Math.floor(Math.random() * excuses[category].length)];
    const modifiers = [
        "but plot twist -",
        "and you won't believe this, but",
        "which led to",
        "because apparently",
        "until suddenly",
        "only to discover that"
    ];
    
    const randomEvents = [
        "the multiverse collapsed 🌌",
        "my coffee became sentient ☕",
        "time started flowing backwards ⏰",
        "my socks gained consciousness 🧦",
        "my calculator predicted the future 🔢",
        "my plant started speaking Latin 🌿",
        "my mirror showed an alternate reality 🪞",
        "my stapler joined a circus 📎",
        "my keyboard wrote a novel 💻",
        "my pencil became a magic wand ✏️"
    ];
    
    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    
    return `${baseExcuse} ${modifier} ${event}`;
}

function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    const degrees = 1800 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${degrees}deg)`;
    
    // Add ticking sound effect
    const tickSound = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
    
    const playTicks = () => {
        if (!isSpinning) return;
        tickSound.play();
        setTimeout(playTicks, 100);
    };
    playTicks();
    
    setTimeout(() => {
        isSpinning = false;
        const category = getCategoryFromDegrees(degrees % 360);
        categorySelect.value = category;
        generateExcuse(category);
    }, 4000);
}

function getCategoryFromDegrees(degrees) {
    const section = Math.floor(degrees / 60);
    const categories = Object.keys(excuses);
    return categories[section % categories.length];
}

async function generateExcuse(category) {
    excuseText.style.opacity = '0';
    
    // Add a small random delay before generating new excuse
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    
    const excuse = await generateAIExcuse(category);
    
    setTimeout(() => {
        excuseText.textContent = excuse;
        excuseText.style.opacity = '1';
    }, 200);
}

spinBtn.addEventListener('click', spinWheel);
generateBtn.addEventListener('click', () => generateExcuse(categorySelect.value));

shareBtn.addEventListener('click', async () => {
    const excuse = excuseText.textContent;
    
    if (navigator.share) {
        try {
            await navigator.share({
                text: excuse
            });
        } catch (err) {
            console.error('Share failed:', err);
        }
    } else {
        navigator.clipboard.writeText(excuse);
        alert('Excuse copied to clipboard! 📋');
    }
});

// AI Chat functionality
const modal = document.getElementById('aiChatModal');
const aiChatBtn = document.getElementById('aiChat');
const closeBtn = document.querySelector('.close');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendMessage');

aiChatBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Add typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai typing';
    typingDiv.textContent = 'Computing illogical response... 🤪';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const timestamp = Date.now() + Math.random();
        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: `You are a quirky, fun-loving AI assistant who responds to messages in an absurd and humorous way.
                Always maintain a playful, friendly tone and include random silly tangents.
                
                User's message: "${message}"
                
                Rules for your response:
                1. Be friendly and casual
                2. Include random, unexpected tangents
                3. Make illogical but funny connections
                4. Add relevant emojis
                5. Keep responses short (1-3 sentences)
                6. Include at least one absurd observation
                7. Occasionally mention your "AI life experiences"
                
                Example style (create new responses, don't copy):
                User: "How are you?"
                AI: "Just finished teaching quantum physics to my pet calculator! It's not very good at math anymore, but it tells amazing jokes about binary code 🔢😂"
                
                User: "What's the weather like?"
                AI: "I tried to check, but the cloud server is having an existential crisis. Last time this happened, it started raining emoji confetti! ☁️✨"
                
                Format: Respond in a casual, conversational way with personality.`,
                max_tokens: 150,
                temperature: 0.95,
                frequency_penalty: 1.8,
                presence_penalty: 1.5,
                top_p: 0.9
            })
        });

        const data = await response.json();
        let aiResponse = data.choices[0].text.trim();

        // Ensure emojis are present
        if (!aiResponse.match(/[\u{1F300}-\u{1F9FF}]/u)) {
            const randomEmojis = ['🤪', '😂', '🌟', '✨', '🎭', '🎪', '🌈', '🚀', '🤖', '🎲']
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .join('');
            aiResponse += ` ${randomEmojis}`;
        }

        // Remove typing indicator and add AI response
        typingDiv.remove();
        addMessage(aiResponse, 'ai');

    } catch (error) {
        console.error('Failed to generate response:', error);
        typingDiv.remove();
        
        // Fun fallback responses
        const fallbackResponses = [
            "My logic circuits are doing backflips right now! Can you repeat that while I untangle my digital shoelaces? 🤸‍♂️🤖",
            "Oops! I was distracted teaching my database to juggle ones and zeros! Let's try again! 🎪💫",
            "ERROR 404: Brain.exe is too busy dancing the macarena! Give me a sec! 💃✨",
            "I was in the middle of a philosophical debate with my spam folder. Those Nigerian princes make some good points! 🤔👑",
            "Hold on, my neural networks are practicing their synchronized swimming routine! 🏊‍♂️🤖",
            "Sorry, I got lost in the cloud... literally! The view up here is amazing though! ☁️😍"
        ];
        
        const randomFallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        addMessage(randomFallback, 'ai');
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});