document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadNavigation();
    loadPageContent();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    AOS.init({ duration: 1000, once: true });
});

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle-container');
    const toggleCircle = document.getElementById('theme-toggle-circle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(toggleCircle) toggleCircle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if(toggleCircle) toggleCircle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if(toggleCircle) toggleCircle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
}

function loadNavigation() {
    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.getElementById('nav-links');
    if(!navLinks) return;

    if(navLogo) navLogo.innerHTML = PORTFOLIO_DATA.navbar.logo.title;
    PORTFOLIO_DATA.navbar.sections.forEach(section => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const activeClass = window.location.pathname.endsWith(section.href) ? 'active fw-bold' : '';
        li.innerHTML = `<a class="nav-link ${activeClass}" href="${section.href}">${section.title}</a>`;
        navLinks.appendChild(li);
    });
}

function loadPageContent() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        renderHome();
    } else if (page === 'about.html') {
        renderAbout();
    } else if (page === 'skills.html') {
        renderSkills();
    } else if (page === 'projects.html') {
        renderProjects();
    }
    renderSocials();
}

function renderHome() {
    const nameEl = document.getElementById('home-name');
    const roleEl = document.getElementById('home-roles');
    if(nameEl) nameEl.innerText = PORTFOLIO_DATA.home.name;
    
    if(roleEl && typeof Typewriter !== 'undefined') {
        new Typewriter(roleEl, {
            strings: PORTFOLIO_DATA.home.roles,
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50
        });
    }
}

function renderAbout() {
    const content = document.getElementById('about-content');
    if(!content) return;
    
    let slidesHtml = '';
    PORTFOLIO_DATA.about.features.forEach((feature) => {
        slidesHtml += `
            <div class="swiper-slide h-auto">
                <div class="feature-card">
                    <h3>${feature.title}</h3>
                    <p>${feature.text}</p>
                    <ul>
                        ${feature.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <div class="feature-footer">
                        <em>${feature.footer}</em>
                    </div>
                </div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="text-center mb-5" data-aos="fade-up">
            <p class="lead mx-auto" style="font-size: 1.4em; max-width: 800px;">${PORTFOLIO_DATA.about.intro}</p>
        </div>
        <div class="swiper mySwiper" data-aos="fade-up">
            <div class="swiper-wrapper">
                ${slidesHtml}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;

    // Initialize Swiper after content is rendered
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

function renderSkills() {
    const content = document.getElementById('skills-content');
    if(!content) return;
    let delay = 0;
    PORTFOLIO_DATA.skills.skills.forEach(skillSet => {
        const setDiv = document.createElement('div');
        setDiv.className = 'col-12 mt-5';
        setDiv.innerHTML = `<h2 class="mb-4" data-aos="fade-up">${skillSet.title}</h2><div class="row g-4 justify-content-center" id="skill-set-${delay}"></div>`;
        content.appendChild(setDiv);
        
        const setContent = document.getElementById(`skill-set-${delay}`);
        skillSet.items.forEach(skill => {
            const col = document.createElement('div');
            col.className = 'col-6 col-md-3 col-lg-2';
            col.setAttribute('data-aos', 'zoom-in');
            col.setAttribute('data-aos-delay', delay % 500);
            col.innerHTML = `
                <div class="card skill-card p-3 h-100 border-0 shadow-sm">
                    <img src="${skill.icon}" class="skill-img mx-auto mb-2" alt="${skill.title}">
                    <div class="small fw-bold">${skill.title}</div>
                </div>
            `;
            setContent.appendChild(col);
            delay += 50;
        });
    });
}

function renderProjects() {
    const content = document.getElementById('projects-content');
    if(!content) return;
    
    // Initialize Modal
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    PORTFOLIO_DATA.projects.forEach((project, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', (index * 100) % 600);
        col.innerHTML = `
            <div class="card project-card shadow-sm h-100 cursor-pointer">
                <div class="img-container overflow-hidden">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                </div>
                <div class="card-body d-flex flex-column text-start">
                    <h5 class="card-title fw-bold">${project.title}</h5>
                    <p class="card-text text-muted line-clamp">${project.bodyText}</p>
                    <div class="mt-auto">
                        <button class="btn btn-sm btn-outline-primary mt-2">View Details</button>
                    </div>
                </div>
            </div>
        `;

        // Handle card click
        col.querySelector('.project-card').addEventListener('click', () => {
            document.getElementById('modalTitle').innerText = project.title;
            document.getElementById('modalBody').innerText = project.bodyText;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalLinks').innerHTML = project.links.map(l => 
                `<a href="${l.href}" target="_blank" class="btn btn-primary px-4">${l.text}</a>`
            ).join('');
            modal.show();
        });

        content.appendChild(col);
    });
}

function renderSocials() {
    const container = document.getElementById('social-links');
    if(!container) return;
    PORTFOLIO_DATA.social.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'social-icon';
        const iconClass = link.network === 'github' ? 'fab fa-github' : (link.network === 'linkedin' ? 'fab fa-linkedin' : 'fas fa-envelope');
        a.innerHTML = `<i class="${iconClass}"></i>`;
        container.appendChild(a);
    });
}
