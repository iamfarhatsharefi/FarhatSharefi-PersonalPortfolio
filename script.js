document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const headLine = document.getElementById('headline');
    const intro = document.getElementById('intro');
  
    const toggleMenu = () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776';
      }
    };
    menuIcon.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', () => {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776';
      });
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        menuIcon.style.display = 'none';
      } else {
        navLinks.style.display = 'none';
        menuIcon.style.display = 'block';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
      menuIcon.style.display = 'none';
    } else {
      navLinks.style.display = 'none';
      menuIcon.style.display = 'block';
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
  
    menuIcon.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      } else {
        navLinks.style.display = 'flex';
        menuIcon.innerHTML = '&times;';
      }
    });
  
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach((item) => {
      item.addEventListener('click', () => {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      });
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        menuIcon.style.display = 'none';
      } else {
        navLinks.style.display = 'none';
        menuIcon.style.display = 'block';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
      menuIcon.style.display = 'none';
    } else {
      navLinks.style.display = 'none';
      menuIcon.style.display = 'block';
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const myName = 'Farhat Sharefi';
    const myIntro = `Hello iam <span>${myName}</span>, a passionate graphic design student at Kabul University, where I blend creativity with precision to craft visually stunning designs. Simultaneously, I'm honing my web development skills at the Kick Start Foundation, mastering the art of coding to create seamless and dynamic digital experiences. My journey intertwines the realms of art and technology, driving me to innovate and inspire through every project I undertake. Welcome to my portfolio, where creativity meets code in a symphony of digital brilliance. `;
    const headline = document.getElementById('headline');
    const intro = document.getElementById('intro');
    headline.innerHTML = myName;
    intro.innerHTML = myIntro;
    document.querySelectorAll('.highlight').forEach((element) => {
      element.style.fontWeight = 'bold';
      element.style.color = 'blue';
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const skillsExperiences = [
      {
        skill: 'HTML',
        experience: 'junior coder',
      },
      {
        skill: 'CSS',
        experience: 'junior coder',
      },
      {
        skill: 'JavaScript',
        experience: 'junior coder',
      },
      {
        skill: 'GIT',
        experience: '6 months',
      },
      {
        skill: 'GITHUB',
        experience: '6 months',
        link: 'https://github.com/iamfarhatsharefi',
      },
      {
        skill: 'Responsive web design',
        experience: 'New certification description',
        link: 'https://www.freecodecamp.org/certification/Farhatsharefi/responsive-web-design',
        imageSrc: 'photo/responsive design.png',
      },
      {
        skill: 'Java Script',
        experience: 'New certification description',
        link: 'https://www.freecodecamp.org/certification/Farhatsharefi/javascript-algorithms-and-data-structures-v8',
        imageSrc: 'photo/java script.png',
      },
    ];
  
    const skillsExperiencesContainer = document.getElementById('skills-experiences');
    skillsExperiencesContainer.innerHTML = skillsExperiences.map((item) => `
        <div class="skill-experience">
        <h3>${item.skill}</h3>
        <p>${item.experience}</p>
        </div>
        `).join('');
    const certificationContainer = document.getElementById('certification-content');
    skillsExperiences.forEach((certification) => {
      if (certification.imageSrc && certification.link) {
        const certificationDiv = document.createElement('div');
        certificationDiv.classList.add('certification-item');
        const certificationTitle = document.createElement('h4');
        certificationTitle.textContent = certification.skill;
        certificationDiv.appendChild(certificationTitle);
        const certificationImage = document.createElement('img');
        certificationImage.src = certification.imageSrc;
        certificationImage.alt = `Certification for ${certification.skill}`;
        certificationDiv.appendChild(certificationImage);
        const certificationLink = document.createElement('a');
        certificationLink.href = certification.link;
        certificationLink.textContent = 'View Certification';
        certificationLink.textContent = 'View Certification';
        certificationLink.target = '_blank';
        certificationDiv.appendChild(certificationLink);
        certificationContainer.appendChild(certificationDiv);
      }
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
        title: 'Survey Form',
        shortDescription: "The form is designed to gather feedback about an English Program. It starts with a title and description explaining the purpose of the survey.",
        longDescription: "Welcome to the English Program Survey Form project description! This survey form is part of an initiative to gather feedback and insights from participants enrolled in our English program. The aim is to enhance the program's effectiveness, relevance, and overall learning experience based on community feedback.",
        image: 'photo/survey-form.png',
        screenshots: ['images/survey-form.png'],
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://iamfarhatsharefi.github.io/Survey-Form/',
        sourceLink: 'https://github.com/iamfarhatsharefi/Survey-Form/pulls',
      },
      {
        title: 'Technical Documentation Page',
        shortDescription: "This project is a Technical Documentation Page dedicated to HTML, showcasing fundamental concepts and syntax.",
        longDescription: "The Technical Documentation Page project on HTML is a meticulously crafted resource designed to educate and empower learners and developers in mastering Hypertext Markup Language (HTML). Built entirely using HTML for structure and CSS for styling, this webpage serves as a comprehensive guide covering essential HTML concepts, tags, attributes, and best practices.",
        image: "photo/documentation-page.png",
        screenshots: ['photo/documentation-page.png'],
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://iamfarhatsharefi.github.io/Technical-documentation/',
        sourceLink: 'https://github.com/iamfarhatsharefi/Technical-documentation/pulls',
      },
      {
        title: 'Product Landing Page',
        shortDescription: "This project is a Product Landing Page dedicated to the Gucci brand, showcasing their luxury fashion products. Created with HTML, styled using CSS",
        longDescription: "The Product Landing Page project focused on the Gucci brand offers a captivating digital experience that celebrates the essence of luxury fashion. Crafted with HTML for structure, CSS for styling, and JavaScript for dynamic elements, this webpage serves as a virtual gateway to explore Gucci's prestigious line of products.",
        image: 'photo/landing page.png',
        screenshots: ['photo/landing page.png'],
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://iamfarhatsharefi.github.io/product-landing-page/',
        sourceLink: 'https://github.com/iamfarhatsharefi/product-landing-page/pulls',
      },
      {
        title: 'Personal Portfolio Webpage',
        shortDescription: "My Personal Portfolio Webpage is a showcase of my skills and projects in web development. Built with HTML, CSS",
        longDescription: "The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development, designed to introduce visitors to my skills, projects, and professional profile. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my capabilities and contributions to the field.",
        image: 'photo/portfolio.png',
        screenshots: ['photo/portfolio.png'],
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
        sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio/pulls',
      },
      {
        title: 'Palindrome Checker',
        shortDescription: "Palindrome Checker is a web application designed to determine whether a given string is a palindrome. Developed using HTML, CSS, and JavaScript",
        longDescription: "Palindrome Checker is an innovative web application developed to determine whether a given string is a palindrome, meaning it reads the same forwards and backwards. This project is built using HTML, CSS, and JavaScript, demonstrating my proficiency in front-end web development and interactive design.",
        image: 'photo/picture1.png',
        screenshots: ['photo/picture1.png'],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
        liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
        sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker/pulls',
      },
      {
        title: 'Roman Numeral Converter ',
        shortDescription: "Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals. ",
        longDescription: "Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.",
        image: 'photo/roman.png',
        screenshots: ['photo/roman.png'],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
        liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/ ',
        sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter/pulls',
      },
      {
        title: 'Telephone Number Validator',
        shortDescription: "Telephone Number Validator is a web application designed to verify the validity of telephone numbers.",
        longDescription: "Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.",
        image: 'photo/picture3.png',
        screenshots: ['photo/picture3.png'],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
        liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
        sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator/pulls',
      },
      {
        title: 'Cash Register',
        shortDescription: "Cash Register is a web application designed to calculate the change due for various transactions. Developed using HTML, CSS, and JavaScript",
        longDescription: "Cash Register is a sophisticated web application designed to handle cash transactions by calculating the change due with precision. This project, developed using HTML, CSS, and JavaScript, exemplifies my skills in building practical and interactive financial tools that offer a seamless user experience.",
        image: 'photo/picture4 cash register.png',
        screenshots: ['photo/picture4.png'],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
        liveLink: 'https://iamfarhatsharefi.github.io/Cash-Register/',
        sourceLink: 'https://github.com/iamfarhatsharefi/Cash-Register/pulls',
      },
      {
        title: 'Pokeman Search App',
        shortDescription: "Pokémon Search App is a web application that allows users to search for and view detailed information about various Pokémon. ",
        longDescription: "Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.",
        image: 'photo/picture 5.png',
        screenshots: ['photo/picture 5.png'],
        technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
        liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
        sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App/pulls',
      },
    ];
  
  const worksSection = document.getElementById('works');
  const projectPopup = document.getElementById('project-popup');
  const closeBtn = document.getElementById('close-btn');
  const openProjectPopup = (index) => {
  const project = projects[index];
      document.getElementById('popup-title').textContent = project.title;
      document.getElementById('popup-description').textContent = project.description;
      document.getElementById('popup-image').src = project.image;
      document.getElementById('live-link').href = project.liveLink;
      document.getElementById('source-link').href = project.sourceLink;
      projectPopup.style.display = 'block';
    };
    projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project');
      projectCard.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <button class="see-more-btn" data-index="${index}">See More</button>
      `;
      worksSection.appendChild(projectCard);
      const seeMoreBtn = projectCard.querySelector('.see-more-btn');
      seeMoreBtn.addEventListener('click', () => openProjectPopup(index));
    });
    closeBtn.addEventListener('click', () => {
      projectPopup.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      if (event.target === projectPopup) {
        projectPopup.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
  
    const validateForm = () => {
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
      }
  
      if (emailInput.value !== emailInput.value.toLowerCase()) {
        errorMessage.textContent = 'Email must be in lowercase.';
        return false;
      }
      errorMessage.textContent = '';
      return true;
    };
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    nameInput.value = formData.name || '';
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        formData[input.name] = input.value;
        localStorage.setItem('formData', JSON.stringify(formData));
      });
    });
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        const formData = {
          name: nameInput.value.trim(),
          email: emailInput.value.trim().toLowerCase(),
          message: messageInput.value.trim(),
        };
        const formUrl = 'https://formspree.io/your_form_id_here';
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };
        fetch(formUrl, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.display = 'block';
      successMessage.style.color = 'green';
            contactForm.reset();
            localStorage.removeItem('formData');
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 5000);
          })
          .catch(() => {
  // eslint-disable-next-line no-alert
            alert('There was an issue sending your message. Please try again later.');
          });
      }
    });
  });
  