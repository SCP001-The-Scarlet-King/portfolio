document.addEventListener('DOMContentLoaded', () => {
  // Existing code for glassmorphism effect
  const addGlassmorphism = (elements) => {
    elements.forEach(element => {
      element.style.backdropFilter = 'blur(10px)';
      element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      element.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
    });
  };
  
  addGlassmorphism(document.querySelectorAll('.project, .header1 button'));

  // Enhanced hover animation for project media elements
  document.querySelectorAll('.project img, .project video').forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05) rotate(2deg)';
      element.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
      element.style.transition = 'all 0.3s ease-in-out';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1) rotate(0deg)';
      element.style.boxShadow = 'none';
    });
  });

  // Improved parallax scrolling effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelectorAll('.project').forEach((project, index) => {
      const speed = 0.05 * (index + 1);
      project.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });

  // Enhanced typing animation for about section
  const aboutSection = document.querySelector('.about');
  const aboutText = aboutSection.textContent;
  aboutSection.innerHTML = '';
  let i = 0;
  function typeWriter() {
    if (i < aboutText.length) {
      const span = document.createElement('span');
      span.textContent = aboutText.charAt(i);
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.1s ease-in-out';
      aboutSection.appendChild(span);
      setTimeout(() => { span.style.opacity = '1'; }, 50);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // Improved fade-in animation for projects
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project').forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px) scale(0.95)';
    project.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(project);
  });

  // Enhanced animations for buttons
  document.querySelectorAll('.header1 button').forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(-20px) scale(0.9)';
    button.style.transition = 'all 0.5s ease-out';
    
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0) scale(1)';
    }, 100 * index);

    button.addEventListener('mouseenter', () => {
      button.style.animation = 'pulse 0.5s infinite alternate';
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.animation = 'none';
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // Improved animations for project text
  document.querySelectorAll('.project-title, .project-description').forEach((text) => {
    text.style.transition = 'all 0.3s ease-in-out';
    text.addEventListener('mouseenter', () => {
      text.style.color = 'skyblue';
      text.style.textShadow = '0 0 5px rgba(255, 204, 0, 0.5)';
      text.style.transform = 'scale(1.05)';
    });
    text.addEventListener('mouseleave', () => {
      text.style.color = '';
      text.style.textShadow = 'none';
      text.style.transform = 'scale(1)';
    });
  });
 
  // Improved particle background
  particlesJS('particles-js', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 400 } },
      color: { value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'] },
      shape: {
        type: ['circle', 'triangle', 'polygon'],
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'bubble' },
        onclick: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: {
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 }
      }
    },
    retina_detect: true
  });

  // Add particle effects to each project
  document.querySelectorAll('.project').forEach((project, index) => {
    const particleContainer = document.createElement('div');
    particleContainer.id = `project-particles-${index}`;
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.zIndex = '1';
    particleContainer.style.pointerEvents = 'none';
    project.style.position = 'relative';
    project.insertBefore(particleContainer, project.firstChild);

    particlesJS(`project-particles-${index}`, {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 2, random: true },
        move: { enable: true, speed: 1, direction: 'none', random: true, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' } },
        modes: { bubble: { distance: 100, size: 5, duration: 0.5 } }
      }
    });
  });

  // Add particle effects to buttons
  document.querySelectorAll('.header1 button').forEach((button, index) => {
    const particleContainer = document.createElement('div');
    particleContainer.id = `button-particles-${index}`;
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.zIndex = '1';
    particleContainer.style.pointerEvents = 'none';
    button.style.position = 'relative';
    button.appendChild(particleContainer);

    particlesJS(`button-particles-${index}`, {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'top', straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 50, duration: 0.4 } }
      }
    });
  });

  // Add keyframe animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.05); }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes glow {
      0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
      50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
      100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
    }
  `;
  document.head.appendChild(style);

  // Apply floating animation to project titles
  document.querySelectorAll('.project-title').forEach(title => {
    title.style.animation = 'float 3s ease-in-out infinite';
  });

  // Apply glow animation to contact information
  const contactInfo = document.querySelector('.contact a');
  if (contactInfo) {
    contactInfo.style.animation = 'glow 2s ease-in-out infinite';
  }
});