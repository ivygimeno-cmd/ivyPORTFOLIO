// ================================
// NAVBAR SCROLL
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// EMAILJS
// ================================

emailjs.init("4qH_bk_U3udcmaTcZ");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = document.querySelector(".btn-contact");

        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        emailjs.sendForm(
            "service_7yefj7h",
            "template_cnkwfyz",
            this
        )

        .then(() => {

    contactForm.reset();

    window.location.href = "thankyou.html";

})

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

            button.disabled = false;
            button.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

        });

    });

}


/*==============================
LANGUAGE DROPDOWN
==============================*/

const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");

if (langToggle && langMenu) {

    langToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        langMenu.classList.toggle("show");

    });

    document.addEventListener("click", function () {

        langMenu.classList.remove("show");

    });

}

/*==============================
LANGUAGE TRANSLATION
==============================*/

const langOptions = document.querySelectorAll(".lang-option");
const currentFlag = document.getElementById("currentFlag");

langOptions.forEach(option => {

    option.addEventListener("click", () => {

        const lang = option.dataset.lang;

        // Change Flag

        if(lang === "en"){

            currentFlag.className = "fi fi-us";

        }

        else if(lang === "zh"){

            currentFlag.className = "fi fi-cn";

        }

        else if(lang === "es"){

            currentFlag.className = "fi fi-es";

        }

        // Translate Text

        document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[lang][key]) {

        element.innerHTML = translations[lang][key];

    }

});

document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

    const key = element.dataset.i18nPlaceholder;

    if (translations[lang][key]) {

        element.placeholder = translations[lang][key];

    }

});

        langMenu.classList.remove("show");

    });

});