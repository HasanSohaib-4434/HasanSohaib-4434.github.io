document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');

    initNavigation();
    initScrollEffects();
    initAnimateOnScroll();
    initProgressBars();
    initProjectFilter();

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }
});

function initNavigation() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        header.classList.toggle('scrolled', window.scrollY > 50);
    }

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('open');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });

        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    const isHome = currentPage === '' || currentPage === 'index.html';

    if (!isHome) {
        document.body.classList.add('inner-page');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const linkIsHome = href === 'index.html';
        if ((isHome && linkIsHome) || href === currentPage) {
            link.classList.add('active');
        }
    });
}

function initScrollEffects() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const target = document.querySelector('.quick-links');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function initAnimateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
}

function initProgressBars() {
    const bars = document.querySelectorAll('.progress-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width || bar.style.width;
                    bar.style.width = width;
                    observer.unobserve(bar);
                }
            });
        },
        { threshold: 0.5 }
    );

    bars.forEach(bar => {
        const width = bar.getAttribute('data-width') || bar.style.width;
        bar.setAttribute('data-width', width);
        bar.style.width = '0';
        observer.observe(bar);
    });
}

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const category = card.dataset.category;
                const show = filter === 'all' || category === filter;
                card.style.display = show ? '' : 'none';
                if (show) {
                    card.style.animation = 'slideUp 0.5s ease forwards';
                }
            });
        });
    });
}
