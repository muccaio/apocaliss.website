// Translations
const translations = {
    it: {
        nav_home: "Home",
        nav_features: "Features",
        nav_community: "Community",
        add_bot: "Aggiungi Bot",
        hero_description: "Il bot Discord completo per la tua community. Moderazione, ticket, livelli e molto altro!",
        join_now: "Unisciti Ora",
        features_title: "Le Nostre Features",
        mod_title: "Moderazione",
        mod_desc: "Ban, kick, timeout, warn e pulizia chat, più /pex e /depex per gestire i ruoli con log completo.",
        tickets_title: "Sistema Ticket",
        tickets_desc: "Pannelli personalizzabili con pulsanti o menu, trascrizione in DM e chiusura automatica se l'utente esce.",
        apps_title: "Candidature",
        apps_desc: "Crea più tipi di candidatura, ognuno con le sue domande, e pubblica il pannello dove preferisci.",
        welcome_title: "Benvenuto & Addio",
        welcome_desc: "Messaggi personalizzati con colori e immagini, più un ruolo automatico per i nuovi membri.",
        verify_title: "Verifica & Reaction Role",
        verify_desc: "Pannello di verifica per i nuovi arrivati e fino a 20 pulsanti per scegliere i ruoli.",
        levels_title: "Livelli & XP",
        levels_desc: "Sistema di XP con /rank e /leaderboard, attivabile o disattivabile per ogni server.",
        stats_title: "Statistiche Live",
        stats_desc: "Canali che mostrano le statistiche del server e si aggiornano da soli.",
        feedback_title: "Sondaggi & Feedback",
        feedback_desc: "Sondaggi con /poll, suggerimenti, recensioni, segnalazione bug e /calladmin per le emergenze.",
        fun_title: "Fun & Eventi",
        fun_desc: "8ball, dadi, coinflip, meme e l'evento Halloween con trick or treat e classifica caramelle.",
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
        hero_description: "The complete Discord bot for your community. Moderation, tickets, levels and much more!",
        join_now: "Join Now",
        features_title: "Our Features",
        mod_title: "Moderation",
        mod_desc: "Ban, kick, timeout, warn and chat cleanup, plus /pex and /depex to manage roles with a full log.",
        tickets_title: "Ticket System",
        tickets_desc: "Customizable panels with buttons or menus, DM transcripts and automatic closing when the user leaves.",
        apps_title: "Applications",
        apps_desc: "Create multiple application types, each with its own questions, and publish the panel wherever you like.",
        welcome_title: "Welcome & Goodbye",
        welcome_desc: "Custom messages with colors and images, plus an automatic role for new members.",
        verify_title: "Verify & Reaction Roles",
        verify_desc: "Verification panel for newcomers and up to 20 buttons to pick roles.",
        levels_title: "Levels & XP",
        levels_desc: "XP system with /rank and /leaderboard, which can be turned on or off for each server.",
        stats_title: "Live Stats",
        stats_desc: "Channels that show your server statistics and update themselves.",
        feedback_title: "Polls & Feedback",
        feedback_desc: "Polls with /poll, suggestions, reviews, bug reports and /calladmin for emergencies.",
        fun_title: "Fun & Events",
        fun_desc: "8ball, dice, coinflip, memes and the Halloween event with trick or treat and a candy leaderboard.",
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