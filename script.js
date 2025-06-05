document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.display = 'none';
            
            // Animate elements after page load
            gsap.from('.home-content', { 
                opacity: 0, 
                y: 50, 
                duration: 1, 
                ease: 'power3.out' 
            });
            
            gsap.from('.hero-image', { 
                opacity: 0, 
                x: 50, 
                duration: 1, 
                ease: 'power3.out', 
                delay: 0.3 
            });
            
            gsap.from('.social-icons a', { 
                opacity: 0, 
                y: 20, 
                duration: 0.5, 
                stagger: 0.1, 
                delay: 0.8 
            });
        }, 1000);
    });

    // Theme Toggle
    const themeSwitch = document.getElementById('checkbox');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Active Nav Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-nav');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animate Skills Progress Bars on Scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for skills section
    const skillsSection = document.querySelector('.skills-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillsSection);

    // 3D Laptop Interaction
    const laptopModel = document.getElementById('laptopModel');
    
    if (laptopModel) {
        document.addEventListener('mousemove', function(e) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            laptopModel.style.transform = `perspective(1000px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        });
        
        // Reset position when mouse leaves
        document.addEventListener('mouseleave', function() {
            laptopModel.style.transform = 'perspective(1000px) rotateX(20deg) rotateY(20deg)';
        });
    }

    // Resume Download Button
    const resumeDownload = document.getElementById('resumeDownload');
    
    if (resumeDownload) {
        resumeDownload.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual resume file path
            const fileUrl = 'Abhishek-Raut-Resume.pdf';
            
            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = 'Abhishek-Raut-Resume.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }

    // Scroll Reveal Animations
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        reset: true
    });
    
    scrollReveal.reveal('.section-title, .about-image, .about-content h3, .about-content p', { 
        interval: 200 
    });
    
    scrollReveal.reveal('.skill-item, .soft-skill-tags, .other-skill-tags', { 
        interval: 150 
    });
    
    scrollReveal.reveal('.project-card', { 
        interval: 200 
    });
    
    scrollReveal.reveal('.contact-info, .contact-form', { 
        interval: 200 
    });
});

// Add these to your existing script.js

// Cartoon Computer Interactions
const cartoonComputer = document.getElementById('cartoonComputer');
if (cartoonComputer) {
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cartoonComputer.querySelector('.computer-body').style.transform = 
            `rotateX(${15 + yAxis}deg) rotateY(${-5 + xAxis}deg)`;
    });

    // Eye follow cursor effect
    const eyes = cartoonComputer.querySelectorAll('.eye');
    document.addEventListener('mousemove', (e) => {
        if (!eyes.length) return;
        
        const computerRect = cartoonComputer.getBoundingClientRect();
        const computerCenterX = computerRect.left + computerRect.width / 2;
        const computerCenterY = computerRect.top + computerRect.height / 2;
        
        const angleX = (e.clientX - computerCenterX) / 20;
        const angleY = (e.clientY - computerCenterY) / 20;
        
        eyes.forEach(eye => {
            eye.style.transform = `translate(${angleX}px, ${angleY}px)`;
        });
    });

    // Make computer "talk" when clicked
    cartoonComputer.addEventListener('click', () => {
        const mouth = cartoonComputer.querySelector('.mouth');
        if (mouth) {
            mouth.style.animation = 'none';
            void mouth.offsetWidth; // Trigger reflow
            mouth.style.animation = 'talk 0.5s steps(2) 3';
        }
        
        // Add new code line
        const codeDisplay = cartoonComputer.querySelector('.code-display');
        if (codeDisplay && codeDisplay.children.length < 5) {
            const newLine = document.createElement('span');
            newLine.className = 'code-line';
            newLine.style.opacity = '0';
            newLine.textContent = `>> User clicked at ${new Date().getHours()}:${new Date().getMinutes()}`;
            codeDisplay.appendChild(newLine);
            
            setTimeout(() => {
                newLine.style.animation = 'fadeInCode 1s forwards';
            }, 100);
        }
    });
}

// Project Data - You can add all your projects here
const projects = {
    1: {
        title: "Shreenath Pooja Store",
        images: [
            "Screenshot 2025-05-27 160610.png",
            "Screenshot 2025-05-27 160632.png",
            "Screenshot 2025-05-27 160747.png",
            "Screenshot 2025-05-27 160812.png"
        ],
        description: "Designed and developed a visually appealing and user-friendly e-commerce website for the Shreenath Pooja Store, a platform dedicated to selling pooja essentials. Implemented filtering of products, dynamic cart management, and responsive design using HTML, CSS, JavaScript, and Bootstrap. Improved user experience through search, interactive navigation, and dynamic product display. Smooth cart integration with product quantity adjustments, price calculation, and local storage persistence.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","PHP","MySQL"],
        github: "https://github.com/abhishek2165/shreenath-pooja-store-website",
        live: "https://raw.githack.com/abhishek2165/shreenath-pooja-store-website/refs/heads/main/index.html"
    },
    2: {
        title: "Space Information Website",
        images: [
            "https://via.placeholder.com/800x500?text=Space+Website+1",
            "https://via.placeholder.com/800x500?text=Space+Website+2"
        ],
        description: "Developed a detailed website showcasing information about planets in space, providing users with a clean and interactive interface to explore planetary details dynamically. Displayed detailed facts and high-quality images for each planet using Bootstrap cards for structured presentation. Implemented smooth animations and transitions for better user engagement.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/yourusername/space-info-website",
        live: null // No live link for this project
    }
};

// Modal functionality
const modal = document.getElementById("projectModal");
const modalBody = document.querySelector(".modal-body");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".view-project-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const projectId = this.getAttribute("data-project");
        const project = projects[projectId];
        
        // Build modal content
        let modalContent = `
            <h2 class="project-title">${project.title}</h2>
            <div class="project-images">
        `;
        
        // Add project images
        project.images.forEach(img => {
            modalContent += `<img src="${img}" alt="${project.title}">`;
        });
        
        modalContent += `
            </div>
            <div class="project-description">
                ${project.description}
            </div>
            <div class="project-tech">
        `;
        
        // Add technologies
        project.technologies.forEach(tech => {
            modalContent += `<span>${tech}</span>`;
        });
        
        modalContent += `
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
        `;
        
        // Add live link if available
        if (project.live) {
            modalContent += `
                <a href="${project.live}" target="_blank" class="live-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            `;
        }
        
        modalContent += `</div>`;
        
        // Insert content and show modal
        modalBody.innerHTML = modalContent;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });
});

// Close modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close when clicking outside modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});