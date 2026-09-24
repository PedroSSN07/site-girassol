document.addEventListener('DOMContentLoaded', () => {

    // Rolagem suave para os links do menu que contêm "#"
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const id = this.getAttribute('href');
            const targetElement = document.querySelector(id);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensação da altura do cabeçalho
                    behavior: 'smooth'
                });
            }
        });
    });

});