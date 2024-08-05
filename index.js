// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add glassmorphism effect to projects and initial boxes
  const projects = document.querySelectorAll('.project');
  const initialBoxes = document.querySelectorAll('.header1 button');
  
  const addGlassmorphism = (elements) => {
    elements.forEach(element => {
      element.style.backdropFilter = 'blur(10px)';
      element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      element.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
    });
  };
  
  addGlassmorphism(projects);
  addGlassmorphism(initialBoxes);

  // Add hover animation to project images and videos
  const mediaElements = document.querySelectorAll('.project img, .project video');
  mediaElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05) rotate(2deg)';
      element.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1) rotate(0deg)';
      element.style.boxShadow = 'none';
    });
  });

  // Add parallax scrolling effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    projects.forEach((project, index) => {
      const speed = 0.1 * (index + 1);
      project.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });

  // Add typing animation to the about section
  const aboutSection = document.querySelector('.about');
  const aboutText = aboutSection.textContent;
  aboutSection.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < aboutText.length) {
      aboutSection.textContent += aboutText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // Add fade-in animation for projects on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  projects.forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px)';
    project.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(project);
  });

  // Enhanced animations for initial boxes (buttons)
  initialBoxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(-20px) scale(0.9)';
    box.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out, background-color 0.3s, box-shadow 0.3s';
    
    setTimeout(() => {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0) scale(1)';
    }, 100 * index);

    // Add pulsating effect on hover
    box.addEventListener('mouseenter', () => {
      box.style.animation = 'pulse 0.5s infinite alternate';
    });
    box.addEventListener('mouseleave', () => {
      box.style.animation = 'none';
    });
  });

  // Add animation to project text
  const projectTexts = document.querySelectorAll('.project-title, .project-description');
  projectTexts.forEach((text) => {
    text.style.transition = 'color 0.3s, text-shadow 0.3s';
    text.addEventListener('mouseenter', () => {
      text.style.color = '#ffcc00';
      text.style.textShadow = '0 0 5px rgba(255, 204, 0, 0.5)';
    });
    text.addEventListener('mouseleave', () => {
      text.style.color = '';
      text.style.textShadow = 'none';
    });
  });

  // Add particle background
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    }
  });
});

// Add keyframe animation for pulsating effect
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
  }
`;
document.head.appendChild(style);