const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('hidden');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navContainer.classList.add('hidden');

        sections.forEach(section => {
            section.classList.remove('visible');
        });

        const target = document.getElementById(item.dataset.section);
        target.classList.add('visible');
    });
});
