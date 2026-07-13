// ==========================================
// PORTFOLIO LOADED
// =======================================

console.log("Portfolio Loaded");

// ==========================================
// EMAILJS
// ====================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_7yefj7h",
            "template_cnkwfyz",
            this
        )

        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })

        .catch((error) => {

            alert("Failed to send message.");

            console.log(error);

        });

    });

}

// ====================================
// LANGUAGE DROPDOWN
// ==========================================

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");

if (languageBtn && languageMenu) {

    languageBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        languageMenu.classList.toggle("show");

    });

    document.addEventListener("click", function () {

        languageMenu.classList.remove("show");

    });

}

// ==========================================
// SHEVY
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const openShevy = document.getElementById("openShevy");
    const closeShevy = document.getElementById("closeShevy");
    const shevyChat = document.getElementById("shevyChat");

    const loading = document.querySelector(".shevy-loading");
    const body = document.querySelector(".shevy-body");

    if (!openShevy || !closeShevy || !shevyChat) return;

    openShevy.addEventListener("click", function () {

        
        shevyChat.classList.add("active");

        
        loading.classList.remove("hide");
        body.classList.remove("show");

       
        setTimeout(function () {

            loading.classList.add("hide");
            body.classList.add("show");

        },1300);

    });

    closeShevy.addEventListener("click", function () {

        shevyChat.classList.remove("active");

    
        loading.classList.remove("hide");
        body.classList.remove("show");

    });








   // ==========================================
// SHEVY CHAT
// ==========================================

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

if (sendBtn && userInput && chatMessages) {

    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    });

}

