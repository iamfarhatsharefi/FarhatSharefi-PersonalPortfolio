document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });

    // Projects data
    const projects = [
        {
            name: "Project 1",
            description: "Short description of project 1",
            image: "project1.jpg",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveVersion: "https://live-version.com",
            source: "https://github.com/source"
        },
        
    ];

    const projectsContainer = document.getElementById('projects');
    const popup = document.getElementById('project-popup');
    const popupDetails = document.getElementById('popup-details');
    const closePopup = document.querySelector('.close');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.name}">
            <button class="view-details">See More</button>
        `;
        projectsContainer.appendChild(projectElement);

        projectElement.querySelector('.view-details').addEventListener('click', () => {
            popupDetails.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <img src="${project.image}" alt="${project.name}">
                <p>Technologies: ${project.technologies.join(', ')}</p>
                <a href="${project.liveVersion}" target="_blank">Live Version</a>
                <a href="${project.source}" target="_blank">Source Code</a>
            `;
            popup.classList.add('show');
        });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });

    // Form validation and local storage
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value.toLowerCase();
        const message = messageInput.value;

        if (name && email && message) {
            // Use Formspree service here for form submission
            // Example: fetch('https://formspree.io/f/{your_form_id}', {...})
            console.log('Form submitted:', { name, email, message });
        } else {
            alert('Please fill out all fields.');
        }
    });

    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };
            localStorage.setItem('contactFormData', JSON.stringify(formData));
        });
    });

    const savedFormData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedFormData) {
        nameInput.value = savedFormData.name;
        emailInput.value = savedFormData.email;
        messageInput.value = savedFormData.message;
    }
});