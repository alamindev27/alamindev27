
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed controller

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Scroll korle hero section screen-e ashle automatic animate hobe
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.disconnect(); // Ekbar animate hoye gele observer bondho hoye jabe
            }
        });
    }, { threshold: 0.5 });

    const metricsElement = document.getElementById('metrics-container');
    if (metricsElement) {
        observer.observe(metricsElement);
    }
});





document.addEventListener("DOMContentLoaded", () => {
        const skillBars = document.querySelectorAll('.skill-bar');

        const animateSkills = () => {
            skillBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
        };

        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsObserver.observe(skillsContainer);
        }
    });
