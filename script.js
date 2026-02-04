// Translations
const translations = {
    it: {
        nav_home: "Home",
        nav_features: "Features",
        nav_community: "Community",
        add_bot: "Aggiungi Bot",
        hero_description: "Il bot Discord completo per la tua community. Moderazione, divertimento e molto altro!",
        join_now: "Unisciti Ora",
        features_title: "Le Nostre Features",
        help_title: "Help Commands",
        help_desc: "Sistema di aiuto completo con categorie organizzate: Everyone, Fun, Moderation, MiniGames e Premium.",
        calc_title: "Calcolatrice Avanzata",
        calc_desc: "Calcolatrice interattiva integrata con pulsanti per calcoli rapidi e semplici direttamente in chat.",
        fun_title: "Fun Commands",
        fun_desc: "Comandi divertenti come Dog Machine per immagini casuali di cani e tante altre sorprese!",
        afk_title: "Modalità AFK",
        afk_desc: "Imposta la modalità AFK con motivo personalizzato. Il bot notificherà gli altri quando sei assente.",
        games_title: "Mini Games",
        games_desc: "Giochi divertenti integrati per intrattenere la tua community e passare il tempo insieme.",
        mod_title: "Moderazione",
        mod_desc: "Strumenti completi di moderazione per gestire il tuo server in modo efficace e sicuro.",
        stat1_label: "Comandi Disponibili",
        stat2_label: "Online Sempre",
        stat3_label: "Possibilità",
        stat4_label: "Aggiornamenti Frequenti",
        footer_text: "APOCALISS Support. Tutti i diritti riservati."
    },
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_community: "Community",
        add_bot: "Add Bot",
        hero_description: "The complete Discord bot for your community. Moderation, fun and much more!",
        join_now: "Join Now",
        features_title: "Our Features",
        help_title: "Help Commands",
        help_desc: "Complete help system with organized categories: Everyone, Fun, Moderation, MiniGames and Premium.",
        calc_title: "Advanced Calculator",
        calc_desc: "Integrated interactive calculator with buttons for quick and simple calculations directly in chat.",
        fun_title: "Fun Commands",
        fun_desc: "Fun commands like Dog Machine for random dog images and many other surprises!",
        afk_title: "AFK Mode",
        afk_desc: "Set AFK mode with custom reason. The bot will notify others when you're away.",
        games_title: "Mini Games",
        games_desc: "Integrated fun games to entertain your community and spend time together.",
        mod_title: "Moderation",
        mod_desc: "Complete moderation tools to manage your server effectively and safely.",
        stat1_label: "Available Commands",
        stat2_label: "Always Online",
        stat3_label: "Possibilities",
        stat4_label: "Frequent Updates",
        footer_text: "APOCALISS Support. All rights reserved."
    }
};

// Language toggle
const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');
const langOptions = document.querySelectorAll('.lang-option');
let currentLang = 'it';

function translatePage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update both toggles state
    const toggles = [langToggle, langToggleMobile];
    toggles.forEach(toggle => {
        if (toggle) {
            if (lang === 'en') {
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
            }
        }
    });
    
    // Update active lang option
    langOptions.forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    localStorage.setItem('preferred-language', lang);
}

// Desktop toggle click
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'it' ? 'en' : 'it';
        translatePage(newLang);
    });
}

// Mobile toggle click
if (langToggleMobile) {
    langToggleMobile.addEventListener('click', () => {
        const newLang = currentLang === 'it' ? 'en' : 'it';
        translatePage(newLang);
    });
}

// Lang option click
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        translatePage(option.dataset.lang);
    });
});

// Load saved language preference
const savedLang = localStorage.getItem('preferred-language');
if (savedLang) {
    translatePage(savedLang);
} else {
    // Set initial active state for IT
    langOptions.forEach((option, index) => {
        if (index === 0 || index === 2) { // First IT option in both toggles
            option.classList.add('active');
        }
    });
}

// Generate stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Button click effect - removed since now handled inline in HTML