function sendMessage() {

    const text = userInput.value.trim();

    if (text === "") return;

    chatMessages.innerHTML += `
        <div class="user-message">${text}</div>
    `;

    const question = text.toLowerCase();

    let reply = "";

    // ==========================================
    // GREETINGS
    // ==========================================

    if (

        question.includes("hi") ||
        question.includes("hello") ||
        question.includes("hey")

    ) {

        reply = `
        Hi! I can tell you about Ivy's projects, technical skills, background, and how to get in touch.

        Feel free to ask me anything!
        `;

    }

    // ==========================================
    // HOW ARE YOU
    // ==========================================

    else if (

        question.includes("how are you") ||
        question.includes("kamusta") ||
        question.includes("kamusta ka") ||
        question.includes("hru") ||
        question.includes("howru") ||
        question.includes("how's life")

    ) {

        reply = `

I'm doing great. I'm functioning perfectly and ready to help. Thanks for asking! How about you?

`;

    }

    // ==========================================
    // USER IS GOOD
    // ==========================================

    else if (

        question.includes("good") ||
        question.includes("wonderful") ||
        question.includes("nice") ||
        question.includes("great") ||
        question.includes("fine") ||
        question.includes("okay") ||
        question.includes("awesome") ||
        question.includes("happy")

    ) {

        reply = `

That's great to hear!

I'm glad you're doing well.

How can I help you explore Ivy's portfolio today?

`;

    }

    // ==========================================
    // USER IS SAD
    // ==========================================

    else if (

        question.includes("sad") ||
        question.includes("bad") ||
        question.includes("not good") ||
        question.includes("depressed") ||
        question.includes("tired") ||
        question.includes("stress") ||
        question.includes("stressed")

    ) {

        reply = `

I'm sorry to hear that.

I hope things get better soon.

If browsing Ivy's portfolio can help distract you for a moment or answer any questions, I'm here to help.

`;

    }

    // ==========================================
    // THANK YOU
    // ==========================================

    else if (

        question.includes("thank") ||
        question.includes("thanks") ||
        question.includes("salamat") ||
        question.includes("maraming salamat") ||
        question.includes("tnx") ||
        question.includes("ok")

    ) {

        reply = `

If there's anything else you'd like to know about Ivy's work or experience, just let me know.

`;

    }

    // ==========================================
    // BYE
    // ==========================================

    else if (

        question.includes("bye") ||
        question.includes("goodbye") ||
        question.includes("see you")

    ) {

        reply = `

It was a pleasure chatting with you.

Have a wonderful day, and thanks for visiting Ivy's portfolio!

`;

    }

    // ==========================================
    // ABOUT
    // ==========================================

    else if (question.includes("about")) {

        reply = "Ivy is a Front-End Web Developer passionate about building modern, responsive, and user-friendly websites.";

    }

    // ==========================================
    // SKILLS
    // ==========================================

    else if (question.includes("skill")) {

        reply = "Their technical skills include HTML, CSS, Bootstrap, JavaScript, Git, GitHub, Responsive Design, and they are currently learning PHP, Laravel, and Flutter.";

    }

    // ==========================================
    // PROJECTS
    // ==========================================

    else if (question.includes("project")) {

        reply = "Their featured project is Gimeno Motors, a responsive vehicle showcase website. More exciting projects are coming soon.";

    }

    // ==========================================
    // RESUME
    // ==========================================

    else if (question.includes("resume")) {

        reply = "You can download Ivy's resume from the Home section.";

    }

    // ==========================================
    // CONTACT
    // ==========================================

    else if (question.includes("contact")) {

        reply = "You can reach Ivy through the contact form or the social media links in the Contact section.";

    }

    // ==========================================
    // WHO ARE YOU
    // ==========================================

    else if (

        question.includes("who are you") ||
        question.includes("sino ka") ||
        question.includes("ano ka") ||
        question.includes("your name")

    ) {

        reply = `

I'm Shevy, Ivy's portfolio assistant.

I'm here to help visitors learn more about their projects, technical skills, and experience.

Feel free to ask me anything!

`;

    }

    // ==========================================
    // PERSONAL QUESTIONS
    // ==========================================

    else if (

        question.includes("gender") ||
        question.includes("girlfriend") ||
        question.includes("relationship") ||
        question.includes("single") ||
        question.includes("married") ||
        question.includes("partner") ||
        question.includes("dating") ||
        question.includes("identity") ||
        question.includes("wife") ||
        question.includes("family") ||
        question.includes("jowa") ||
        question.includes("sex") ||
        question.includes("financial") ||
        question.includes("income") ||
        question.includes("private") ||
        question.includes("life") ||
        question.includes("school") ||
        question.includes("city") ||
        question.includes("iloilo") ||
        question.includes("from") ||
        question.includes("age") ||
        question.includes("hobbies") ||
        question.includes("likes") ||
        question.includes("love life")

    ) {

        reply = `

Hmm... it looks like that's a personal question.<br>

I'm here to help with information about Ivy's portfolio, projects, technical skills, and experience.<br><br>

If you have any professional inquiries, feel free to use the contact form. Ivy would be happy to hear from you!

`;

    }

    // ==========================================
    // UNKNOWN
    // ==========================================

    else {

        reply = `
        Hmm, I'm not sure what that means. Could you give me a little more context? You can ask me about Ivy's projects, technical skills, background, and how to get in touch.
        `;

    }

    setTimeout(function () {

        chatMessages.innerHTML += `
            <div class="bot-message">${reply}</div>
        `;

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 500);

    userInput.value = "";

}

// ==========================================
// LANGUAGE TRANSLATION
// ==========================================

const englishBtn = document.getElementById("englishBtn");
const tagalogBtn = document.getElementById("tagalogBtn");

const translations = {

    en: {

        // NAVBAR
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",

        // HERO
        heroTitle: `
            Building Modern
            <span>Digital Experiences</span><br>
            That Inspire.
        `,

        heroDescription:
            "I create responsive, modern, and user-friendly websites using HTML, CSS, Bootstrap, and JavaScript. Currently expanding my skills in Laravel, PHP, and Flutter while continuously improving as a developer.",

        viewProjects: "View Projects",

        downloadResume: "Download Resume",

        // ABOUT
        aboutTitle: `
            Crafting Clean Interfaces
            With Modern Code.
        `,

        aboutText1:
            "I'm Ivy Gimeno, a Front-End Web Developer passionate about creating responsive, modern, and user-friendly websites using HTML, CSS, Bootstrap, and JavaScript.",

        aboutText2:
            "I'm continuously improving my skills by learning Laravel, PHP, and Flutter while building real-world projects that strengthen my experience as a developer.",

        skillsTitle: "Technical Skills",

    skillsTitle: "Technical Skills",

    projectsTitle: "Selected Projects",

    projectsDescription:
    "A collection of web applications showcasing my skills in responsive web development, clean UI design, and modern front-end technologies.",

    project1Title: "Gimeno Motors",

    project1Description:
    "A responsive vehicle showcase website featuring a modern UI, smooth navigation, and mobile-friendly experience.",

    liveDemo: "Live Demo",

    github: "GitHub",

contactTitle: `
Let's Build Something
<span>Amazing Together.</span>
`,

contactDescription:
"Have a project in mind or need a responsive website? I'm always open to freelance opportunities and collaborations.",

contactFormTitle: "Get In Touch",

sendMessage: "Send Message",















        

},

    tl: {

        // NAVBAR
        navHome: "Bahay",
        navAbout: "Tungkol",
        navProjects: "Mga Proyekto",
        navContact: "Makipag-ugnayan",

        // HERO
        heroTitle: `
            Gumagawa ng
            <span>Digital Experience</span><br>
            na Nakaka-inspire.
        `,

        heroDescription:
            "Lumilikha ako ng moderno, responsive, at madaling gamitin na mga website gamit ang HTML, CSS, Bootstrap, at JavaScript. Patuloy kong pinapalawak ang aking kaalaman sa Laravel, PHP, at Flutter habang pinagbubuti ang aking kakayahan bilang developer.",

        viewProjects: "Tingnan ang Mga Proyekto",

        downloadResume: "I-download ang Resume",

        // ABOUT
        aboutTitle: `
            Lumilikha ng Malinis na Interface
            Gamit ang Makabagong Code.
        `,

        aboutText1:
            "Ako si Ivy Gimeno, isang Front-End Web Developer na may hilig sa paggawa ng moderno, responsive, at madaling gamitin na mga website gamit ang HTML, CSS, Bootstrap, at JavaScript.",

        aboutText2:
            "Patuloy kong pinauunlad ang aking kakayahan sa pamamagitan ng pag-aaral ng Laravel, PHP, at Flutter habang gumagawa ng mga totoong proyekto upang mapalawak ang aking karanasan bilang developer.",

         skillsTitle: "Mga Teknikal na Kasanayan",

    projectsTitle: "Mga Napiling Proyekto",

    projectsDescription:
    "Isang koleksyon ng mga web application na nagpapakita ng aking kakayahan sa responsive web development, malinis na UI design, at makabagong front-end technologies.",

    project1Title: "Gimeno Motors",

    project1Description:
    "Isang responsive na website para sa pagpapakita ng mga sasakyan na may modernong interface, maayos na navigation, at mobile-friendly na karanasan.",

    liveDemo: "Live Demo",

    github: "GitHub",

contactTitle: `
Gumawa Tayo ng
<span>Isang Kahanga-hangang Proyekto.</span>
`,

contactDescription:
"May proyekto ka bang gustong ipagawa o kailangan ng responsive website? Bukas ako sa freelance projects at collaborations.",

contactFormTitle: "Makipag-ugnayan",

sendMessage: "Ipadala ang Mensahe",











    }

};

function changeLanguage(lang){

    document.querySelectorAll("[data-lang]").forEach(function(item){

        const key = item.dataset.lang;

        if(translations[lang][key]){

            item.innerHTML = translations[lang][key];

        }

    });

}

// English
if(englishBtn){

    englishBtn.addEventListener("click", function(){

        changeLanguage("en");

    });

}

// Tagalog
if(tagalogBtn){

    tagalogBtn.addEventListener("click", function(){

        changeLanguage("tl");

    });

}

});




