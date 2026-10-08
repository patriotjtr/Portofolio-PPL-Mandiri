// SPA NAVIGATION FUNCTION
function navigateTo(targetId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show targeted section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update active navbar button
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-target') === targetId) {
            btn.classList.add('active');
        }
    });

    // Scroll smoothly to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// LISTENERS FOR NAVBAR BUTTONS
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        navigateTo(target);
    });
});

// CYCLE TAB SWITCHER (PEMBELAJARAN)
function switchCycle(cycleId) {
    const contents = document.querySelectorAll('.cycle-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabBtns = document.querySelectorAll('.tabs-navigation .tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(cycleId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// DARK / LIGHT MODE TOGGLE
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Switch Icon
    const icon = themeToggleBtn.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
});
