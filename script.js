const sectionTitles = document.querySelectorAll('.section-title');

sectionTitles.forEach(title => {
  const section = title.closest('section');
  const content = section.querySelector('.section-content');

  section.addEventListener('click', () => {
    section.classList.toggle('active');
    content.style.display = section.classList.contains('active') ? 'block' : 'none';
  });

  section.addEventListener('mouseenter', () => {
    if (section.classList.contains('active')) {
      content.style.display = 'block';
    }
  });

  section.addEventListener('mouseleave', () => {
    if (section.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
