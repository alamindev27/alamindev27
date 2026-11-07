
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


document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');

    // স্ক্রোল পজিশন চেক করে বাটন শো/হাইড করা
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // ৩০০ পিক্সেল নিচে স্ক্রোল করলে বাটন আসবে
            backToTopBtn.classList.remove('hidden');
            setTimeout(() => {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            }, 10);
        } else {
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            backToTopBtn.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    backToTopBtn.classList.add('hidden');
                }
            }, 300);
        }
    });

    // বাটনে ক্লিক করলে স্মুথলি টপে স্ক্রোল করবে
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const toggleSocialBtn = document.getElementById('toggleSocialBtn');
    const contactExpandMenu = document.getElementById('contactExpandMenu');
    const socialIcon = document.getElementById('socialIcon');

    let isExpanded = false;

    // ১. ব্যাক টু টপ বাটন ভিজিবিলিটি হ্যান্ডেল (৩০০ পিক্সেল স্ক্রোল করার পর আসবে)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            setTimeout(() => {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            }, 10);
        } else {
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            backToTopBtn.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    backToTopBtn.classList.add('hidden');
                }
            }, 300);
        }
    });

    // ২. সোস্যাল বাটন ক্লিক করলে হোয়াটসঅ্যাপ ও জিমেইল মেনু এক্সপ্যান্ড/কলাপ্স হবে
    toggleSocialBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isExpanded = !isExpanded;

        if (isExpanded) {
            contactExpandMenu.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
            contactExpandMenu.classList.add('opacity-100', 'translate-y-0');
            socialIcon.style.transform = 'rotate(45deg)'; // আইকনটি ঘুরে ক্রস স্টাইল বা অ্যানিমেটেড লুক নেবে
        } else {
            contactExpandMenu.classList.remove('opacity-100', 'translate-y-0');
            contactExpandMenu.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
            socialIcon.style.transform = 'rotate(0deg)';
        }
    });

    // পেজের অন্য কোথাও ক্লিক করলে মেনু অটো বন্ধ হয়ে যাবে
    document.addEventListener('click', () => {
        if (isExpanded) {
            isExpanded = false;
            contactExpandMenu.classList.remove('opacity-100', 'translate-y-0');
            contactExpandMenu.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
            socialIcon.style.transform = 'rotate(0deg)';
        }
    });

    // ৩. ব্যাক টু টপ বাটনে ক্লিক করলে স্মুথলি টপে চলে যাবে
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
