const sectionTitles = document.querySelectorAll('.section-title');

sectionTitles.forEach(title => {
  const section = title.closest('section');
  const content = section.querySelector('.section-content');

  section.addEventListener('click', () => {
    section.classList.toggle('active');

    if (section.classList.contains('active')) {
      content.style.display = 'block';
      content.style.opacity = '0'; // Start with 0 opacity
      setTimeout(() => {
        content.style.opacity = '1'; // Fade in
      }, 300);
    } else {
      content.style.opacity = '0'; // Fade out
      setTimeout(() => {
        content.style.display = 'none';
      }, 200); // Adjust the delay duration
    }
  });

  section.addEventListener('mouseenter', () => {
    if (section.classList.contains('active')) {
      content.style.display = 'block';
      content.style.opacity = '1'; // Show with full opacity
    }
  });

  section.addEventListener('mouseleave', () => {
    if (!section.classList.contains('active')) {
      content.style.opacity = '0'; // Hide with fading out
      setTimeout(() => {
        content.style.display = 'none';
      }, 300); // Adjust the delay duration
    }
  });
});
