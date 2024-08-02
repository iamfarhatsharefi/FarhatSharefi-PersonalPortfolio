document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = navLinks.querySelectorAll('a');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID "${id}" not found.`);
    }
  };

  menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      navLinks.style.display = 'flex';
      menuIcon.innerHTML = '&times;';
    }
  });

  navLinksItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('logo');
  const logoText = 'FARHAT👩‍💻';
  logoElement.textContent = logoText;
  const myName = '<h2 class ="hello">Hello there,<span class="highlight">I`m</span></h2>';
  const myIntro = ` a graphic design student at Kabul University with a love for coding. I enjoy creating responsive and visually appealing websites, always eager to take on new challenges.`;
  const headline = document.getElementById('headline');
  const intro = document.getElementById('intro');
  headline.innerHTML = myName;
  intro.innerHTML = myIntro;
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = {
    description: `
   a dynamic and innovative junior web developer with a passion for blending technology and design. My journey through the tech world has been a thrilling adventure, enriched by diverse experiences and a commitment to excellence.
   In web development, I specialize in creating sleek, functional web solutions, leveraging my expertise in HTML, CSS, and JavaScript. My projects are a testament to my dedication to crafting high-quality, user-centered designs.
   Beyond the code, I embrace my role as a graphic design student at Kabul University. This creative pursuit allows me to master tools like Adobe Photoshop and Illustrator, enhancing my ability to produce visually captivating designs. My experience as a teacher further fuels my drive to inspire and assist others, sharing insights and fostering growth in the creative and tech communities.
   I thrive on collaboration and am always excited to join forces on projects that challenge and inspire. My mission is to blend cutting-edge technology with artistic flair to create impactful solutions that resonate with users and leave a lasting impression.
    `,
    
    skills: [
      {  image: 'images/html-5 2.png', name: 'HTML', alt: 'HTML' },
      {  image: 'images/css-3 2.png', name: 'Css', alt: 'CSS' },
      {  image: 'images/java-script 2.png', name: 'JavaScript', alt: 'JavaScript' },
    ],
  };

  const dynamicHeadlines = [
    'About Me',
    'Junior Web Developer'
  ];


  const headlineContainer = document.getElementById('dynamic-headlines');
  dynamicHeadlines.forEach(headlineText => {
    const headline = document.createElement('h2');
    headline.innerHTML = `<span class="highlight"></span>
    <span class="highlight">${headlineText}</span>`;
    headlineContainer.appendChild(headline);
  });
  const aboutContentDiv = document.getElementById('about-content');
  const skillsExperiencesDiv = document.getElementById('skills-experiences');
  const certificationContentDiv = document.getElementById('certification-content');

  // Populate description
  const descriptionSpan = document.createElement('span');
  descriptionSpan.innerHTML = aboutContent.description;
  aboutContentDiv.appendChild(descriptionSpan);

  // Populate skills
  aboutContent.skills.forEach((skill) => {
    const skillSpan = document.createElement('span');
    skillSpan.textContent = skill.name;
    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = skill.alt;
    skillsExperiencesDiv.appendChild(skillSpan);
    skillsExperiencesDiv.appendChild(skillImage);
  });

  // Populate certifications
  aboutContent.certifications.forEach((cert) => {
    const certDiv = document.createElement('div');
    const certTitle = document.createElement('h4');
    certTitle.textContent = cert.title;
    const certLink = document.createElement('a');
    certLink.href = cert.link;
    certLink.target = '_blank';
    const certImage = document.createElement('img');
    certImage.src = cert.image;
    certImage.alt = cert.title;
    certLink.appendChild(certImage);
    certDiv.appendChild(certTitle);
    certDiv.appendChild(certLink);
    certificationContentDiv.appendChild(certDiv);
  });
  
  const skillsHeading = document.createElement('h3');
  skillsHeading.innerHTML = `My<span class="highlight"> Skills:</span>`;
  const skillsArrow = document.createElement('i');
  skillsArrow.className = 'bx bx-chevron-down';
  skillsArrow.id = 'skills-arrow';
  
  skillsHeading.appendChild(skillsArrow);
  skillsExperiencesDiv.parentElement.insertBefore(skillsHeading, skillsExperiencesDiv);
   
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: ' 1: Survey Form',
      description: 'The form is designed to gather feedback about an English Program. It starts with a title and description explaining the purpose of the survey',    image: 'images/survey-form.png',
      longDescription: 'Welcome to the English Program Survey Form project description! This survey form is part of an initiative to gather feedback and insights from participants enrolled in our English program. The aim is to enhance the program\'s effectiveness, relevance, and overall learning experience based on community feedback.',
      screenshots: ['images/survey-form.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Survey-Form/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Survey-Form/pulls',
    },
    {
      title: ' 2: Product Landing page',
      description: 'This project is a Product Landing Page dedicated to the Gucci brand, showcasing their luxury fashion products. Created with HTML, styled using CSS',
      image: 'images/landing page.png',
      longDescription: 'The Product Landing Page project focused on the Gucci brand offers a captivating digital experience that celebrates the essence of luxury fashion. Crafted with HTML for structure, CSS for styling, and JavaScript for dynamic elements, this webpage serves as a virtual gateway to explore Gucci\'s prestigious line of products.',
      screenshots: ['images/landing page.png', 'images/S2.png', 'images/S3.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/product-landing-page/',
      sourceLink: 'https://github.com/iamfarhatsharefi/product-landing-page/pulls',
    },
    {
      title: ' 3: Technical Documentation Page',
      description: 'This project is a Technical Documentation Page dedicated to HTML, showcasing fundamental concepts and syntax',
      longDescription: 'The Technical Documentation Page project on HTML is a meticulously crafted resource designed to educate and empower learners and developers in mastering Hypertext Markup Language (HTML). Built entirely using HTML for structure and CSS for styling, this webpage serves as a comprehensive guide covering essential HTML concepts, tags, attributes, and best practices.',
      image: 'images/documentation-page.png',
      screenshots: ['images/documentation-page'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Technical-documentation/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Technical-documentation/pulls',
    },
    {
      title: ' 4: Personal Portfolio Webpage',
      description: 'My Personal Portfolio Webpage is a showcase of my skills and projects in web development. Built with HTML, CSS',
      image: 'images/portfolio.png',
      longDescription: 'The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development, designed to introduce visitors to my skills, projects, and professional profile. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my capabilities and contributions to the field.',
      screenshots: ['images/1 portfolio.png', 'images/portfolio.png', 'images/3 portfolio.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio/pulls',
    },
    {
      title: ' 5: Roman Numeral Converter',
      description: 'Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals.',
      image: 'images/roman.png',
      longDescription: 'Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.',
      screenshots: ['images/RR2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter/pulls',
    },
    {
      title: '6: palindrome-checker',
      description: 'Palindrome Checker is a web application designed to determine whether a given string is a palindrome. Developed using HTML, CSS, and JavaScript',
      image: 'images/Picture1.png',
      longDescription: 'Palindrome Checker is an innovative web application developed to determine whether a given string is a palindrome, meaning it reads the same forwards and backwards. This project is built using HTML, CSS, and JavaScript, demonstrating my proficiency in front-end web development and interactive design.',
      screenshots: ['images/PP2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
      sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker/pulls',
    },
    {
      title: '7: Telephone-Number-Validator',
      description: 'Telephone Number Validator is a web application designed to verify the validity of telephone numbers',
      image: 'images/Picture3.png',
      longDescription: 'Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.',
      screenshots: ['images/TT2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
      sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator/pulls',
    },
    {
      title: '8: Cash Register',
      description: 'Cash Register is a web application designed to calculate the change due for various transactions. Developed using HTML, CSS, and JavaScript',
      image: 'images/Picture4 cash register.png',
      longDescription: 'Cash Register is a sophisticated web application designed to handle cash transactions by calculating the change due with precision. This project, developed using HTML, CSS, and JavaScript, exemplifies my skills in building practical and interactive financial tools that offer a seamless user experience.',
      screenshots: ['images/C22.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Cash-Register/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Cash-Register/pulls',
    },
    {
      title: '9: Pokemon-search-App',
      description: '"Pokémon Search App is a web application that allows users to search for and view detailed information about various Pokémon.',
      image: 'images/picture 5.png',
      longDescription: 'Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.',
      screenshots: ['images/PPP2.png', 'images/PO2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
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
    // Highlighted: Dynamically generate and insert images
    document.getElementById('popup-images').innerHTML = project.screenshots.map((src) => (
      `<img src="${src}" alt="${project.title} Screenshot",>`
    )).join('');
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
     <p class="project-long-description">${project.longDescription}</p>
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <button class="see-more-btn" data-index="${index}">See More</button>`;
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
      const formUrl = 'https://formspree.io/f/mblroodb';
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
  document.addEventListener('DOMContentLoaded', () => {
    const socialIconsData = [
      { img: 'images/GitHub.png', name: 'GitHub', url: 'https://github.com/iamfarhatsharefi' },
      { img: 'images/fb.png', name: 'Facebook', url: 'https://www.facebook.com/Farhat.Sharefi' },
      { img: 'images/linkedin.png', name: 'LinkedIn', url: 'https://www.linkedin.com/in/farhat-sharefi-13a101309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { img: 'imagesWhtsApp.ng', name: 'WhatsApp', url: 'https://wa.me/0730011960' },
    ];
    const createSocialIcon = ({ img, name, url }) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.className = 'social-icon';
      const imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.alt = name;
      const span = document.createElement('span');
      span.textContent = name;
      a.appendChild(imgElement);
      a.appendChild(span);
      return a;
    };
    const socialIconsHomeDesktop = document.getElementById('social-icons-home-desktop');
    const socialIconsMobileAbout = document.getElementById('social-icons-mobile-about');
    const socialIconsMobileProjects = document.getElementById('social-icons-mobile-projects');
    const socialIconsMobileWorks = document.getElementById('social-icons-mobile-works');
    const socialIconsMobileContact = document.getElementById('social-icons-mobile-contact');
    const socialIconsMobileFooter = document.getElementById('social-icons-mobile-footer');
    socialIconsData.forEach((iconData) => {
      const iconElement = createSocialIcon(iconData);
      socialIconsHomeDesktop.appendChild(iconElement.cloneNode(true));
      socialIconsMobileAbout.appendChild(iconElement.cloneNode(true));
      socialIconsMobileProjects.appendChild(iconElement.cloneNode(true));
      socialIconsMobileWorks.appendChild(iconElement.cloneNode(true));
      socialIconsMobileContact.appendChild(iconElement.cloneNode(true));
      socialIconsMobileFooter.appendChild(iconElement.cloneNode(true));
    });
  });
   // New certificates section code
   const certificationContentDiv = document.getElementById('certification-content');
   const certifications = [
    
   ];
 
   certifications.forEach((cert) => {
     const certDiv = document.createElement('div');
     const certTitle = document.createElement('h4');
     certTitle.textContent = cert.title;
     const certLink = document.createElement('a');
     certLink.href = cert.link;
     certLink.target = '_blank';
     const certImage = document.createElement('img');
     certImage.src = cert.image;
     certImage.alt = cert.title;
     certLink.appendChild(certImage);
     certDiv.appendChild(certTitle);
     certDiv.appendChild(certLink);
     certificationContentDiv.appendChild(certDiv);
   });
 });
