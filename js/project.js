// Hent alle overskrifter med klassen "heading-project"
const headings = document.querySelectorAll('.heading-project');

// Lytt etter scrollhendelse
window.addEventListener('scroll', () => {
  headings.forEach((heading) => {
    // Hent overskriftens posisjon i forhold til visningsvinduet
    const bounding = heading.getBoundingClientRect();

    // Sjekk om overskriften er synlig i visningsvinduet
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      heading.style.transform = 'translateX(0)';
      heading.style.opacity = 1;
    }
  });
});