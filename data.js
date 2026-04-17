const PORTFOLIO_DATA = {
    home: {
        name: "Laziz",
        roles: ["Frontend Developer", "Python Specialist", "Tech Visionary", "Student"]
    },
    about: {
        title: "About Me",
        intro: "I am an <strong>ambitious and forward-thinking person.</strong> I don't just live 'as it happens'—I really <strong>think about the future</strong> and try to build a solid path for myself in advance.",
        features: [
            {
                title: "🎯 Goal-Oriented",
                text: "At 16+, I am already focused on:",
                items: [
                    "Studying abroad",
                    "Career in IT / AI",
                    "Scholarships",
                    "Educational budgeting",
                    "Skills for the future"
                ],
                footer: "This is a rarity, as most people at this age are still deciding what to play over the weekend."
            },
            {
                title: "🧠 Analytical Mindset",
                text: "I don't take information on faith and often:",
                items: [
                    "Compare options",
                    "Ask clarifying questions",
                    "Analyze pros and cons",
                    "Seek honest assessments"
                ],
                footer: "It is important for me to understand the <strong>real picture</strong>, not just because 'it's prestigious or fashionable'."
            },
            {
                title: "💻 Strong Interest in Technology",
                text: "I am truly drawn to the tech sphere:",
                items: [
                    "AI / Artificial Intelligence",
                    "Python Development",
                    "Full-stack Projects",
                    "Local LLMs / Models",
                    "GitHub / Open Source / CLI tools"
                ],
                footer: "I'm not just into IT for the money—I genuinely love the field itself."
            },
            {
                title: "🌍 Global Perspective",
                text: "I look beyond borders:",
                items: [
                    "Germany",
                    "South Korea",
                    "Japan",
                    "International educational markets"
                ],
                footer: "I am clearly aiming for a <strong>global level</strong> impact."
            },
            {
                title: "🎨 Creative Side",
                text: "Beyond logic and technique, I am passionate about:",
                items: [
                    "Music",
                    "Video Editing",
                    "Anime / Aesthetics / Visual Design"
                ],
                footer: "This makes me a well-rounded individual, not just a 'tech machine'."
            }
        ]
    },
    skills: {
        intro: "I love to learn new things and experiment with new technologies. These are some of the major languages and tools I work with:",
        skills: [
            {
                title: "Languages & Databases",
                items: [
                    { icon: "images/skills/html.png", title: "HTML" },
                    { icon: "images/skills/css.png", title: "CSS" },
                    { icon: "images/skills/js.png", title: "JavaScript" },
                    { icon: "images/skills/python.png", title: "Python" },
                    { icon: "images/skills/mysql.png", title: "PostgreSQL" }
                ]
            },
            {
                title: "Frameworks & Styling",
                items: [
                    { icon: "images/skills/react.png", title: "React" },
                    { icon: "images/skills/nodejs.png", title: "SCSS" }
                ]
            },
            {
                title: "Tools & Platforms",
                items: [
                    { icon: "images/skills/android-studio.png", title: "VS Code" },
                    { icon: "images/skills/git.png", title: "CLI Tools" },
                    { icon: "images/skills/docker.png", title: "Open Code" }
                ]
            }
        ]
    },
    projects: [
        {
            image: "images/about/visionX.png",
            title: "VisionX: AI Screen Intelligence 2.0",
            bodyText: "Next-generation neural interface for real-time screen analysis and interactive AI assistance. Supports Gemini, Groq, Mistral, and local Ollama with local TTS and dual-language UI.",
            links: [{ text: "GitHub", href: "https://github.com/anumeuz-art/visionx" }]
        },
        {
            image: "images/projects/portfolio-poster.png",
            title: "MineBot TG — Minecraft CMS",
            bodyText: "Comprehensive solution for automating Minecraft mod channels. Features AI post generation (Gemini/Groq), smart scheduling, userbot bridge for mod scanning, and auto-watermarking.",
            links: [{ text: "GitHub", href: "https://github.com/anumeuz-art/mine_bot" }]
        },
        {
            image: "images/about/llm_chat.png",
            title: "Ollama Nexus: Local Intelligence Hub",
            bodyText: "High-tech local station for working with Large Language Models. Features vision analysis, neural memory engine, and a sleek glassmorphism UI using Streamlit.",
            links: [{ text: "GitHub", href: "https://github.com/anumeuz-art/Ollama_local_model_chat" }]
        },
        {
            image: "images/about/clickui.png",
            title: "ClickUi",
            bodyText: "AI-assistant tool in pure Python. Integrates Whisper STT, Kokoro TTS, and web scraping for seamless voice and chat interactions.",
            links: [{ text: "GitHub", href: "https://github.com/anumeuz-art/ClickUi" }]
        },
        {
            image: "images/projects/portfolio-poster.png",
            title: "Personal Portfolio",
            bodyText: "A static portfolio built with pure frontend technologies, featuring dark mode support and smooth animations.",
            links: [{ text: "GitHub", href: "https://github.com/anumeuz-art" }]
        }
    ],
    social: [
        { network: "github", href: "https://github.com/anumeuz-art" },
        { network: "email", href: "mailto:perferdi1234@gmail.com" }
    ],
    navbar: {
        logo: { title: '<i class="fas fa-home"></i>' },
        sections: [
            { title: "Home", href: "index.html" },
            { title: "About", href: "about.html" },
            { title: "Skills", href: "skills.html" },
            { title: "Projects", href: "projects.html" }
        ]
    }
};
