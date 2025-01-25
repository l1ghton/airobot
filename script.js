// Логика переключения страниц
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');

        // Скрываем все секции
        sections.forEach(section => section.classList.remove('active'));

        // Отображаем выбранную секцию
        document.getElementById(target).classList.add('active');
    });
});
