const headings = document.querySelectorAll('.heading-project');

window.addEventListener('scroll', () => {
  headings.forEach((heading) => {

    const bounding = heading.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      heading.style.transform = 'translateX(0)';
      heading.style.opacity = 1;
    }
  });
});